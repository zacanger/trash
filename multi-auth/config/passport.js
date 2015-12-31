'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')
const local = require('./passport/local')
const twitter = require('./passport/twitter')
const github = require('./passport/github')

module.exports = function (passport) {
  passport.serializeUser((user, cb) => cb(null, user.id))
  passport.deserializeUser((id, cb) => User.load({ criteria: { _id: id } }, cb))
  passport.use(local)
  passport.use(twitter)
  passport.use(github)
}
