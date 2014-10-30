#include <X11/Xlib.h> /*the X-11 headers, because you need them*/
#include <X11/keysym.h> /*keysym for keysym to keycode*/
#include <X11/XF86keysym.h>
#include <stdio.h> /*the standard C input/output libs*/
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
#include <sys/wait.h>

#define TABLENGTH(X)    (sizeof(X)/sizeof(*X))

/* first, let's define a Type definition for the com pointer *
 * and the 'i' int. This will allow us to use virtual desktops*
 * later in the program, and to define custom programs */
typedef union {
    const char** com;
    const int i;
} Arg;

/* Structs */
/* here we tie our keysyms together*/
struct key {
    unsigned int mod;
    KeySym keysym;
    void (*function)(const Arg arg);
    const Arg arg;
};

typedef struct client client;
struct client{
    /* Previous and next client */
    client *next;
    client *prev;
    /* The window */
    Window win;
};

typedef struct desktop desktop;
struct desktop{
    int master_size;
    int mode;
    client *head;
    client *current;
};

/* Functions */
static void add_window(Window w);
static void change_desktop(const Arg arg);
static void client_to_desktop(const Arg arg);
static void configurenotify(XEvent *e);
static void configurerequest(XEvent *e);
static void decrease();
static void dnotify(XEvent *e);
static void die(const char* e);
static unsigned long getcolor(const char* color);
static void grabkeys();
static void increase();
static void keypress(XEvent *e);
static void kill_client();
static void maprequest(XEvent *e);
static void move_down();
static void move_up();
static void next_desktop();
static void next_win();
static void prev_desktop();
static void prev_win();
static void quit();
static void remove_window(Window w);
static void save_desktop(int i);
static void select_desktop(int i);
static void send_kill_signal(Window w);
static void setup();
static void sigchld(int unused);
static void spawn(const Arg arg);
static void wmrestore();
static void stackmode();
static void start();
static void swap_master();
static void switch_mode();
static void tile();
static void update_current();

/* Include configuration file */
#include "config.h"

/* Globally Declared Variables */
static Display *dis;
static int bool_quit;
static int current_desktop;
static int master_size;
static int mode;
static int sh; /* screen height */
static int sw; /* screen width */
static int screen;
static unsigned int win_focus;
static unsigned int win_unfocus;
static Window root;
static client *head;
static client *current;
int swmode = 0; /*start with side stack*/
/* Events array */
static void (*events[LASTEvent])(XEvent *e) = {
    [KeyPress] = keypress,
    [MapRequest] = maprequest,
    [DestroyNotify] = dnotify,
    [ConfigureNotify] = configurenotify,
    [ConfigureRequest] = configurerequest
};

/* Desktop array */
/* Provides the "virtual desktops", which can be modified *
 * to include more, I always use fewer than available *
 * so, modify to fit your needs */
static desktop desktops[4];

void add_window(Window w) {
    client *c,*t;

    if(!(c = (client *)calloc(1,sizeof(client))))
        die("Error calloc!");

    if(head == NULL) {
        c->next = NULL;
        c->prev = NULL;
        c->win = w;
        head = c;
    }
    else {
        for(t=head;t->next;t=t->next);

        c->next = NULL;
        c->prev = t;
        c->win = w;

        t->next = c;
    }

    current = c;
}

void change_desktop(const Arg arg) {
    client *c;

    if(arg.i == current_desktop)
        return;

    /* Unmap all window */
    if(head != NULL)
        for(c=head;c;c=c->next)
            XUnmapWindow(dis,c->win);

    /* Save current "properties" */
    save_desktop(current_desktop);

    /* Take "properties" from the new desktop */
    select_desktop(arg.i);

    /* Map all windows */
    if(head != NULL)
        for(c=head;c;c=c->next)
            XMapWindow(dis,c->win);

    tile();
    update_current();
}

void client_to_desktop(const Arg arg) {
    client *tmp = current;
    int tmp2 = current_desktop;

    if(arg.i == current_desktop || current == NULL)
        return;

    /* Add client to desktop */
    select_desktop(arg.i);
    add_window(tmp->win);
    save_desktop(arg.i);

    /* Remove client from current desktop */
    select_desktop(tmp2);
    remove_window(current->win);

    tile();
    update_current();
}

void configurenotify(XEvent *e) {
    /* Do nothing for the moment */
}

