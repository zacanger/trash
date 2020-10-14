#!/bin/sh

# intended to be used with
#   exec catwm > ~/.local/share/catwm/catwm.log 2>&1
# in your xinitrc
flags="-g -fsanitize=address,undefined"
make clean &&
sudo make CFLAGS="$flags" LDADD="$flags -lX11" install
