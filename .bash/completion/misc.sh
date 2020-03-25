# brew's bash completion
if [[ `uname` == 'Darwin' ]]; then
  _sourceif $(brew --prefix)/etc/bash_completion
fi

# aws completion
if hash aws_completer 2>/dev/null ; then
  complete -C aws_completer aws
fi

# pacman -S bash-completion or apt-get install bash-completion
[[ $PS1 ]] && . /usr/share/bash-completion/bash_completion
