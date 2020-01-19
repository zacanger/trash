import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import config from '../config'

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (token, done) => done(null, token.user)
)

export default jwtStrategy
