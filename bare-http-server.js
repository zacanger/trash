var http = require('http')
  , port = 4444

http.createServer(function(req, res){
    res.end('something')
}).listen(port)
