#include <X11/XF86keysym.h>
#include <X11/Xlib.h>
#include <X11/keysym.h>
#include <X11/XKBlib.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <unistd.h>

#define TABLENGTH(X) (sizeof(X) / sizeof(*X))

// Used for virtual desktops and custom programs
typedef union {
  const char **com;
  const int i;
} Arg;

// Handles the keysyms
struct key {
  unsigned int mod;
  KeySym keysym;
  void (*function)(const Arg arg);
  const Arg arg;
};

typedef struct client client;
struct client {
  client *next;
  client *prev;
  Window win;
};

typedef struct desktop desktop;
struct desktop {
  int primary_size;
  int mode;
  client *head;
  client *current;
};

// Forward declarations
static void add_window(Window w);
static void change_desktop(const Arg arg);
static void client_to_desktop(const Arg arg);
static void configurenotify(XEvent *e);
static void configurerequest(XEvent *e);
static void decrease();
static void dnotify(XEvent *e);
static void die(const char *e);
static unsigned long getcolor(const char *color);
static void grabkeys();
static void increase();
static void keypress(XEvent *e);
static void maprequest(XEvent *e);
static void focus_next();
static void focus_prev();
static void next_win();
static void prev_win();
static void remove_window(Window w);
static void save_desktop(int i);
static void select_desktop(int i);
static void setup();
static void sigchld(int unused);
static void spawn(const Arg arg);
static void stackmode();
static void start();
static void swap_primary();
static void switch_mode();
static void tile();
static void update_current();

// All user config is in this header file,
// unless/until I get some kind of config
// parsing working.
#include "config.h"

// Global vars
static Display *dis;
static int bool_quit;
static int current_desktop;
static int primary_size;
static int mode;
static int sh;
static int sw;
static int screen;
static unsigned int win_focus;
static unsigned int win_unfocus;
static Window root;
static client *head;
static client *current;
// Side stack
int swmode = 0;
// ALl the events we care about, at least for now
static void (*events[LASTEvent])(XEvent *e) = {
  [KeyPress] = keypress,
  [MapRequest] = maprequest,
  [DestroyNotify] = dnotify,
  [ConfigureNotify] = configurenotify,
  [ConfigureRequest] = configurerequest};

// Virtual desktop array
static desktop desktops[4];

void add_window(Window w) {
  client *c, *t;

  if (!(c = (client *)calloc(1, sizeof(client)))) {
    die("Error calloc!");
  }

  if (head == NULL) {
    c->next = NULL;
    c->prev = NULL;
    c->win = w;
    head = c;
  } else {
    for (t = head; t->next; t = t->next) {
      ;
    }

    c->next = NULL;
    c->prev = t;
    c->win = w;
    t->next = c;
  }

  current = c;
}

void change_desktop(const Arg arg) {
  client *c;

  if (arg.i == current_desktop) {
    return;
  }

  // Unmap all windows
  if (head != NULL) {
    for (c = head; c; c = c->next) {
      XUnmapWindow(dis, c->win);
    }
  }

  // Save current properties
  save_desktop(current_desktop);

  // Take the properties from the new desktop
  select_desktop(arg.i);

  // Map all windows
  if (head != NULL) {
    for (c = head; c; c = c->next) {
      XMapWindow(dis, c->win);
    }
  }

  tile();
  update_current();
}

void client_to_desktop(const Arg arg) {
  client *tmp = current;
  int tmp2 = current_desktop;

  if (arg.i == current_desktop || current == NULL) {
    return;
  }

  // Add the client to the desktop
  select_desktop(arg.i);
  add_window(tmp->win);
  save_desktop(arg.i);

  // Remove the client from the current desktop
  select_desktop(tmp2);
  remove_window(current->win);

  tile();
  update_current();
}

// TODO?
void configurenotify(XEvent *e) {  }

void configurerequest(XEvent *e) {
  // Thanks to dwm
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
  if (primary_size > 50) {
    primary_size -= 10;
    tile();
  }
}

void dnotify(XEvent *e) {
  int i = 0;
  client *c;
  XDestroyWindowEvent *ev = &e->xdestroywindow;

  // Thanks to catwm
  for (c = head; c; c = c->next) {
    if (ev->window == c->win) {
      i++;
    }
  }

  if (i == 0) {
    return;
  }

  remove_window(ev->window);
  tile();
  update_current();
}

void die(const char *e) {
  // When things go bad...
  fprintf(stdout, "lesswm: %s\n", e);
  exit(1);
}

