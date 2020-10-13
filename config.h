/* Change settings in this file before building */
#ifndef CONFIG_H
#define CONFIG_H

/* Mod1: alt, Mod4: super */
/* I prefer using super for everything WM-related since
 * other programs tend not to use it, and then I don't
 * have to worry potential conflicts with alt and ctrl
 * and keybinds in other programs
 */
#define MODKEY Mod4Mask

/* 1 is 100%; master window size */
#define MASTER_SIZE 0.5

/* Border colors (plain old CSS hex codes work here) */
#define FOCUS "rgb:00/FF/FA"
#define UNFOCUS "rgb:0D/0D/0D"
/* Gaps between windows in pixels */
static int win_gaps = 2;
/* Width of window borders in pixels */
static int win_borders = 2;

/* This should be your menu or launcher. It could be
 * dmenu_run, rofi_run, or some other thing. I launch
 * my own run script in a terminal.
 */
const char *menucmd[] = {"st", "-e", "run.sh", NULL};

/* Your terminal. I use st. Even if you don't change
 * anything else, you should make sure this is correct,
 * otherwise you won't be able to do anything
 */
const char *termcmd[] = {"st", NULL};

/* Used below for super+{1..4} */
#define DESKTOPCHANGE(K, N) \
  {MODKEY, K, change_desktop, {.i = N}}, \
  {MODKEY | ShiftMask, K, client_to_desktop, {.i = N}}

/* Declare stacking mode */
extern int swmode;

/* Keybinds */
static struct key keys[] = {
    /* Modifier(s), Key, Function, Args */

    /* Grow and shrink split */
    {MODKEY, XK_h, decrease, {NULL}},
    {MODKEY, XK_l, increase, {NULL}},

    /* Change focus */
    {MODKEY, XK_j, next_win, {NULL}},
    {MODKEY, XK_Tab, next_win, {NULL}},
    {MODKEY, XK_k, prev_win, {NULL}},
    {MODKEY | ControlMask, XK_j, focus_prev, {NULL}},
    {MODKEY | ControlMask, XK_k, focus_next, {NULL}},

    /* Run things */
    {MODKEY, XK_space, spawn, {.com = menucmd}},
    {MODKEY, XK_Return, spawn, {.com = termcmd}},

    /* Change layouts */
    {MODKEY | ControlMask, XK_space, switch_mode, {NULL}},
    {MODKEY | ControlMask, XK_Return, swap_master, {NULL}},
    {MODKEY | ControlMask, XK_s, stackmode, {NULL}},

    /* Change desktop */
    DESKTOPCHANGE(XK_1, 0),
    DESKTOPCHANGE(XK_2, 1),
    DESKTOPCHANGE(XK_3, 2),
    DESKTOPCHANGE(XK_4, 3)
};

#endif
