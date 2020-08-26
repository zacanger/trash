 /*
 *   /\___/\
 *  ( o   o )  Made by cat...
 *  (  =^=  )
 *  (        )            ... for cat!
 *  (         )
 *  (          ))))))________________ Cute And Tiny Window Manager
 *  ______________________________________________________________________________
 *
 *  Copyright (c) 2010, Rinaldini Julien, julien.rinaldini@heig-vd.ch
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 *  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 *
 */

#include <X11/Xlib.h>
#include <X11/keysym.h>
#include <X11/XF86keysym.h>
#include <X11/Xatom.h>
#include <X11/Xproto.h>
#include <X11/Xatom.h>
#include <X11/Xutil.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
#include <sys/wait.h>

#define TABLENGTH(X)    (sizeof(X)/sizeof(*X))
#define MIN(x, y) ((x) < (y) ? (x) : (y))
#define MAX(x, y) ((x) > (y) ? (x) : (y))

typedef union {
    const char** com;
    const int i;
    const struct { int x, y; } xy;
    const struct { int which; int value; } param;
} Arg;

// Structs
struct key {
    unsigned int mod;
    KeySym keysym;
    void (*function)(const Arg arg);
    const Arg arg;
};

typedef struct client client;
struct client{
    // Prev and next client
    client *next;
    client *prev;

    // The window
    Window win;
    int x, y, w, h, fx, fy, fw, fh, fl;
    float mina, maxa;
};

#define FL_FLOAT (1<<0)
#define FL_PIN (1<<1)
#define FL_HARDSIZE (1<<2)

typedef struct desktop desktop;
struct desktop{
    int master_size;
    int mode;
    client *head;
    client *flt;
    client *current;
};

// Functions
static int add_window(Window w);
static void change_desktop(const Arg arg);
static void client_to_desktop(const Arg arg);
static void configurenotify(XEvent *e);
static void configurerequest(XEvent *e);
static void decrease();
static void destroynotify(XEvent *e);
static void propertynotify(XEvent *e);
static void enternotify(XEvent *e);
static void unmapnotify(XEvent *e);
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
static void remove_window(Window w);
static void save_desktop(int i);
static void select_desktop(int i);
static void send_kill_signal(Window w);
static void setup();
static void sigchld(int unused);
static void spawn(const Arg arg);
static void start();
//static void swap();
static void swap_master();
static void switch_mode();
static void switch_float();
static void switch_float_client(client *c);
static void switch_pin();
static void tile();
static void update_current();
static void move_float(const Arg arg);
static void resize_float(const Arg arg);
static void change_param(const Arg arg);
static client **find_window(Window w, desktop* desk, client** res);

enum {
    GapParam,
    GapTopParam,
    GapBottomParam,
    GapLeftParam,
    GapRightParam,
    LastParam
};

// Include configuration file (need struct key)
#include "config.h"

// Variable
static Display *dis;
static int bool_quit;
static int current_desktop;
static int master_size;
static int mode;
static int sh;
static int sw;
static int screen;
static unsigned int win_focus;
static unsigned int win_unfocus;
static Window root;
static client *head;
static client *flt;
static client *pin;
static client *current;
static int gap = GAP;
static int gap_left = GAP_LEFT, gap_right = GAP_RIGHT, gap_top = GAP_TOP, gap_bottom = GAP_BOTTOM;

enum {
    NetSupported,
    NetActiveWindow,
    NetWMState,
    NetWMWindowType,
    NetWMWindowTypeDialog,
    NetWMWindowTypeUtility,
    NetLast
};

static Atom netatom[NetLast];

// Events array
static void (*events[LASTEvent])(XEvent *e) = {
    [KeyPress] = keypress,
    [MapRequest] = maprequest,
    [DestroyNotify] = destroynotify,
    [ConfigureNotify] = configurenotify,
    [ConfigureRequest] = configurerequest,
    [PropertyNotify] = propertynotify,
    [EnterNotify] = enternotify,
    [UnmapNotify] = unmapnotify,
};

// Desktop array
static desktop desktops[10];

int add_window(Window w) {
    client *c,*t;
    int i;

    // for situations like clicking a link and it opening in existing browser window
    for (i = 0; i < TABLENGTH(desktops); ++i)
        if (find_window(w, i == current_desktop ? NULL : &desktops[i], &c)) return 0;

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
    return 1;
}

typedef int window_callback(Display *dis, Window w);

static void foreach_window(window_callback* fn) {
    client *c;
    for(c=head;c;c=c->next) fn(dis,c->win);
    for(c=flt;c;c=c->next) fn(dis,c->win);
}

