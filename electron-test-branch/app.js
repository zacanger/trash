var app = require('app')
  , BrowserWindow = require('browser-window')
  , mainWindow = null // keep reference of window; otherwise gc will close it!

app.on('window-all-closed', function(){
  if (process.platform != 'darwin') {
    app.quit()  // this is because os x was built by apes
  	}						// trendy apes
})              // but still apes

// electron is ready to create a window!
app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1600
 ,  height: 900
 ,  'min-width': 1600
 ,  'min-height': 900
 ,	'max-width': 1600
 ,	'max-height': 900
 ,  'accept-first-mouse': true
 ,  'title-bar-style': 'hidden'
  })

  mainWindow.loadUrl('file://' + __dirname + '/index.html')

  // mainWindow.openDevTools()

  mainWindow.on('closed', function(){
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
})
