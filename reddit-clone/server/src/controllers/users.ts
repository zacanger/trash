import { body, validationResult } from 'express-validator/check'
import { login as authLogin, createAuthToken } from '../auth'
import User from '../models/user'

export const login = (req, res, next) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true })
    return res.status(422).json({ errors })
  }

  authLogin(req, res, next)
}

export const register = async (req, res, next) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true })
    return res.status(422).json({ errors })
  }

  try {
    const { username, password } = req.body
    const user = await User.create({ username, password })
    const token = createAuthToken(user.toJSON())
    res.status(201).json({ token })
  } catch (err) {
    next(err)
  }
}

export const validate = (method?: string) => {
  const errors = [
    body('username')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ max: 32 })
      .withMessage('must be at most 32 characters long')

      .custom((value) => value.trim() === value)
      .withMessage('cannot start or end with whitespace')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains invalid characters'),

    body('password')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ min: 8 })
      .withMessage('must be at least 8 characters long')

      .isLength({ max: 72 })
      .withMessage('must be at most 72 characters long'),
  ]

  if (method != null && method === 'register') {
    errors.push(
      body('username').custom(async (username: string) => {
        const exists = await User.countDocuments({ username })
        if (exists) {
          throw new Error('already exists')
        }
      })
    )
  }

  return errors
}
