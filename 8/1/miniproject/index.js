var express = require('express')
	, session = require('express-session')
	, passport = require('passport')
	, Facebook = require('passport-facebook').Strategy
	, app = express()
	, port = 3000

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Facebook({
		clientID: '180983508917361'
	, clientSecret: 'd6ee8ef75debec26780093367709fd1a'
	, callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done){
	return done(null, profile)
}))

app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		successRedirect: '/'
	, failureRedirect: '/login'
}), function(req, res){
	console.log(req.session)
	console.image('http://zacanger.com/gifland/ferret-fail.gif')
})

passport.serializeUser(function(user, done){
	done(null, user)
})

passport.deserializeUser(function(obj, done){
	done(null, obj)
})

app.get('/me')
app.listen(port)

