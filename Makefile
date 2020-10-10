CFLAGS+= -Wall
LDADD+= -lX11
LDFLAGS=
EXEC=zwm

PREFIX?= /usr/local
BINDIR?= $(PREFIX)/bin

CC=gcc

all: $(EXEC)

zwm: zwm.o
	$(CC) $(LDFLAGS) -Os -o $@ $+ $(LDADD)
.PHONY: zwm

install: all
	install -Dm 755 zwm $(DESTDIR)$(BINDIR)/zwm

clean:
	rm -f zwm *.o

run: $(EXEC)
	Xephyr :4 -ac -screen 800x600 &
	sleep 2
	DISPLAY=:4 ./zwm &

stop:
	killall Xephyr zwm
