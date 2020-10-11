/* Change settings in this file before building */
#ifndef CONFIG_H
#define CONFIG_H

/* Mod1: alt, Mod4: super */
#define MODKEY Mod4Mask
/* Master, where 1 is 100% */
#define MASTER_SIZE 0.5

/* Colors */
#define FOCUS "rgb:12/2C/1B"
#define UNFOCUS "rgb:0d/0d/0d"

/* borders */
static int win_gaps = 4;    /* set gaps between windows */
static int win_borders = 1; /* set width of window borders */

/* add custom programs here. */
const char *menucmd[] = {"st", "-e", "run.sh", NULL};

/* Use the below to set your terminal of choice */
const char *termcmd[] = {"st", NULL};

/* Avoid multiple paste */
#define DESKTOPCHANGE(K, N) \
  {MODKEY, K, change_desktop, {.i = N}}, \
  {MODKEY | ShiftMask, K, client_to_desktop, {.i = N}}

/* declare stacking mode */
extern int swmode;

/* Define Keybinds for Programs Here */
static struct key keys[] = {
    /* modifier(s), key, function, args */

    /* grow and shrink split */
    {MODKEY, XK_h, decrease, {NULL}},
    {MODKEY, XK_l, increase, {NULL}},

    /* change focus */
    {MODKEY, XK_j, next_win, {NULL}},
    {MODKEY, XK_Tab, next_win, {NULL}},
    {MODKEY, XK_k, prev_win, {NULL}},
    {MODKEY | ControlMask, XK_j, focus_prev, {NULL}},
    {MODKEY | ControlMask, XK_k, focus_next, {NULL}},

    /* run things */
    {MODKEY, XK_space, spawn, {.com = menucmd}},
    {MODKEY, XK_Return, spawn, {.com = termcmd}},

    /* change layouts */
    {MODKEY | ControlMask, XK_space, switch_mode, {NULL}},
    {MODKEY | ControlMask, XK_Return, swap_master, {NULL}},
    {MODKEY | ControlMask, XK_s, stackmode, {NULL}},

    /* kill app, hard kill everything */
    {MODKEY | ControlMask, XK_x, kill_client, {NULL}},
    {MODKEY | ControlMask, XK_q, quit, {NULL}},

    /* change desktop */
    DESKTOPCHANGE(XK_1, 0),
    DESKTOPCHANGE(XK_2, 1),
    DESKTOPCHANGE(XK_3, 2),
    DESKTOPCHANGE(XK_4, 3)
};

#endif
