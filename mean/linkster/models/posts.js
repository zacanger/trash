var mongoose = require('mongoose')
  , objId = mongoose.Schema.Types.ObjectId

var PostSchema = new mongoose.Schema({
    title: String
  , link: String
  , upvotes: {type: Number, default: 0}
  , comments: [{type: objId, ref: 'comment'}]
})

PostSchema.methods.upvote = function(cb){
  this.upvotes += 1
  this.save(cb)
}

mongoose.model('Post', PostSchema)
