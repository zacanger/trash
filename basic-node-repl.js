#!/usr/bin/env node

const net       = require('net')
const repl      = require('repl')
var connections = 0

repl.start({
  prompt : 'stdrepl|> '
, input  : process.stdin
, output : process.stdout
})

net.createServer((socket) => {
  connections += 1
  repl.start({
    prompt : 'nixsockrepl|> '
  , input  : socket
  , output : socket
  }).on('exit', () => {
    socket.end()
  })
}).listen('/tmp/node-repl-sock')

net.createServer((socket) => {
  connections += 1
  repl.start({
    prompt : 'tcpsockrepl|> '
  , input  : socket
  , output : socket
  }).on('exit', () => {
    socket.end()
  })
}).listen(5100)
