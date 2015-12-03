var mongoose = require('mongoose')
  , PasLocMon = require('passport-local-mongoose')

var User = new mongoose.Schema({
    email: {type: String, required: true}
}, {strict: true})

User.plugin(PasLocMon, {usernameField: 'email'})

module.exports = mongoose.model('User', User)

// note: if we decide to go anon, we'll want to change that email out
