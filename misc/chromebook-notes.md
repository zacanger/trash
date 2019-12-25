* Beboot while holding escape and the 'refresh' looking button
* Set up developer mode (ctrl+d skips pauses/screens)
  * The funky 'your stuff is bad' screen is not real, just ctrl+d
* After reboot, enable debugging features i guess
* After reboot again, switch to vt2 (the forward key is f2) and set up a password
* Go back and ctrl+alt+t, enter 'shell'
* Follow the crouton install instructions
* `crouton -r xenial -t x11,cli-extra`
  * Crouton says Xenial is the most recent supported ubuntu, so I guess just go with that
* `sudo enter-chroot -n xenial` and do all the setup there (install i3, set up xinitrc, etc)
* Put some kinda start alias in the chronos .bashrc, like `alias start='sudo enter-chroot -n xenial xinit'`
* Get back in and finish setup from bits of bin/new-linux.sh

https://www.codedonut.com/chromebook/install-full-native-standalone-linux-on-any-chromebook-elementaryos/#6_Modify_the_Chromebooks_BIOS
