#!/bin/sh
g++ $(pkg-config --cflags --libs Qt5Widgets qtermwidget5) -fPIC -o mt minimal-term.cpp