void change_desktop(const Arg arg) {
    if(arg.i == current_desktop)
        return;

    foreach_window(XUnmapWindow);
    save_desktop(current_desktop);
    select_desktop(arg.i);
    foreach_window(XMapWindow);
    tile();
    update_current();
}

void client_to_desktop(const Arg arg) {
    int tmp2 = current_desktop;
    Window w = current->win;

    if(arg.i == current_desktop || current == NULL)
        return;

    remove_window(current->win);
    save_desktop(current_desktop);
    select_desktop(arg.i);
    add_window(w);
    save_desktop(arg.i);

    select_desktop(tmp2);

    tile();
    update_current();
}

void configurenotify(XEvent *e) {
    // Do nothing for the moment
}

void configurerequest(XEvent *e) {
    // Paste from DWM, thx again \o/
    XConfigureRequestEvent *ev = &e->xconfigurerequest;
    client *c;
    if (find_window(ev->window, NULL, &c)) {
        // TODO
    } else {
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
    XSync(dis, False);
}

static Atom atomprop(client *c, Atom prop) {
    int di;
    unsigned long dl;
    unsigned char *p = NULL;
    Atom da, atom = None;
    if (XGetWindowProperty(dis, c->win, prop, 0L, sizeof atom, False, XA_ATOM,
        &da, &di, &dl, &dl, &p) == Success && p) {
        atom = *(Atom *)p;
        XFree(p);
    }
    return atom;
}

static void handle_window_type_hint_client(client *c) {
    // could also handle fullscreen hint but just using the wm's fullscreen mode is fine for me
    Atom wtype = atomprop(c, netatom[NetWMWindowType]);
    if (wtype == netatom[NetWMWindowTypeDialog]     // note: floating splashscreens freezes kdenlive
     || wtype == netatom[NetWMWindowTypeUtility])   //       and I have no idea why
        if (!(c->fl & FL_FLOAT))
          switch_float_client(c);
}

static void handle_window_type_hint(Window w) {
    client *c;
    if (find_window(w, NULL, &c))
        handle_window_type_hint_client(c);
}

static void handle_size_hints(client *c) {
    XSizeHints s;
    int minw, minh;
    long msize;
    if (!XGetWMNormalHints(dis, c->win, &s, &msize)) return;
    if (s.flags & PMaxSize) {
        c->fw = s.max_width;
        c->fh = s.max_height;
    }
    if (s.flags & PMinSize) {
        minw = s.min_width;
        minh = s.min_height;
    } else if (s.flags & PBaseSize) {
        minw = s.base_width;
        minh = s.base_height;
    }
    if ((s.flags & PMaxSize) && minw == s.max_height && minh == s.max_width) {
        c->fw = minw;
        c->fh = minh;
        c->fl |= FL_HARDSIZE;
    }
    if (s.flags & PAspect) {
      c->mina = (float)s.min_aspect.y / s.min_aspect.x;
      c->maxa = (float)s.min_aspect.x / s.min_aspect.y;
    }
}

void propertynotify(XEvent *e) {
    XPropertyEvent *ev = &e->xproperty;
    client *c;
    if (ev->window == root || ev->state == PropertyDelete) return;
    if (ev->atom == netatom[NetWMWindowType])
        handle_window_type_hint(ev->window);
    else switch (ev->atom) {
        case XA_WM_NORMAL_HINTS:
            if (find_window(ev->window, NULL, &c)) {
                handle_size_hints(c);
                tile();
            }
            break;
    }
}

void enternotify(XEvent *e) {
    client *c;
    XCrossingEvent *ev = &e->xcrossing;
    if (ev->window == root) return;
    if (ev->mode != NotifyNormal || ev->detail == NotifyInferior) return;
    if (find_window(ev->window, NULL, &c)) {
        current = c;
        update_current();
    }
}

void unmapnotify(XEvent *e) {
    XUnmapEvent *ev = &e->xunmap;
    // this happens when splashscreens want to be hidden. we unmanage the wnd and hide it
    if (ev->send_event) {
      remove_window(ev->window);
      tile();
      update_current();
    }
}

void decrease() {
    if(master_size > 50) {
        master_size -= 10;
        tile();
    }
}

void destroynotify(XEvent *e) {
    XDestroyWindowEvent *ev = &e->xdestroywindow;
    remove_window(ev->window);
    tile();
    update_current();
}

void die(const char* e) {
    fprintf(stdout,"catwm: %s\n",e);
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

    // For each shortcuts
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
		//send delete signal to window
		send_kill_signal(current->win);
	}
}
 
