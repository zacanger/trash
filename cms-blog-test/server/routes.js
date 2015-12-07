var express = require('express')
  , path = require('path')
  , User = require('./models/user')
  , rootPath = path.normalize(__dirname + '/../')
  , apiRouter = express.Router()
  , router = express.Router()

module.exports = function(app, passport){
  app.use('/api', apiRouter)
  app.use('/', router)

  require('./api/posts')(apiRouter)

  router.get('/', function(req, res){
    res.render('index')
  })

  router.get('/admin', function(req, res){
    res.render('admin/login')
  })

  router.get('/admin/register', function(req, res){
    res.render('admin/register')
  })

  router.get('/admin/dashboard', isAdmin, function(req, res){
    res.render('admin/dashboard', {user: req.user})
  })

  router.post('/register', function(req, res){
    User.register(new User({
      email: req.body.email // if we go anon, we need to change this
    }), req.body.password, function(err, user){
      if (err) {
        console.error(err)
        return
      }

      passport.authenticate('local')(req, res, function(){
        console.log('authenticated by passport')
        res.redirect('/admin/dashboard')
      })
    })
  })

  router.post('/login', passport.authenticate('local'), function(req, res){
    res.redirect('/admin/dashboard')
  })

  app.use(function(req, res, next){
    res.status(404)
    res.render('404')
    return
  })
}

function isAdmin(req, res, next){
  if (req.isAuthenticated() && req.user.email === 'zac@zacanger.com') {
    console.log('don\'t break  anything.')
//    console.image('http://zacanger.com/gifland/hellooo.gif')
    next()
  } else {
    console.log('Good try. A for effort.')
    res.redirect('/admin')
  }
}
