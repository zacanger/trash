import jwt from 'jsonwebtoken'
import passport from 'passport'
import config from '../config'

export const createAuthToken = (user) =>
  jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry,
  })

export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(401).json(info)
    }

    const token = this.createAuthToken(user)
    res.json({ token })
  })(req, res)
}

export const jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(401).json({ message: 'unauthorized' })
    }

    req.user = user
    next()
  })(req, res)
}

export const postAuth = (req, res, next) => {
  if (req.post.author._id.equals(req.user.id) || req.user.admin) {
    return next()
  }

  res.status(401).end()
}

export const commentAuth = (req, res, next) => {
  if (
    req.comment.author._id.equals(req.user.id) ||
    req.post.author._id.equals(req.user.id) ||
    req.user.admin
  ) {
    return next()
  }

  res.status(401).end()
}
