# st - simple terminal
# See LICENSE file for copyright and license details.
.POSIX:

include config.mk

SRC = zt.c x.c
OBJ = $(SRC:.c=.o)

all: options zt

options:
	@echo zt build options:
	@echo "CFLAGS  = $(STCFLAGS)"
	@echo "LDFLAGS = $(STLDFLAGS)"
	@echo "CC      = $(CC)"

config.h:
	cp config.def.h config.h

.c.o:
	$(CC) $(STCFLAGS) -c $<

zt.o: config.h zt.h win.h
x.o: arg.h zt.h win.h

$(OBJ): config.h config.mk

zt: $(OBJ)
	$(CC) -o $@ $(OBJ) $(STLDFLAGS)

clean:
	rm -f zt $(OBJ) zt-$(VERSION).tar.gz

dist: clean
	mkdir -p zt-$(VERSION)
	cp -R FAQ LEGACY TODO LICENSE Makefile README config.mk\
		config.def.h zt.info zt.1 arg.h zt.h win.h $(SRC)\
		zt-$(VERSION)
	tar -cf - zt-$(VERSION) | gzip > zt-$(VERSION).tar.gz
	rm -rf zt-$(VERSION)

install: zt
	mkdir -p $(DESTDIR)$(PREFIX)/bin
	cp -f zt $(DESTDIR)$(PREFIX)/bin
	chmod 755 $(DESTDIR)$(PREFIX)/bin/zt
	mkdir -p $(DESTDIR)$(MANPREFIX)/man1
	sed "s/VERSION/$(VERSION)/g" < zt.1 > $(DESTDIR)$(MANPREFIX)/man1/zt.1
	chmod 644 $(DESTDIR)$(MANPREFIX)/man1/zt.1
	tic -sx zt.info
	@echo Please see the README file regarding the terminfo entry of zt.

uninstall:
	rm -f $(DESTDIR)$(PREFIX)/bin/zt
	rm -f $(DESTDIR)$(MANPREFIX)/man1/zt.1

.PHONY: all options clean dist install uninstall
