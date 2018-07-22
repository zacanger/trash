PC=$(shell pkg-config --cflags --libs Qt5Widgets qtermwidget5)

mt:
	g++ $(PC) -fPIC -o mt minimal-term.cpp

install:
	mkdir -p /usr/local/bin
	cp -f mt /usr/local/bin/mt
	chmod 755 /usr/local/bin/mt
	mkdir -p /usr/share/qtermwidget5/color-schemes
	cp -f Z.colorscheme /usr/share/qtermwidget5/color-schemes/Z.colorscheme

clean:
	rm mt

.PHONY: mt clean install
