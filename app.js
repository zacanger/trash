var app = require('app'),
		BrowserWindow = require('browser-window');

var mainWindow = null; // keep reference of window; otherwise gc will close it!

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit(); // this is because os x was built by apes
  	}						// trendy apes
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    'min-width': 1200,
    'min-height': 800,
		'max-width': 1200,
		'max-height': 800,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
