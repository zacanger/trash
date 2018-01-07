# `$HOME`

![screenshot](http://zacanger.com/assets/desktop-scrot.png)

These aren't really set up specifically with other people in mind, but
please feel free to use anything you like. Just keep in mind that some
stuff might not work exactly the way you expect.

I keep this repo in Dropbox and symlink most things to `/home/z`, so there
may be some references to that path scattered around.

## Things To Know

* This is shared between four Debian Sid laptops and one (work) Mac.
* Bash 4, Python3 when possible, Node latest, Neovim.
* I don't know Perl.
* The files called `*.list` (under `/misc`) are to keep track of what I need on
  a fresh PC.  `sources.more.list`
    * /etc/apt/sources.list.d/sources.more.list
  * `apt.list`
    * actually `apt-get install -fy` list, but that's not so succinct
    * This is generated with the following:
    `comm -23 <(apt-mark showmanual | sort -u) <(gzip -dc /var/log/installer/initial-status.gz | sed -n 's/^Package: //p' | sort -u)`
  * `npm.list`
    * `npm i -g` all these things
    * generated with [global-packages-cli](https://npmjs.org/package/global-packages-cli)
  * `pip.list`
    * split, some 3, some 2
    * generated with `pip list`
  * `chromium.list`
    * chrome extensions
  * `gem.list`
    * I guess I need Ruby
  * `brew.list`
    * I use a Mac at work.
  * `type.list`
    * Fonts!
* I have two directories hidden from git (`~/x/` and `~/bin/x/`);
  they're referenced in some other files, and hold executables that are either totally
  non-free, totally non-original, totally full of extra stuff i don't want in my path,
  or just totally too large to want to put under version control.
