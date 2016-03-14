// tcp chat server
// to connect: `nc localhost 7777`

const
  net     = require('net')
, sockets = []
, port    = 7777
, server = net.createServer((socket) => {
  socket.write('welcome to the chat\n')
  sockets.push(socket)

  socket.on('data',(data) => {
    sockets.forEach((s) => {
      if(s != socket){
        s.write(data)
      }
    })
  })

  socket.on('end',() => {
    sockets.forEach((s,i) => {
      if(s == socket){
        sockets.slice(i,1)
      }
    })
  })
})

server.listen(port)
console.log('server over on', port)
