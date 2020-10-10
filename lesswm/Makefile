CFLAGS+= -Wall
LDADD+= -lX11
LDFLAGS=
EXEC=lesswm

PREFIX?= /usr/local
BINDIR?= $(PREFIX)/bin

CC=gcc

all: $(EXEC)

lesswm: lesswm.o
	$(CC) $(LDFLAGS) -Os -o $@ $+ $(LDADD)
.PHONY: lesswm

install: all
	install -Dm 755 lesswm $(DESTDIR)$(BINDIR)/lesswm

clean:
	rm -f lesswm *.o

run: $(EXEC)
	Xephyr :4 -ac -screen 800x600 &
	sleep 2
	DISPLAY=:4 ./lesswm &

stop:
	killall Xephyr lesswm