void configurerequest(XEvent *e) {
    /* "Borrowed" from DWM */
    XConfigureRequestEvent *ev = &e->xconfigurerequest;
    XWindowChanges wc;
    wc.x = ev->x;
    wc.y = ev->y;
    wc.width = ev->width;
    wc.height = ev->height;
    wc.border_width = ev->border_width;
    wc.sibling = ev->above;
    wc.stack_mode = ev->detail;
    XConfigureWindow(dis, ev->window, ev->value_mask, &wc);
}

void decrease() {
    if(master_size > 50) {
        master_size -= 10;
        tile();
    }
}

void dnotify(XEvent *e) {
    int i=0;
    client *c;
    XDestroyWindowEvent *ev = &e->xdestroywindow;

    /* Stole this all from catwm */
    for(c=head;c;c=c->next)
        if(ev->window == c->win)
            i++;

    /* End of the outright theft */
    if(i == 0)
        return;

    remove_window(ev->window);
    tile();
    update_current();
}

void die(const char* e) {
    /* Sometimes, things go wrong...
     * when they do, we should let people know what happened.
     * all errors print to stdout, and then we exit the wm */
    fprintf(stdout,"hcwm: %s\n",e);
    exit(1);
}

unsigned long getcolor(const char* color) {
    XColor c;
    Colormap map = DefaultColormap(dis,screen);

    if(!XAllocNamedColor(dis,map,color,&c,&c))
        die("Error parsing color!");

    return c.pixel;
}

void grabkeys() {
    int i;
    KeyCode code;

    /* For each shortcut */
    for(i=0;i<TABLENGTH(keys);++i) {
        if((code = XKeysymToKeycode(dis,keys[i].keysym))) {
            XGrabKey(dis,code,keys[i].mod,root,True,GrabModeAsync,GrabModeAsync);
        }
    }
}

void increase() {
    if(master_size < sw-50) {
        master_size += 10;
        tile();
    }
}

void keypress(XEvent *e) {
    int i;
    XKeyEvent ke = e->xkey;
    KeySym keysym = XKeycodeToKeysym(dis,ke.keycode,0);

    for(i=0;i<TABLENGTH(keys);++i) {
        if(keys[i].keysym == keysym && keys[i].mod == ke.state) {
            keys[i].function(keys[i].arg);
        }
    }
}

void kill_client() {
    if(current != NULL) {
	/*send delete signal to window*/
	XEvent ke;
	ke.type = ClientMessage;
	ke.xclient.window = current->win;
	ke.xclient.message_type = XInternAtom(dis, "WM_PROTOCOLS", True);
	ke.xclient.format = 32;
	ke.xclient.data.l[0] = XInternAtom(dis, "WM_DELETE_WINDOW", True);
	ke.xclient.data.l[1] = CurrentTime;
	XSendEvent(dis, current->win, False, NoEventMask, &ke);
	send_kill_signal(current->win);
    }
}

void maprequest(XEvent *e) {
    XMapRequestEvent *ev = &e->xmaprequest;

    client *c;
    for(c=head;c;c=c->next)
        if(ev->window == c->win) {
            XMapWindow(dis,ev->window);
            return;
        }

    add_window(ev->window);
    XMapWindow(dis,ev->window);
    tile();
    update_current();
}

void move_down() {
    Window tmp;
    if(current == NULL || current->next == NULL || current->win == head->win || current->prev == NULL) {
        return;
    }
    tmp = current->win;
    current->win = current->next->win;
    current->next->win = tmp;
    /*keep the moved window activated*/
    next_win();
    tile();
    update_current();
}

void move_up() {
    Window tmp;
    if(current == NULL || current->prev == head || current->win == head->win) {
        return;
    }
    tmp = current->win;
    current->win = current->prev->win;
    current->prev->win = tmp;
    prev_win();
    tile();
    update_current();
}

void next_desktop() {
    int tmp = current_desktop;
    /* Need to set this to max desktop number */
    /* +1 because we're indexing from 1 */
    if(tmp==5)
        tmp = 0;
    else
        tmp++;

    Arg a = {.i = tmp};
    change_desktop(a);
}

void next_win() {
    client *c;

    if(current != NULL && head != NULL) {
	if(current->next == NULL)
            c = head;
        else
            c = current->next;

        current = c;
        update_current();
    }
}

void prev_desktop() {
    /* This rolls through the virtual desktops *
     * notice, that we go to 3 if we're at 0, *
     * so if you change # of V-desktops, this should also change */
    int tmp = current_desktop;
    if(tmp == 0)
        tmp = 3;
    else
        tmp--;

    Arg a = {.i = tmp};
    change_desktop(a);
}

