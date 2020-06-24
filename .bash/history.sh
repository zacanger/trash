# shellcheck shell=bash

HISTCONTROL='erasedups:ignoreboth' # ignore lines with spaces, and duplicates
HISTIGNORE="ls:l:la:lo:lS:lv:a:k:cd:h:history:q:exit:c:clear:erm:clc:cerm"
HISTIGNORE="$HISTIGNORE:..:...:.:cs:co:ni:ns:vi:reload:gst:edrc:edal:fs:dbst:dbup:dbdn"
HISTIGNORE="$HISTIGNORE:ncu:gf:gd:g:v:nu:cla:shhh:todo:poweroff:tn:ncdu:startx"
HISTIGNORE="$HISTIGNORE:ls *:df *:ds *:cd *:g *:a *:f *:k *:v *:vi *:vim *:ds *"

if [[ $(uname) == 'Darwin' ]]; then
  HISTSIZE=10000 # length
  HISTFILESIZE=10000 # size
else
  HISTSIZE=1000 # length
  HISTFILESIZE=1000 # size
fi

HISTTIMEFORMAT='%F %T  ' # timestamp
PROMPT_COMMAND="${PROMPT_COMMAND:+$PROMPT_COMMAND ;} history -a"

