import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user'

const localStrategy = new LocalStrategy(
  async (username: string, password: string, done) => {
    try {
      const user = await User.findOne({ username })
      if (!user) {
        return done(null, false, { message: 'user not found' })
      }

      // @ts-ignore
      const valid = await user.isValidPassword(password)
      if (!valid) {
        return done(null, false, { message: 'invalid password' })
      }

      return done(null, user.toJSON())
    } catch (err) {
      done(err)
    }
  }
)

export default localStrategy