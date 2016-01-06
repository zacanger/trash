`npm i -S express-flash`, and `var flash = require('express-flash') in your app. `app.use(flash())`.

So, make a route in your app/routes/config file, wherever you're keeping those, something like:
```javascript
app.get('/forgot', function(req, res){res.render('forgot', {user: req.user})})
```
assuming you have some html with a form that `POST`s, and input for the email.

this assumes `async` and `nodemailer`, plus a mailing service (like sendgrid or gmail or whatever)

```javascript
app.post('/forgot', function(req, res, next){
  async.waterfall([
    function(done){
      crypto.randomBytes(20, function(err, buf){
        var token = buf.toString('hex')
        done(err, token)
      })
    },
    function(token, done){
      User.findOne({email: req.body.email}, function(err, user){
        if(!user){
          req.flash('error', 'no account!')
          return res.redirect('/forgot')
        }
        user.resetPasswordToken   = token
        user.resetPasswordExpires = Date.now() + 3600000
        user.save(function(err){
          done(err, token, user)
        })
      })
    },
    function(token, user, done){
      var smptTransport = nodemailer.createTransport('SMTP', {
        service: 'foo',
        auth: {user: 'your username for the service', pass: 'your pass for the service'}
      })
      var mailOptions = {
        to: user.email,
        from: 'learny-app@thing.bar',
        subject: 'reset yer passwerd, yo'.
        text: 'hey, click the thingy and stuff, right here, to reset yer passwerd: http://' + req.headers.post + '/forgot/' + token '\n' + ' .'
      }
      smtpTransport.sendMail(mailOptions, function(err){
        req.flash('info', 'email sent to ' + user.email + ' to reset yer passwyrd.')
        done(err, 'done')
      })
    }
  ],
  function(err){
    if(err) return next(err)
    res.redirect('/forgot')
  })
})

app.get('/reset/:token', function(req, res{
  User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: $gt: Date.now()}), function(err, user){
    if(!user){
      req.flash('error', 'invalid password reset token')
      return res.redirect('/forgot')
    }
    res.render('reset', {
      user.req.user
    })
  })
})

app.post('/reset/:token', function(req, res){
  async.waterfall([
    function(done) {
      User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}}, function(err, user){
        if(!user){
          req.flash('error', 'nope, nope nope.')
          return res.redirect('back')
        }
        user.password = req.body.password
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined
        user.save(function(err){
          req.logIn(user, function(err){
            done(err, user)
          })
        })
      })
    },
    function(user, done){
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'quux',
        auth: {
          user: 'same as above',
          pass: 'same as above'
        }
      })
      var mailOptions = {
        to: user.email,
        from: 'learnythingy@stuff.baz',
        subject: 'changed pw!',
        text: 'heyo,\n\n' +
          'account ' + user.email + ''s password was changed \n'
      }
      smtpTransport.sendMail(mailOptions, function(err){
        req.flash('success', 'pw changed')
        done(err)
      })
    }
  ], function(err){
    res.redirect('/')
  })
})
```
