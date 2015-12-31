/* only dependency: express */
var express = require('express')
  , app     = express()
  , port    = 3000

app.get('/', function(req, res){res.send('foo')})
var server  = app.listen(port, function(){
  var host = server.address().address
    , port = server.address().port
  console.log('yeah, yo, at http://%s:%s', host, port)
})

