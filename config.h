#ifndef CONFIG_H
#define CONFIG_H

// Mod4 is Super, Mod1 is Alt
#define MODKEY Mod4Mask
#define PRIMARY_SIZE 0.5
#define BORDER_WIDTH 2

// Border colors (plain old CSS hex codes work here)
#define FOCUS "rgb:00/FF/FA"
#define UNFOCUS "rgb:0D/0D/0D"

// Gaps
#define GAP_TOP 0
#define GAP_LEFT 0
#define GAP_RIGHT 0
#define GAP_BOTTOM 0
#define GAP 0

// Set terminal and app runner/menu here
const char *menucmd[] = {"st", "-e", "run.sh", NULL};
const char *termcmd[] = {"st", NULL};

#define DESKTOPCHANGE(K, N) \
  {MODKEY, K, change_desktop, {.i = N}}, \
  {MODKEY | ShiftMask, K, client_to_desktop, {.i = N}}

// Keybinds
static struct key keys[] = {
  // Modifier(s), Key, Function, Args

  // Change split size
  {MODKEY, XK_h, decrease, {NULL}},
  {MODKEY, XK_l, increase, {NULL}},

  // Change focus/active
  {MODKEY, XK_j, next_win, {NULL}},
  {MODKEY, XK_k, prev_win, {NULL}},

  // Move windows on the stacked size up and down
  {MODKEY | ShiftMask, XK_j, move_down, {NULL}},
  {MODKEY | ShiftMask, XK_k, move_up, {NULL}},

  // To do with modes and things
  {MODKEY | ShiftMask, XK_Return, swap_primary, {NULL}},
  {MODKEY, XK_f, switch_mode, {NULL}},
  {MODKEY, XK_space, switch_float, {NULL}},
  {MODKEY, XK_q, switch_pin, {NULL}},

  // Run commands
  {MODKEY, XK_d, spawn, {.com = menucmd}},
  {MODKEY, XK_Return, spawn, {.com = termcmd}},

  // Resize floats
  {MODKEY | ShiftMask | ControlMask, XK_h, resize_float, {.xy = {-5, 0}}},
  {MODKEY | ShiftMask | ControlMask, XK_l, resize_float, {.xy = {5, 0}}},
  {MODKEY | ShiftMask | ControlMask, XK_k, resize_float, {.xy = {0, -5}}},
  {MODKEY | ShiftMask | ControlMask, XK_j, resize_float, {.xy = {0, 5}}},

  // Move floats
  {MODKEY | ControlMask, XK_h, move_float, {.xy = {-5, 0}}},
  {MODKEY | ControlMask, XK_l, move_float, {.xy = {5, 0}}},
  {MODKEY | ControlMask, XK_k, move_float, {.xy = {0, -5}}},
  {MODKEY | ControlMask, XK_j, move_float, {.xy = {0, 5}}},

  // Change between desktops
  DESKTOPCHANGE(XK_0, 0),
  DESKTOPCHANGE(XK_1, 1),
  DESKTOPCHANGE(XK_2, 2),
  DESKTOPCHANGE(XK_3, 3),
};

#endif
