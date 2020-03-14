# `$HOME`

Please feel free to use anything you like!
Unless otherwise noted, everything here is under the
LGPL-3.0 license.

I keep this repo at `/home/z/Dropbox/z` and symlink a lot of
stuff to `/home/z`, so there may be a few references to
those paths scattered around.

## What I Use

* Hardware: Thinkpads
* OS: Ubuntu (I've tried every distro out there, this is fine for me)
* Window manager: plain i3, very light config, i3status
* Terminal: [st fork](https://github.com/zacanger/st)
* File manager: Ranger
* Editor: Neovim, but my configs probably work fine for Vim too
* Browser: Firefox
* Shell: Bash, with lots of aliases and handy functions

## Notes

* I also have a work Macbook, which uses Alacritty for a terminal and
  [Rectangle](https://github.com/rxhanson/Rectangle) for window placement.
* I mostly write a lot of config and little shell scripts, plus some Node and
  Python, so my tools are optimized for quick editing of text and quick
  navigation.

* The files called `*.list` (under `/misc`) are to keep track of what I need on
  a fresh computer.
  * `apt.list`: generated with `apt-mark showmanual`
  * `npm.list`: generated with
    [global-packages-cli](https://npmjs.org/package/global-packages-cli)
  * `pip.list`: Python 3
* On fresh computers, I first sync `~/Dropbox/z`, then run each block in
  `~/bin/new-linux.sh` at a time.
