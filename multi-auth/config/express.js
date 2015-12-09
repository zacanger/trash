'use strict'

const express = require('express')
const session = require('express-session')
const compression = require('compression')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const csrf = require('csurf')
const multer = require('multer')
const swig = require('swig')
const mongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const winston = require('winston')
const helpers = require('view-helpers')
const config = require('./config')
const pkg = require('../package.json')

const env = process.env.NODE_ENV || 'development'

module.exports = function (app, passport) {
  app.use(compression({
    threshold: 512
  }))

  app.use(express.static(config.root + '/public'))

  let log = 'dev'
  if (env !== 'development') {
    log = {
      stream: {
        write: message => winston.info(message)
      }
    }
  }

  if (env !== 'test') app.use(morgan(log))

  if (env === 'development' || env === 'test') {
    swig.setDefaults({
      cache: false
    })
  }

  app.engine('html', swig.renderFile)
  app.set('views', config.root + '/app/views')
  app.set('view engine', 'html')

  app.use(function (req, res, next) {
    res.locals.pkg = pkg
    res.locals.env = env
    next()
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(multer().array('image', 1))
  app.use(methodOverride(function (req) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

  app.use(cookieParser())
  app.use(cookieSession({ secret: 'secret' }))
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: pkg.name,
    store: new mongoStore({
      url: config.db,
      collection: 'sessions'
    })
  }))

  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
  app.use(helpers(pkg.name))

  if (env !== 'test') {
    app.use(csrf())

    app.use(function (req, res, next) {
      res.locals.csrf_token = req.csrfToken()
      next()
    })
  }
}
