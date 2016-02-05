'use strict'

var express     = require('express')
  , compression = require('compression')
  , error       = require('express-err')
  , gutil       = require('gulp-util')
  , chalk       = require('chalk')
  , lr          = require('tiny-lr')

exports.init = function(config, callback){
  var config = config || {}
    , app    = express()

  function startup(callback){
    gutil.log('starting the connect server')
    app.use(require('connect-livereload')())
    app.use(compression())
    app.use(express.static(config.root + '/'))
    app.listen(config.port)
    app.use(error.httpError(404))
    app.use(error())
    callback()
  }

  startup(function(){
    gutil.log('listening at ' + chalk.cyan('http://127.0.0.1:' + config.port))
  })

  callback()
}

exports.listen = function(){
  lr.listen(33333)
}