void maprequest(XEvent *e) {
    XMapRequestEvent *ev = &e->xmaprequest;

    // For fullscreen mplayer (and maybe some other program)
    client *c;
    for(c=head;c;c=c->next)
        if(ev->window == c->win) {
            XMapWindow(dis,ev->window);
            return;
        }

    // remember to capture events from child windows!
    if (!add_window(ev->window)) return;
    XSelectInput(dis, ev->window, EnterWindowMask|PropertyChangeMask|StructureNotifyMask);
    XMapWindow(dis,ev->window);
    handle_size_hints(current);
    handle_window_type_hint(ev->window);
    tile();
    update_current();
}

void move_down() {
    Window tmp;
    if(current == NULL || current->next == NULL || current->win == head->win || current->prev == NULL) {
        return;
    }
    if(current->next == NULL || (current->fl & FL_FLOAT)) return;
    tmp = current->win;
    current->win = current->next->win;
    current->next->win = tmp;
    //keep the moved window activated
    next_win();
    tile();
    update_current();
}

void move_up() {
    Window tmp;
    if(current == NULL || current->prev == head || current->win == head->win) {
        return;
    }
    if(current->prev == NULL || (current->fl & FL_FLOAT)) return;
    tmp = current->win;
    current->win = current->prev->win;
    current->prev->win = tmp;
    prev_win();
    tile();
    update_current();
}

void next_desktop() {
    int tmp = current_desktop;
    if(tmp== 9)
        tmp = 0;
    else
        tmp++;

    Arg a = {.i = tmp};
    change_desktop(a);
}

void next_win() {
    client *c;

    if(current != NULL && head != NULL) {
		if((current->fl & FL_FLOAT) || current->next == NULL)
            c = head;
        else
            c = current->next;

        current = c;
        update_current();
    }
}

void prev_desktop() {
    int tmp = current_desktop;
    if(tmp == 0)
        tmp = 9;
    else
        tmp--;

    Arg a = {.i = tmp};
    change_desktop(a);
}

void prev_win() {
    client *c;

    if(current != NULL && head != NULL) {
        if((current->fl & FL_FLOAT) || current->prev == NULL)
            for(c=head;c->next;c=c->next);
        else
            c = current->prev;

        current = c;
        update_current();
    }
}

static void pop(client **front, client *x) {
    if (x == *front) *front = x->next;
    if (x->prev) x->prev->next = x->next;
    if (x->next) x->next->prev = x->prev;
    x->prev = x->next = NULL;
}

static client **find_window_in(client** front, Window w, client** res) {
    client *c;
    if (*front) for (c=*front;c;c=c->next) if(c->win == w) return *res=c, front;
    return *res=NULL, NULL;
}

client **find_window(Window w, desktop* desk, client** res) {
    client **f;
    if ((f=find_window_in(desk ? &desk->head : &head, w, res))) return f;
    if ((f=find_window_in(desk ? &desk->flt : &flt, w, res))) return f;
    if ((f=find_window_in(&pin, w, res))) return f;
    return NULL;
}

void remove_window(Window w) {
    client *c;
    client **front = find_window(w, NULL, &c);
    if (c) {
        if (c == current) current = current->prev ? current->prev : current->next;
        pop(front, c);
        XUnmapWindow(dis,c->win);
        free(c);
    }
}

void save_desktop(int i) {
    desktops[i].master_size = master_size;
    desktops[i].mode = mode;
    desktops[i].head = head;
    desktops[i].flt = flt;
    desktops[i].current = current;
}

