# vim: ft=sh

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# little helper
_sourceif() {
  [ -f "$1" ] && . "$1"
}

# don't kill bg jobs on exit
shopt -u huponexit

# check size, one line, etc
shopt -s cmdhist
shopt -s checkwinsize

# "**" in pathname matches all files & 0 or more dirs/subdirs; also, ".foo"
if [[ `uname` == 'Linux' ]]; then
  shopt -s globstar
  shopt -s dotglob
fi

# see lesspipe(1)
if [ -x /usr/bin/lesspipe.sh ]; then
  eval "$(SHELL=/bin/sh lesspipe.sh)"
elif hash lesspipe 2>/dev/null; then
  eval "$(lesspipe)"
fi

# forward history search with ctrl-s
stty stop ""

_sourceif $HOME/.bash/history.sh

# completions
bind 'set completion-query-items 100'                       # ask if over N possible completions
complete -d cd rmdir                                        # on cd, just show dirs
complete -A builtin builtin                                 # bash builtins
complete -A setopt set                                      # bash options
complete -A command command complete coproc exec hash type  # commands
complete -A directory cd pushd mkdir rmdir                  # dirs
complete -A function function                               # bash functions
complete -A helptopic help                                  # halp
complete -A job disown fg jobs                              # jobspecs
complete -A stopped bg                                      # maor jobs
complete -A binding bind                                    # readline
complete -A shopt shopt                                     # sh... opt...
complete -A signal trap                                     # signals
complete -A variable declare export readonly typeset        # variables
complete -A function -A variable unset                      # more vars

# autocorrect spelling on some things
shopt -s cdspell
if [[ `uname` == 'Linux' ]]; then
  shopt -s dirspell
fi

# dynamic title
case $TERM in
  xterm*)
    PROMPT_COMMAND='echo -ne "\033]0;${USER}@${HOSTNAME}: ${PWD}\007"'
    ;;
  *)
    ;;
esac

_sourceif $HOME/.bash/path.sh
_sourceif $HOME/.bash/vars.sh


# get core dumps
ulimit -c unlimited

# set tab width in terminal output
tabs -2

# color ls
if hash dircolors 2>/dev/null; then
  test -r $HOME/.dircolors && eval "$(dircolors -b $HOME/.dircolors)" || eval "$(dircolors -b)"
fi

# pacman -S bash-completion or apt-get install bash-completion
[[ $PS1 && -f /usr/share/bash-completion/bash_completion ]] && . /usr/share/bash-completion/bash_completion

# brew's bash completion
if [[ `uname` == 'Darwin' ]]; then
  _sourceif $(brew --prefix)/etc/bash_completion
fi

# aws completion
if hash aws_completer 2>/dev/null ; then
  complete -C aws_completer aws
fi

# aliases, functions, prompt, in their own files
_sourceif $HOME/.bash/aliases.sh

if [ -d $HOME/.bash/functions ]; then
  for file in $HOME/.bash/functions/*; do
    _sourceif "$file"
  done

  # git and alias completion helpers
  _sourceif $HOME/.bash/completion.sh

  # finally, load the fancy prompt
  _sourceif $HOME/.bash/prompt.sh
fi

if [[ `uname` == 'Darwin' ]]; then
  # Macs yell at you if you don't use bash, because Macs are bad
  export BASH_SILENCE_DEPRECATION_WARNING=1
  # On Linux, I manage multiple terminal sessions with the window manager
  # On Mac, that's painful, so start tmux on a new shell.
  [ -z "$TMUX" ] && { tmux attach || exec tmux new-session; }
fi
