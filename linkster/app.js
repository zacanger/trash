var express      = require('express')
  , path         = require('path')
  , favicon      = require('serve-favicon')
  , logger       = require('morgan')
  , cookieparser = require('cookie-parser')
  , bodyparser   = require('body-parser')
  , passport     = require('passport')
  , mongoose     = require('mongoose')
  , posts        = require('./models/posts')
  , comments     = require('./models/comments')
  , users        = require('./models/users')
  , passportconf = require('./config/passport')
  , mongo        = 'mongodb://127.0.0.1:27017/news'
  , routes       = require('./routes/index')
  , users        = require('./routes/users')
  , app          = express()

mongoose.connect(mongo)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use('/', routes)
app.use('/users', users)

app.use(function(req, res, next){
  var err = new Error('For oh four O! For oh, 4...')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next){
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
