# shellcheck shell=bash

# because macs don't have pidof

pidof() {
  if hash pidof 2>/dev/null; then
    $(which pidof) "$1"
  else
    ps -ef | grep -i "$1" | grep -v grep | awk '{print $2}'
  fi
}