unsigned long getcolor(const char *color) {
  XColor c;
  Colormap map = DefaultColormap(dis, screen);

  if (!XAllocNamedColor(dis, map, color, &c, &c)) {
    die("Error parsing color!");
  }

  return c.pixel;
}

void grabkeys() {
  int i;
  KeyCode code;

  // Loop over keys from config and bind each
  for (i = 0; i < TABLENGTH(keys); ++i) {
    if ((code = XKeysymToKeycode(dis, keys[i].keysym))) {
      XGrabKey(
          dis,
          code,
          keys[i].mod,
          root,
          True,
          GrabModeAsync,
          GrabModeAsync
          );
    }
  }
}

void increase() {
  if (primary_size < sw - 50) {
    primary_size += 10;
    tile();
  }
}

void keypress(XEvent *e) {
  int i;
  XKeyEvent ke = e->xkey;

  // KeySym keysym = XKeycodeToKeysym(dis, ke.keycode, 0);
  // TODO: is shift level correct here?
  KeySym keysym = XkbKeycodeToKeysym(dis, ke.keycode, 0, 0);

  for (i = 0; i < TABLENGTH(keys); ++i) {
    if (keys[i].keysym == keysym && keys[i].mod == ke.state) {
      keys[i].function(keys[i].arg);
    }
  }
}

void maprequest(XEvent *e) {
  XMapRequestEvent *ev = &e->xmaprequest;

  client *c;
  for (c = head; c; c = c->next) {
    if (ev->window == c->win) {
      XMapWindow(dis, ev->window);
      return;
    }
  }

  add_window(ev->window);
  XMapWindow(dis, ev->window);
  tile();
  update_current();
}

void focus_next() {
  Window tmp;
  if (
      current == NULL ||
      current->next == NULL ||
      current->win == head->win ||
      current->prev == NULL
     ) {
    return;
  }

  tmp = current->win;
  current->win = current->next->win;
  current->next->win = tmp;
  // Keep the moved window current
  next_win();
  tile();
  update_current();
}

void focus_prev() {
  Window tmp;
  if (
      current == NULL ||
      current->prev == head ||
      current->win == head->win
     ) {
    return;
  }

  tmp = current->win;
  current->win = current->prev->win;
  current->prev->win = tmp;
  prev_win();
  tile();
  update_current();
}

void next_win() {
  client *c;

  if (current != NULL && head != NULL) {
    if (current->next == NULL) {
      c = head;
    } else {
      c = current->next;
    }

    current = c;
    update_current();
  }
}

void prev_win() {
  client *c;

  if (current != NULL && head != NULL) {
    if (current->prev == NULL) {
      for (c = head; c->next; c = c->next) {
        ;
      }
    } else {
      c = current->prev;
    }

    current = c;
    update_current();
  }
}

