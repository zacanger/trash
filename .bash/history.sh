# shellcheck shell=bash

HISTCONTROL='erasedups:ignoreboth' # ignore lines with spaces, and duplicates
HISTIGNORE="ls:l:la:lo:lS:lv:a:k:cd:h:history:q:exit:c:clear:erm:clc:cerm"
HISTIGNORE="$HISTIGNORE:..:...:.:cs:co:ni:ns:vi:reload:gst:edrc:edal:fs:ncu"
HISTIGNORE="$HISTIGNORE:gf:gd:g:v:nu:cla:shhh:todo:poweroff:tn:ncdu:startx"
HISTIGNORE="$HISTIGNORE:ls *::g *:a *:f *:k *"
HISTIGNORE="$HISTIGNORE:ds *:cat *::ac *:rbl *:git push *"
HISTIGNORE="$HISTIGNORE:rbl:aca:dbup:dbdn:dbst:vv:sync:gdi:cf:f"

if [[ $(uname) == 'Darwin' ]]; then
  HISTSIZE=10000 # length
  HISTFILESIZE=10000 # size
else
  HISTSIZE=100 # length
  HISTFILESIZE=100 # size
fi

HISTTIMEFORMAT='%F %T  ' # timestamp
PROMPT_COMMAND="${PROMPT_COMMAND:+$PROMPT_COMMAND ;} history -a"
