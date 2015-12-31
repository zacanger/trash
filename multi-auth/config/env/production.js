'use strict'

module.exports = {
  db: process.env.MONGOHQ_URL,
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'mongodb://markvi:markvi@ds061464.mongolab.com:61464/markvi/auth/twitter/callback' // #ignoreline
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: 'hmongodb://markvi:markvi@ds061464.mongolab.com:61464/markvi/auth/github/callback' // #ignoreline
  }
}
