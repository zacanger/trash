import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import expressValidator from 'express-validator'
import passport from 'passport'
import localStrategy from './auth/local'
import jwtStrategy from './auth/jwt'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(expressValidator())
app.use(morgan('common'))
app.use(passport.initialize())

passport.use(localStrategy)
passport.use(jwtStrategy)

routes(app)

export default app
