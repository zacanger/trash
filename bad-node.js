var http = require('http')
// node doesn't do cpu-intensive stuff all that well
http.createServer(function(request, response){
  console.log('Request received')
  for(var i = 0; i < 1000000; i++){
    console.log(i)
  } //wow,  that was long.... now, we can send a response.
  response.write(200, {"Content-Type": "text/html"})
  response.write("hello")
  response.end()
}).listen(6666)
