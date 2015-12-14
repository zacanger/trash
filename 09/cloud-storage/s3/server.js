var express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , mongoose = require('mongoose')
  , app = express()
  , portNum = 3000
  , Controller = require('./mainController.js')
  , mongooseUri = 'mongodb://127.0.0.1:27017/mailpants'

app.use(express.static(__dirname + '/'))
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.post('/api/newimage', Controller.saveImage)

mongoose.connect(mongooseUri)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(callback){
  console.log('mongoose is over at ', mongooseUri)
})

app.listen(portNum, function(){
  console.log('and we\'re listening on ', portNum)
})
