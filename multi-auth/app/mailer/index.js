'use strict'

const Notifier = require('notifier')
const swig = require('swig')
const config = require('../../config/config')

Notifier.prototype.processTemplate = function (tplPath, locals) {
  locals.filename = tplPath
  return swig.renderFile(tplPath, locals)
}

module.exports = {
  comment: function (options, cb) {
    const article = options.article
    const author = article.user
    const user = options.currentUser
    const notifier = new Notifier(config.notifier)

    const obj = {
      to: author.email,
      from: 'ayuba@zacanger.com',
      subject: user.name + ' commented on ' + article.title,
      alert: user.name + ' says: "' + options.comment,
      locals: {
        to: author.name,
        from: user.name,
        body: options.comment,
        article: article.name
      }
    }

    try {
      notifier.send('comment', obj, cb)
    } catch (err) {
      console.log(err)
    }
  }
}