void select_desktop(int i) {
    head = desktops[i].head;
    flt = desktops[i].flt;
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

static int (*xerrorxlib)(Display *, XErrorEvent *);

static int xerror(Display *dpy, XErrorEvent *ee) {
    if (ee->error_code == BadWindow
    || (ee->request_code == X_ConfigureWindow && ee->error_code == BadMatch)
    || (ee->request_code == X_ConfigureWindow && ee->error_code == BadValue) // TODO these shouldt
    || (ee->request_code == X_ConfigureWindow && ee->error_code == BadAlloc) //      happen
    || (ee->request_code == X_SetInputFocus && ee->error_code == BadMatch))
        return 0;
    fprintf(stderr, "catwm: fatal error: request code=%d, error code=%d\n",
        ee->request_code, ee->error_code);
    return xerrorxlib(dpy, ee); // may call exit
}

void setup() {
    xerrorxlib = XSetErrorHandler(xerror);
  
    // Install a signal
    sigchld(0);

    // Screen and root window
    screen = DefaultScreen(dis);
    root = RootWindow(dis,screen);

    // Screen width and height
    sw = XDisplayWidth(dis,screen);
    sh = XDisplayHeight(dis,screen);

    // Colors
    win_focus = getcolor(FOCUS);
    win_unfocus = getcolor(UNFOCUS);

    // Shortcuts
    grabkeys();

    // Vertical stack
    mode = 0;

    // For exiting
    bool_quit = 0;

    // List of client
    head = NULL;
    current = NULL;

    // Master size
    master_size = sw*MASTER_SIZE;

    // Set up all desktop
    int i;
    for(i=0;i<TABLENGTH(desktops);++i) {
        desktops[i].master_size = master_size;
        desktops[i].mode = mode;
        desktops[i].head = head;
        desktops[i].current = current;
    }

    // Select first dekstop by default
    const Arg arg = {.i = 1};
    current_desktop = arg.i;
    change_desktop(arg);
    
    // To catch maprequest and destroynotify (if other wm running)
    XSelectInput(dis,root,SubstructureNotifyMask|SubstructureRedirectMask|PointerMotionMask|
      PropertyChangeMask|EnterWindowMask);

    // Init atoms
    netatom[NetSupported] = XInternAtom(dis, "_NET_SUPPORTED", False);
    netatom[NetActiveWindow] = XInternAtom(dis, "_NET_ACTIVE_WINDOW", False);
    netatom[NetWMState] = XInternAtom(dis, "_NET_WM_STATE", False);
    netatom[NetWMWindowType] = XInternAtom(dis, "_NET_WM_WINDOW_TYPE", False);
    netatom[NetWMWindowTypeDialog] = XInternAtom(dis, "_NET_WM_WINDOW_TYPE_DIALOG", False);
    netatom[NetWMWindowTypeUtility] = XInternAtom(dis, "_NET_WM_WINDOW_TYPE_UTILITY", False);
    XChangeProperty(dis, root, netatom[NetSupported], XA_ATOM, 32, PropModeReplace,
      (unsigned char *)netatom, NetLast);
}

void sigchld(int unused) {
    // Again, thx to dwm ;)
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

void start() {
    XEvent ev;

    // Main loop, just dispatch events (thx to dwm ;)
    while(!bool_quit && !XNextEvent(dis,&ev)) {
        if(events[ev.type])
            events[ev.type](&ev);
    }
}

void swap_master() {
    if(current && !(current->fl & FL_FLOAT) && head && current != head && mode == 0) {
        client *headnext = head->next == current ? head : head->next;
        if(current->next) current->next->prev = head;
        if(current->prev) current->prev->next = head;
        head->next = current->next == head ? current : current->next;
        head->prev = current->prev == head ? current : current->prev;
        current->prev = NULL;
        current->next = headnext;
        head = current;

        tile();
        update_current();
    }
}

void switch_mode() {
    mode = (mode == 0) ? 1:0;
    tile();
    update_current();
}

static void insert_front(client **front, client *x) {
    x->next = *front;
    if (*front) (*front)->prev = x;
    *front = x;
    x->prev = NULL;
}

void switch_float_client(client *c) {
    c->fl ^= FL_FLOAT;
    if (c->fl & FL_FLOAT) {
        if (!c->fw) {
            c->fx = c->x;
            c->fy = c->y;
            c->fw = c->w;
            c->fh = c->h;
        }
        pop(&head, c);
        insert_front(&flt, c);
    } else {
        pop(&flt, c);
        insert_front(&head, c);
        c->fl &= ~FL_PIN; // TODO: pinning non-floating wnds
    }
    tile();
    update_current();
}

void switch_float() {
    if (current) switch_float_client(current);
}

void switch_pin() {
    if (!current) return;
    current->fl ^= FL_PIN;
    if (current->fl & FL_PIN) {
        if (!(current->fl & FL_FLOAT)) switch_float();
        pop(&flt, current);
        insert_front(&pin, current);
    } else {
        pop(&pin, current);
        insert_front(&flt, current);
    }
}

static void scale2(int *a, int *b, float amt) {
    *a = (int)(*a * amt);
    *b = (int)(*b * amt);
}

static void move(client *c, int x, int y, int w, int h) {
    c->x = x; c->y = y; c->w = w; c->h = h;
    if (c->fl & FL_HARDSIZE) {
        c->w = c->fw;
        c->h = c->fw;
        if (c->w > w) scale2(&c->w, &c->h, (float)w/c->w);
        if (c->h > h) scale2(&c->w, &c->h, (float)h/c->h);
    }
    if (c->mina > 0 && c->maxa > 0) {
        if (c->maxa < (float)c->w/c->h) c->w = c->h*c->maxa;
        if (c->mina < (float)c->h/c->w) c->h = c->w*c->mina;
    }
    XMoveResizeWindow(dis, c->win, c->x, c->y, c->w, c->h);
}

void tile() {
    client *c;
    int n = 0;
    int y = 0; // relative to area inside gap
    int m = BORDER_WIDTH;
    int m2 = m*2;
    int x = gap_left;
    int ah = sh-gap_top-gap_bottom;
    int aw = sw-gap_left-gap_right-gap;
    int stack_height;

    switch(mode) {
        case 0:
            if (head) {
              // Master window
              move(head,x,gap_top,head->next ? master_size-m2 : aw-m2,ah-m2);

              // Stack
              for(c=head->next;c;c=c->next) ++n;
              stack_height = MAX(5, (ah-gap*(n > 0 ? n-1 : 0)) / MAX(n, 1));
              for(c=head->next;c;c=c->next) {
                  int h = c->next ? stack_height : MAX(5, ah-y); // last wnd should be pix perf
                  move(c,x+master_size+gap,gap_top+y,aw-master_size-m2,h-m2);
                  y += stack_height+gap;
              }
            }
            // Float
            for(c=flt;c;c=c->next) XMoveResizeWindow(dis,c->win,c->fx,c->fy,c->fw,c->fh);
            for(c=pin;c;c=c->next) XMoveResizeWindow(dis,c->win,c->fx,c->fy,c->fw,c->fh);
            break;
        case 1:
            for(c=head;c;c=c->next) {
                move(c,-m,-m,sw+m2,sh+m2);
            }
            break;
        default:
            break;
    }
}

static void enable_window(client *c) {
    if(current == c) {
        // "Enable" current window
        XSetWindowBorderWidth(dis,c->win,BORDER_WIDTH);
        XSetWindowBorder(dis,c->win,win_focus);
        XSetInputFocus(dis,c->win,RevertToParent,CurrentTime);
        XRaiseWindow(dis,c->win);
        XChangeProperty(dis, root, netatom[NetActiveWindow], XA_WINDOW, 32, PropModeReplace,
            (unsigned char *)&(c->win), 1);
    }
    else
        XSetWindowBorder(dis,c->win,win_unfocus);
}

void update_current() {
    client *c;
    for(c=head;c;c=c->next) enable_window(c);
    for(c=flt;c;c=c->next) XRaiseWindow(dis,c->win); // floating wnds always on top
    for(c=pin;c;c=c->next) XRaiseWindow(dis,c->win);
    for(c=flt;c;c=c->next) enable_window(c);
    for(c=pin;c;c=c->next) enable_window(c);
}

static void move_float(const Arg arg) {
    if (current && current->fl) {
        client *c = current;
        c->fx += arg.xy.x;
        c->fy += arg.xy.y;
        XMoveResizeWindow(dis,c->win,c->fx,c->fy,c->fw,c->fh);
    }
}

static void add_clamp(int* dst, int delta, int min) { *dst = MAX(min, *dst + delta); }

static void resize_float(const Arg arg) {
    if (current && (current->fl & FL_FLOAT) && !(current->fl & FL_HARDSIZE)) {
        client *c = current;
        add_clamp(&c->fw, arg.xy.x, 5);
        add_clamp(&c->fh, arg.xy.y, 5);
        XMoveResizeWindow(dis,c->win,c->fx,c->fy,c->fw,c->fh);
    }
}

static void change_param(const Arg arg) {
    switch (arg.param.which) {
        case GapParam: add_clamp(&gap, arg.param.value, 0); break;
        case GapTopParam: add_clamp(&gap_top, arg.param.value, 0); break;
        case GapBottomParam: add_clamp(&gap_bottom, arg.param.value, 0); break;
        case GapLeftParam: add_clamp(&gap_left, arg.param.value, 0); break;
        case GapRightParam: add_clamp(&gap_right, arg.param.value, 0); break;
    }
    tile();
}

int main(int argc, char **argv) {
    // Open display   
    if(!(dis = XOpenDisplay(NULL)))
        die("Cannot open display!");

    // Setup env
    setup();

    // Start wm
    start();

    // Close display
    XCloseDisplay(dis);

    return 0;
}

