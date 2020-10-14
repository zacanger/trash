#ifndef CONFIG_H
#define CONFIG_H

// Windows key
#define MOD             Mod4Mask
#define MASTER_SIZE     0.6
#define BORDER_WIDTH    2

// Colors
#define FOCUS           "rgb:bc/57/66"
#define UNFOCUS         "rgb:88/88/88"

// Gaps
#define GAP_TOP 0
#define GAP_LEFT 0
#define GAP_RIGHT 0
#define GAP_BOTTOM 0
#define GAP 0

#define SHELL(cmd) {.com = (const char*[]){"sh", "-c", cmd, NULL}}
const char* dmenucmd[] = {"st", "-e", "run.sh",NULL};
const char* termcmd[] = {"st",NULL};

#define DESKTOPCHANGE(K,N) \
{  MOD,             K,                          change_desktop, {.i = N}}, \
{  MOD|ShiftMask,   K,                          client_to_desktop, {.i = N}}

// Shortcuts
static struct key keys[] = {
  // MOD              KEY                         FUNCTION        ARGS
  {  MOD,             XK_h,                       decrease,       {NULL}},
  {  MOD,             XK_l,                       increase,       {NULL}},
  {  MOD|ShiftMask,   XK_q,                       kill_client,    {NULL}},
  {  MOD,             XK_j,                       next_win,       {NULL}},
  {  MOD,             XK_Tab,                     next_win,       {NULL}},
  {  MOD,             XK_k,                       prev_win,       {NULL}},
  {  MOD|ShiftMask,   XK_j,                       move_down,      {NULL}},
  {  MOD|ShiftMask,   XK_k,                       move_up,        {NULL}},
  {  MOD|ShiftMask,   XK_Return,                  swap_master,    {NULL}},
  {  MOD,             XK_f,                       switch_mode,    {NULL}},
  {  MOD,             XK_space,                   switch_float,   {NULL}},
  {  MOD,             XK_q,                       switch_pin,     {NULL}},
  {  MOD,             XK_d,                       spawn,          {.com = dmenucmd}},
  {  MOD,             XK_Return,                  spawn,          {.com = termcmd}},
  {  MOD|ShiftMask|ControlMask, XK_h,             resize_float,   {.xy = {-5, 0}}},
  {  MOD|ShiftMask|ControlMask, XK_l,             resize_float,   {.xy = {5,  0}}},
  {  MOD|ShiftMask|ControlMask, XK_k,             resize_float,   {.xy = {0, -5}}},
  {  MOD|ShiftMask|ControlMask, XK_j,             resize_float,   {.xy = {0,  5}}},
  {  MOD|ControlMask, XK_h,                       move_float,     {.xy = {-5, 0}}},
  {  MOD|ControlMask, XK_l,                       move_float,     {.xy = {5,  0}}},
  {  MOD|ControlMask, XK_k,                       move_float,     {.xy = {0, -5}}},
  {  MOD|ControlMask, XK_j,                       move_float,     {.xy = {0,  5}}},
  {  MOD|ControlMask, XK_9,                       change_param,   {.param = {GapParam, -5}}},
  {  MOD|ControlMask, XK_0,                       change_param,   {.param = {GapParam, 5}}},
  {  MOD|ControlMask, XK_5,                       change_param,   {.param = {GapLeftParam, 5}}},
  {  MOD|ControlMask, XK_6,                       change_param,   {.param = {GapTopParam, 5}}},
  {  MOD|ControlMask, XK_7,                       change_param,   {.param = {GapRightParam, 5}}},
  {  MOD|ControlMask, XK_8,                       change_param,   {.param = {GapBottomParam, 5}}},
  {  MOD|ShiftMask|ControlMask, XK_5,             change_param,   {.param = {GapLeftParam, -5}}},
  {  MOD|ShiftMask|ControlMask, XK_6,             change_param,   {.param = {GapTopParam, -5}}},
  {  MOD|ShiftMask|ControlMask, XK_7,             change_param,   {.param = {GapRightParam, -5}}},
  {  MOD|ShiftMask|ControlMask, XK_8,             change_param,   {.param = {GapBottomParam, -5}}},
  DESKTOPCHANGE(   XK_0,                                       0),
  DESKTOPCHANGE(   XK_1,                                       1),
  DESKTOPCHANGE(   XK_2,                                       2),
  DESKTOPCHANGE(   XK_3,                                       3),

};

#endif

