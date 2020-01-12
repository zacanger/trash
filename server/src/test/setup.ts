/* eslint-env jest */

import mongoose from 'mongoose'
import { connect } from '../index'
import config from '../config'

const clearDb = (done) => {
  mongoose.connection.dropDatabase()
  return done()
}

beforeEach((done) => {
  if (mongoose.connection.readyState === 0) {
    connect(`${config.db.test}-${process.env.TEST_SUITE}`)
  }
  return clearDb(done)
})

afterEach((done) => {
  mongoose.disconnect()
  return done()
})
