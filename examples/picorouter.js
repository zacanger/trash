function route (pathname, response){
  'use strict'
  var fs = require('fs')
  , html
  , filePath

  if (pathname !== '/favicon.ico'){
    try {
      filePath = './' + pathname
      console.log('loading ' + filePath)
      html = fs.readFileSync(filePath)
      response.write(html)
      response.end()
    } catch (err) {
      console.log('unable to load ' + filePath)
      response.end()
    }
  }
}

exports.route = route
