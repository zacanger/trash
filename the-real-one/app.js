var app = require('app')
  , BrowserWindow = require('browser-window')
  , mainWindow = null // keep reference of window; otherwise gc will close it!

app.on('window-all-closed', function(){
  if (process.platform != 'darwin') {
    app.quit()  // because osx holds processes open even after
  }             // all windows are closed
})

// electron's window!
app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1600
 ,  height: 900
 ,  'accept-first-mouse': true
 ,  'title-bar-style': 'hidden'
 ,  'node-integration': false // otherwise various client-side things break
  })

  mainWindow.loadUrl('http://127.0.0.1:4444/admin') // our internal server...

  // mainWindow.openDevTools()

  mainWindow.on('closed', function(){
    // if we have multiple windows, store them in an array
    // this is where we'd get rid of those
    mainWindow = null
  })
})
