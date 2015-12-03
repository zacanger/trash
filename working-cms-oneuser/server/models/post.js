var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    title: {type: String, required: true}
  , body: {type: String, required: true}
  , date: {type: Date, default: new Date()}
  , tags: {type: [{type: String, }], validate: [tagLimit, 'too many tags!']}
//, author: [{mongoose.Types.ObjectID, ref: 'User}]
// still not sure if this will be anon or not
}, {strict: true})

function tagLimit(val){
  return val.length <= 8
}

module.exports = mongoose.model('Post', postSchema)
