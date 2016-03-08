var express     = require('express')
  , cors        = require('cors')
  , bodyparser  = require('body-parser')
  , mongoose    = require('mongoose')
  , mongo       = 'mongodb://127.0.0.1:27017/ecom'
  , app         = express()
  , port        = 9999
  , user        = require('./server/user')
  , productCtrl = require('./server/productCtrl')

app.use(cors())
app.use(bodyparser.json())

mongoose.connect(mongo, function(err){
  if (err) throw err
  console.log('your db is up at ' + mongo)
})

app.listen(port, function(){
  console.log('i\'ve got it handled over at ' + port)
})

app.get('/products', productCtrl.get)
app.post('/products', productCtrl.post)
app.put('/products', productCtrl.put)
app.delete('/products', productCtrl.delete)

app.get('/test', function(req, res){
  console.log(req.query)
})

