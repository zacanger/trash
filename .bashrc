# vim: ft=sh

# if not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# little helper
_sourceif() {
  [ -f "$1" ] && . "$1"
}

_sourceif $HOME/.bash/config.sh
_sourceif $HOME/.bash/history.sh
_sourceif $HOME/.bash/path.sh
_sourceif $HOME/.bash/vars.sh
_sourceif $HOME/.bash/aliases.sh
_sourceif $HOME/.bash/prompt.sh


# completions

# not sure why, but this needs to come before the other completions
# to prevent an error when executing a file with an extension on some
# other path that gets expanded, like:
# cd foo/bar
# ./foo.sh ~/baz <- immediately throws a syntax error
[[ $PS1 && -f /usr/share/bash-completion/bash_completion ]] && . /usr/share/bash-completion/bash_completion

# the rest
if [ -d $HOME/.bash/completion ]; then
  for file in $HOME/.bash/completion/*; do
    _sourceif "$file"
  done
fi

# all the functions
if [ -d $HOME/.bash/functions ]; then
  for file in $HOME/.bash/functions/*; do
    _sourceif "$file"
  done
fi

if [[ `uname` == 'Darwin' ]]; then
  # Macs yell at you if you don't use bash, because Macs are bad
  export BASH_SILENCE_DEPRECATION_WARNING=1
  # On Linux, I manage multiple terminal sessions with the window manager
  # On Mac, that's painful, so start tmux on a new shell.
  [ -z "$TMUX" ] && { tmux attach || exec tmux new-session; }
fi
