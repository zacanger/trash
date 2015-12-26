'use strict'

const mongoose = require('mongoose')
const notify = require('../mailer')
const Schema = mongoose.Schema
const getTags = tags => tags.join(',')
const setTags = tags => tags.split(',')

const ArticleSchema = new Schema({
  title: {type: String, default: '', trim: true},
  body: {type: String, default: '', trim: true},
  user: {type: Schema.ObjectId, ref: 'User'},
  comments: [{
    body: {type: String, default: ''},
    user: {type: Schema.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now}
  }],
  tags: {type: [], get: getTags, set: setTags},
  createdAt: {type: Date, default: Date.now}
})

ArticleSchema.path('title').required(true, 'title please')
ArticleSchema.path('body').required(true, 'words please')

// ArticleSchema.pre('remove', function(next){
//   next()
// })

ArticleSchema.methods = {
  uploadAndSave: function (images) {
    const err = this.validateSync()
    if (err && err.toString()) throw new Error(err.toString())
    return this.save()
  },

  addComment: function (user, comment) {
    this.comments.push({
      body: comment.body,
      user: user._id
    })

    if (!this.user.email) this.user.email = 'ayuba@zacanger.com'

    notify.comment({
      article: this,
      currentUser: user,
      comment: comment.body
    })
    return this.save()
  }
}

ArticleSchema.statics = {
  load: function (_id) {
    return this.findOne({ _id})
      .populate('user', 'name email username')
      .populate('comments.user')
      .exec()
  },

  list: function (options) {
    const criteria = options.criteria || {}
    const page = options.page || 0
    const limit = options.limit || 30
    return this.find(criteria)
      .populate('user', 'name username')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec()
  }
}

mongoose.model('Article', ArticleSchema)