void remove_window(Window w) {
  client *c;

  for (c = head; c; c = c->next) {
    if (c->win == w) {
      if (c->prev == NULL && c->next == NULL) {
        free(head);
        head = NULL;
        current = NULL;
        return;
      }
      if (c->prev == NULL) {
        head = c->next;
        c->next->prev = NULL;
        current = c->next;
      } else if (c->next == NULL) {
        c->prev->next = NULL;
        current = c->prev;
      } else {
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
  desktops[i].primary_size = primary_size;
  desktops[i].mode = mode;
  desktops[i].head = head;
  desktops[i].current = current;
}

void select_desktop(int i) {
  head = desktops[i].head;
  current = desktops[i].current;
  primary_size = desktops[i].primary_size;
  mode = desktops[i].mode;
  current_desktop = i;
}

void setup() {
  // Create a child process
  sigchld(0);

  // Create the screen and root win
  screen = DefaultScreen(dis);
  root = RootWindow(dis, screen);

  // Set screen width and height
  sw = XDisplayWidth(dis, screen);
  sh = XDisplayHeight(dis, screen);

  // Set up colors from config
  win_focus = getcolor(FOCUS);
  win_unfocus = getcolor(UNFOCUS);

  // Keybinds
  grabkeys();

  // Vertical stack
  mode = 0;

  // For exiting
  bool_quit = 0;

  // List of client
  head = NULL;
  current = NULL;

  // Screenwidth per XDisplayWidth
  primary_size = sw * primary_SIZE;

  // Set up the desktops
  int i;
  for (i = 0; i < TABLENGTH(desktops); ++i) {
    desktops[i].primary_size = primary_size;
    desktops[i].mode = mode;
    desktops[i].head = head;
    desktops[i].current = current;
  }

  // Select first desktop by default
  const Arg arg = {.i = 0};
  current_desktop = arg.i;
  change_desktop(arg);

  // Catch maprequest and dnotify if there's another wm running
  XSelectInput(dis, root, SubstructureNotifyMask | SubstructureRedirectMask);
}

void sigchld(int unused) {
  // Credit to dwm and catwm
  if (signal(SIGCHLD, sigchld) == SIG_ERR) {
    die("Can't install SIGCHLD handler");
  }
  while (0 < waitpid(-1, NULL, WNOHANG)) {
    ;
  }
}

void spawn(const Arg arg) {
  if (fork() == 0) {
    if (fork() == 0) {
      if (dis) {
        close(ConnectionNumber(dis));
      }
      setsid();
      execvp((char *)arg.com[0], (char **)arg.com);
    }
    exit(0);
  }
}

void start() {
  XEvent ev;

  // The real main loop, just handling events
  while (!bool_quit && !XNextEvent(dis, &ev)) {
    if (events[ev.type]) {
      events[ev.type](&ev);
    }
  }
}

void swap_primary() {
  Window tmp;

  if (head != NULL && current != NULL && current != head && mode == 0) {
    tmp = head->win;
    head->win = current->win;
    current->win = tmp;
    current = head;
    tile();
    update_current();
  }
}

void switch_mode() {
  mode = (mode == 0) ? 1 : 0;
  tile();
  update_current();
}

void stackmode() {
  // Shift from side to bottom stack
  if (swmode == 0) {
    primary_size = sh * primary_SIZE;
    swmode = 1;
  } else if (swmode == 1) {
    primary_size = sw * primary_SIZE;
    swmode = 0;
  }
  tile();
  update_current();
}

void tile() {
  // Geometry determined by (display, w, x, y, width, height)
  client *c;
  int n = 0;
  int y = 0;

  // If there's only one window
  if (head != NULL && head->next == NULL) {
    XMoveResizeWindow(
        dis,
        head->win,
        win_gaps,
        win_gaps,
        sw - (3 * win_gaps),
        sh - (win_gaps * 2)
        );
  } else if (head != NULL && swmode == 0) {
    // Side stack
    switch (mode) {
      case 0:
        // Primary window
        XMoveResizeWindow(
            dis,
            head->win,
            win_gaps,
            win_gaps,
            primary_size - (2 * win_gaps),
            sh - (2 * win_gaps)
            );

        // Stack
        for (c = head->next; c; c = c->next) {
          ++n;
        }
        for (c = head->next; c; c = c->next) {
          XMoveResizeWindow(
              dis,
              c->win,
              primary_size + win_gaps,
              y + win_gaps,
              sw - primary_size - (3 * win_gaps),
              (sh / n) - (2 * win_gaps)
              );
          y += (sh / n);
        }
        break;

      case 1:
        for (c = head; c; c = c->next) {
          XMoveResizeWindow(
              dis,
              c->win,
              win_gaps,
              win_gaps,
              sw - (2 * win_gaps),
              sh - (2 * win_gaps)
              );
        }
        break;
    }
  } else if (head != NULL && swmode == 1) {
    // Bottom stack
    switch (mode) {
      case 0:
        // Primary window
        XMoveResizeWindow(
            dis,
            head->win,
            win_gaps,
            win_gaps,
            sw - (2 * win_gaps),
            primary_size - (2 * win_gaps)
            );

        // Stack
        for (c = head->next; c; c = c->next) {
          ++n;
        }
        for (c = head->next; c; c = c->next) {
          XMoveResizeWindow(
              dis,
              c->win,
              y + win_gaps,
              primary_size + win_gaps,
              (sw / n) - (2 * win_gaps),
              sh - primary_size - (3 * win_gaps)
              );
          y += (sw / n);
        }
        break;

      case 1:
        for (c = head; c; c = c->next) {
          XMoveResizeWindow(
              dis,
              c->win,
              win_gaps,
              win_gaps,
              sw - (2 * win_gaps),
              sh - (2 * win_gaps)
              );
        }
        break;

      default:
        break;
    }
  }
}

void update_current() {
  client *c;

  for (c = head; c; c = c->next) {
    if (current == c) {
      // Enable current window
      XSetWindowBorderWidth(dis, c->win, win_borders);
      XSetWindowBorder(dis, c->win, win_focus);
      XSetInputFocus(dis, c->win, RevertToParent, CurrentTime);
      XRaiseWindow(dis, c->win);
    } else {
      XSetWindowBorder(dis, c->win, win_unfocus);
    }
  }
}

int main(int argc, char **argv) {
  /* Open display */
  if (!(dis = XOpenDisplay(NULL))) {
    die("Cannot open display!");
  }

  setup();
  start();
  XCloseDisplay(dis);

  return 0;
}