/* This is where all config happens, unless/until
 * I write config file parsing.
 */
#ifndef CONFIG_H
#define CONFIG_H

/* Mod1: alt, Mod4: super
 * I prefer using super for everything WM-related since
 * other programs tend not to use it, and then I don't
 * have to worry potential conflicts with alt and ctrl
 * and keybinds in other programs
 */
#define MODKEY Mod4Mask

// 1 is 100%; primary window size
#define primary_SIZE 0.5

// Border colors (plain old CSS hex codes work here)
#define FOCUS "rgb:00/FF/FA"
#define UNFOCUS "rgb:0D/0D/0D"
// Gaps between windows in pixels
static int win_gaps = 2;
// Width of window borders in pixels
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

// Used below for super+{1..4}
#define DESKTOPCHANGE(K, N) \
  {MODKEY, K, change_desktop, {.i = N}}, \
  {MODKEY | ShiftMask, K, client_to_desktop, {.i = N}}

// Declared here
extern int swmode;

// Keybinds all here
static struct key keys[] = {
  /* Modifier(s), Key, Function, Args */

  // Change split size
  {MODKEY, XK_h, decrease, {NULL}},
  {MODKEY, XK_l, increase, {NULL}},

  // Change focus/active
  {MODKEY, XK_j, next_win, {NULL}},
  {MODKEY, XK_Tab, next_win, {NULL}},
  {MODKEY, XK_k, prev_win, {NULL}},
  {MODKEY | ControlMask, XK_j, focus_prev, {NULL}},
  {MODKEY | ControlMask, XK_k, focus_next, {NULL}},

  // Run custom commands
  {MODKEY, XK_space, spawn, {.com = menucmd}},
  {MODKEY, XK_Return, spawn, {.com = termcmd}},

  // Switch layouts
  {MODKEY | ControlMask, XK_space, switch_mode, {NULL}},
  {MODKEY | ControlMask, XK_Return, swap_primary, {NULL}},
  {MODKEY | ControlMask, XK_s, stackmode, {NULL}},

  // Change between the four desktops
  DESKTOPCHANGE(XK_1, 0),
  DESKTOPCHANGE(XK_2, 1),
  DESKTOPCHANGE(XK_3, 2),
  DESKTOPCHANGE(XK_4, 3)
};

#endif
