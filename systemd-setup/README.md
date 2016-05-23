just trying some things out

* put the server under /opt/testserver
* put the service file under /etc/systemd/system
* do a `systemctl enable testserver.service`
  * this should come back with a 'created symlink' etc. message
* `systemctl start testserver.service` to start it!

* to check, `systemctl status testserver.service`
  * this should come back with a bit of info on that service

* if changing anything (user/group of the service, for example):
  * `systemctl daemon-reload`
  * `systemctl restart testserver.service`
  * then maybe check it with `status` to be sure
