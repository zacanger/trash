#include <QApplication>
#include <QDesktopServices>
#include <QKeySequence>
#include <QMainWindow>
#include "qtermwidget.h"

void activateUrl(const QUrl &url, bool fromContextMenu) {
  if (QApplication::keyboardModifiers() & Qt::ControlModifier || fromContextMenu) {
    QDesktopServices::openUrl(url);
  }
}

int main(int argc, char *argv[]) {
  QApplication app(argc, argv);
  QMainWindow *mainWindow = new QMainWindow();
  setenv("TERM", "xterm-256color", 1);

  QTermWidget *console = new QTermWidget();

  QFont font = QApplication::font();
  font.setFamily("Fira Code");
  font.setPointSize(10);

  console->setTerminalFont(font);
  console->setColorScheme("Linux");
  // console->setTerminalOpacity(0.5);

  QObject::connect(console, &QTermWidget::urlActivated, mainWindow, activateUrl);

  QObject::connect(
      console,
      &QTermWidget::termKeyPressed,
      mainWindow,
      [=](const QKeyEvent *key) -> void {
        if (key->matches(QKeySequence::Copy)) {
          console->copyClipboard();
        } else if (key->matches(QKeySequence::Paste)) {
          console->pasteClipboard();
        }
      }
  );

  QObject::connect(console, SIGNAL(finished()), mainWindow, SLOT(close()));

  mainWindow->setCentralWidget(console);

  mainWindow->show();
  return app.exec();
}
