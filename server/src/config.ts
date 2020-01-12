const dbUri = process.env.MONGO_URI || 'mongodb://localhost/thingy'

export default {
  port: process.env.PORT || 9090,
  db: {
    prod: dbUri,
    test: dbUri,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d',
  },
}