void prev_win() {
    client *c;

    if(current != NULL && head != NULL) {
        if(current->prev == NULL)
            for(c=head;c->next;c=c->next);
        else
            c = current->prev;

        current = c;
        update_current();
    }
}

void quit() {
    Window root_return, parent;
    Window *children;
    int i;
    unsigned int nchildren;
    XEvent ev;

    /*
     Hardcore death-kill which I borrowed from catwm
     * if a client refuses to terminate itself,
     * we kill every window remaining the brutal way.
     * Since we're stuck in the while(nchildren > 0) { ... } loop
     * we can't exit through the main method.
     * This all happens if MOD+q is pushed a second time.
     */
    if(bool_quit == 1) {
        XUngrabKey(dis, AnyKey, AnyModifier, root);
        XDestroySubwindows(dis, root);
        fprintf(stdout, "hcwm shutdown initiated.\n");
        XCloseDisplay(dis);
        die("forced shutdown");
    }

    bool_quit = 1;
    XQueryTree(dis, root, &root_return, &parent, &children, &nchildren);
    for(i = 0; i < nchildren; i++) {
        send_kill_signal(children[i]);
    }
    /* keep alive until all windows are killed */
    while(nchildren > 0) {
        XQueryTree(dis, root, &root_return, &parent, &children, &nchildren);
        XNextEvent(dis,&ev);
        if(events[ev.type])
            events[ev.type](&ev);
    }

    XUngrabKey(dis,AnyKey,AnyModifier,root);
    fprintf(stdout,"hcwm shutdown initiated\n");
}

void remove_window(Window w) {
    client *c;

    for(c=head;c;c=c->next) {

        if(c->win == w) {
            if(c->prev == NULL && c->next == NULL) {
                free(head);
                head = NULL;
                current = NULL;
                return;
            }
            if(c->prev == NULL) {
                head = c->next;
                c->next->prev = NULL;
                current = c->next;
            }
            else if(c->next == NULL) {
                c->prev->next = NULL;
                current = c->prev;
            }
            else {
                c->prev->next = c->next;
                c->next->prev = c->prev;
                current = c->prev;
            }
            free(c);
            return;
        }
    }
}

void save_desktop(int i) {
    desktops[i].master_size = master_size;
    desktops[i].mode = mode;
    desktops[i].head = head;
    desktops[i].current = current;
}

void select_desktop(int i) {
    head = desktops[i].head;
    current = desktops[i].current;
    master_size = desktops[i].master_size;
    mode = desktops[i].mode;
    current_desktop = i;
}

void send_kill_signal(Window w) {
    XEvent ke;
    ke.type = ClientMessage;
    ke.xclient.window = w;
    ke.xclient.message_type = XInternAtom(dis, "WM_PROTOCOLS", True);
    ke.xclient.format = 32;
    ke.xclient.data.l[0] = XInternAtom(dis, "WM_DELETE_WINDOW", True);
    ke.xclient.data.l[1] = CurrentTime;
    XSendEvent(dis, w, False, NoEventMask, &ke);
}

void setup() {
    /* Create a child process */
    sigchld(0);
    /* Screen and root window */
    screen = DefaultScreen(dis);
    root = RootWindow(dis,screen);
    /* Screen width and height */
    sw = XDisplayWidth(dis,screen);
    sh = XDisplayHeight(dis,screen);
    /* Colors */
    win_focus = getcolor(FOCUS);
    win_unfocus = getcolor(UNFOCUS);
    /* Shortcuts */
    grabkeys();
    /* Vertical stack */
    mode = 0;
    /* For exiting */
    bool_quit = 0;
    /* List of client */
    head = NULL;
    current = NULL;

    /* Master size */
    master_size = sw*MASTER_SIZE; /*screenwidth per XDisplayWidth*/

    /* Set up all desktop */
    int i;
    for(i=0;i<TABLENGTH(desktops);++i) {
        desktops[i].master_size = master_size;
        desktops[i].mode = mode;
        desktops[i].head = head;
        desktops[i].current = current;
    }

    /* Select first dekstop by default */
    const Arg arg = {.i = 0};
    current_desktop = arg.i;
    change_desktop(arg);

    /* To catch maprequest and dnotify (if other wm running) */
    XSelectInput(dis,root,SubstructureNotifyMask|SubstructureRedirectMask);
}

