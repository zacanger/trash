var app           = require('app')
  , BrowserWindow = require('browser-window')
  , mainWindow    = null

// not going to bother with the darwin-specific bullshit, here

app.on('ready', function(){
  mainWindow = new BrowserWindow({width:1200,height:800})
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function(){
    mainWindow = null
  })
})

