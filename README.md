# lesswm

Less is not more. Just enough window management for X11.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

----

## Installation and Usage

* `git clone git@github.com:zacanger/lesswm.git`
* `cd lesswm`
* `vi config.h` to configure how you like it
* `make install` to install
* `make run` to run in Xephyr
* `make stop` to stop running in Xephyr
  lesswm in Xephyr in lesswm...)
* `echo exec lesswm >> ~/.xinitrc` and `startx` to use as a primary WM

Don't skip editing the config, otherwise nothing will work
in ways you'd expect, most likely.

## Status

It works fine, I'm using it right now.

### TODO

* V1:
  * Accept a config file (INI or TOML)
  * Focus follows mouse
  * Bar support
  * Indicate which desktop you're on
* V2?:
  * Test performance and safety in a higher-level language like Python

### Projects to check out when I get stuck

* <https://github.com/pyknite/catwm/commit/c68a7dd6b22b88fe3c666aa2200d836df13f9d30>
* https://github.com/Francesco149/catwm
* https://github.com/kathamer/ZeroWM
* http://pywm.sourceforge.net/
* https://github.com/h-ohsaki/xpywm
* https://pypi.org/project/xpywm/#files
* https://github.com/mackstann/tinywm/blob/master/tinywm.py

## Credits

Initially forked from [hcwm](https://github.com/DebianJoe/hcwm),
which itself used code from [catwm](https://github.com/pyknite/catwm) and
[dwm](https://dwm.suckless.org/). These projects are all under the MIT
license.

## See Also

[wmjs](https://github.com/zacanger/wmjs), an earlier tiling window manager
experiment in Node which I abandoned.
