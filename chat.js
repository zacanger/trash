// tcp chat server

var net     = require('net')
  , sockets = []
  , port    = 7777

var server = net.createServer(function(socket){
  socket.write('welcome to the chat\n')
  sockets.push(socket)

  socket.on('data',function(data){
    sockets.forEach(function(s){
      if(s != socket){
        s.write(data)
      }
    })
  })

  socket.on('end',function(){
    sockets.forEach(function(s,i){
      if(s == socket){
        sockets.slice(i,1)
      }
    })
  })
})

server.listen(port)
console.log('server over on', port)

