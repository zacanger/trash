var mongoose              = require('mongoose')
  , ObjID                 = mongoose.Types.ObjectId
  , passportLocalMongoose = require('passport-local-mongoose')
  , Schema                = mongoose.Schema

var User = new Schema({
    email: {type: String, required: true}
  , posts: [{type: ObjID, ref: 'Post'}]
}, {strict: true})

User.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('User', User)