void sigchld(int unused) {
    /* Again, thx to dwm and catwm */
    if(signal(SIGCHLD, sigchld) == SIG_ERR)
	die("Can't install SIGCHLD handler");
    while(0 < waitpid(-1, NULL, WNOHANG));
}

void spawn(const Arg arg) {
    if(fork() == 0) {
        if(fork() == 0) {
            if(dis)
                close(ConnectionNumber(dis));
            setsid();
            execvp((char*)arg.com[0],(char**)arg.com);
        }
        exit(0);
    }
}

void wmrestore(void) {
    /* if you don't want the bash startup script *
     * remove the 'system' line from the program here *
     * and also in the MAIN function...profit */
    system("~/.hcwmrc off");
    setsid();
    execvp((char*)wmrestor[0], (char**)wmrestor);
}

void start() {
    XEvent ev;

    /* Main loop, just dispatch events */
    while(!bool_quit && !XNextEvent(dis,&ev)) {
        if(events[ev.type])
            events[ev.type](&ev);
    }
}

void swap_master() {
    Window tmp;

    if(head != NULL && current != NULL && current != head && mode == 0) {
        tmp = head->win;
        head->win = current->win;
        current->win = tmp;
        current = head;
        tile();
        update_current();
    }
}

void switch_mode() {
    mode = (mode == 0) ? 1:0;
    tile();
    update_current();
}

void stackmode() {
    /* shift from side to bottom stack */
    if(swmode == 0) {
	master_size = sh*MASTER_SIZE;
	swmode = 1;
    }
    else if(swmode == 1) {
	master_size = sw*MASTER_SIZE;
	swmode = 0;
    }
    tile();
    update_current();
}

void tile() {
    /* geometry determined by (display, w, x, y, width, height) */
    client *c;
    int n = 0;
    int y = 0;

    /* If only one window */
    if(head != NULL && head->next == NULL) {
        XMoveResizeWindow(dis,head->win,gaps,gaps,sw-(3*gaps),sh-(gaps*2));
    }
/* side stack */
    else if(head != NULL && swmode == 0) {
        switch(mode) {
    	case 0:
    	    /* Master window */
    	    XMoveResizeWindow(dis,head->win,gaps,gaps,master_size-(2*gaps),sh-(2*gaps));

    	    /* Stack */
    	    for(c=head->next;c;c=c->next) ++n;
    	    for(c=head->next;c;c=c->next) {
    		XMoveResizeWindow(dis,c->win,master_size+gaps,y+gaps,sw-master_size-(3*gaps),(sh/n)-(2*gaps));
    		y += sh/n;
    	    }
    	    break;
    	case 1:
    	    for(c=head;c;c=c->next) {
    		XMoveResizeWindow(dis,c->win,gaps,gaps,sw-(2*gaps),sh-(2*gaps));
    	    }
    	    break;
	}
    }
    /*bottom stack*/
    else if(head != NULL && swmode == 1) {
        switch(mode) {
	case 0:
	    /* Master window */
	    XMoveResizeWindow(dis,head->win,gaps,gaps,sw-(2*gaps),master_size-(2*gaps));

	    /* Stack */
	    for(c=head->next;c;c=c->next) ++n;
	    for(c=head->next;c;c=c->next) {
		XMoveResizeWindow(dis,c->win,y+gaps,master_size + gaps,(sw/n)-(2*gaps),sh-master_size-(3*gaps));
		y += sw/n;
	    }
	    break;
	case 1:
	    for(c=head;c;c=c->next) {
		XMoveResizeWindow(dis,c->win,gaps,gaps,sw-(2*gaps),sh-(2*gaps));
	    }
	    break;

	default:
	    break;
        }
    }
}

void update_current() {
    client *c;

    for(c=head;c;c=c->next)
        if(current == c) {
            /* "Enable" current window */
            XSetWindowBorderWidth(dis,c->win,boarders);
            XSetWindowBorder(dis,c->win,win_focus);
            XSetInputFocus(dis,c->win,RevertToParent,CurrentTime);
            XRaiseWindow(dis,c->win);
        }
        else
            XSetWindowBorder(dis,c->win,win_unfocus);
}

int main(int argc, char **argv) {
    /* Open display */
    if(!(dis = XOpenDisplay(NULL)))
        die("Cannot open display!");

    /* Setup env */
    setup();

    /* run starting bash script */
    /* also remove this line if you don't *
     * want the bash script to run at startup */
    system("~/.hcwmrc on");

    /* Start wm */
    start();

    /* Close display */
    XCloseDisplay(dis);

    return 0;
}
