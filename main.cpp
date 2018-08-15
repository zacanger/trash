#include <QApplication>
#include <QDesktopServices>
#include <QKeySequence>
#include <QMainWindow>
#include "qtermwidget.h"

/*
void activateUrl(const QUrl &url, bool fromContextMenu) {
  if (QApplication::keyboardModifiers() & Qt::ControlModifier || fromContextMenu) {
    QDesktopServices::openUrl(url);
  }
}
*/

int main(int argc, char *argv[]) {
  QApplication app(argc, argv);
  QMainWindow *mainWindow = new QMainWindow();
  setenv("TERM", "xterm-256color", 1);

  QTermWidget *mt = new QTermWidget();

  QFont font = QApplication::font();
  font.setFamily("Hasklig");
  font.setPointSize(11);

  mt->setTerminalFont(font);
  mt->setColorScheme("Z");
  mt->setTerminalSizeHint(false);
  // mt->setTerminalOpacity(0.5);

  // QObject::connect(mt, &QTermWidget::urlActivated, mainWindow, activateUrl);

  // handle copy and paste
  // disabled, interferes with visual block in vim
  /*
  QObject::connect(
      mt,
      &QTermWidget::termKeyPressed,
      mainWindow,
      [=](const QKeyEvent *key) -> void {
        if (key->matches(QKeySequence::Copy)) {
          mt->copyClipboard();
        } else if (key->matches(QKeySequence::Paste)) {
          mt->pasteClipboard();
        }
      }
  );
  */

  QObject::connect(mt, SIGNAL(finished()), mainWindow, SLOT(close()));

  mainWindow->setCentralWidget(mt);

  mainWindow->show();
  return app.exec();
}
