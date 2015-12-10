var mongoose = require('mongoose')
  , ObjID    = mongoose.Types.ObjectId
  , Schema   = mongoose.Schema

var postSchema = new Schema({
    title: {type: String, required: true}
  , body: {type: String, required: true}
  , author: [{type: ObjID, ref: 'User'}]
  , created_at: {type: Date, default: new Date()}
  , updated_at: {type: Date, default: Date.now}
  , tags: {type: [{type: String}], validate: [taglimit, 'too many tags!']}
}, {strict: true})

postSchema.pre('save', function(next){
  now = new Date()
  this.updated_at = now
  next()
})

function taglimit(val){
  return val.length <=8
}

module.exports = mongoose.model('Post', postSchema)
