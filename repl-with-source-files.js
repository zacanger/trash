#!/usr/bin/env node

'use strict'

const
  fs   = require('fs')
, vm   = require('vm')
, path = require('path')
, repl = require('repl')

// let repl source files
repl.REPLServer.prototype.source = function(file){
  if(!~file.indexOf('.')){
    file += '.js'
  }
  if(path.existsSync(file)){
    vm.runInContext(fs.readFileSync(file).toString(), this.context)
  }
  else {
    this.outputStream.write('ERROR: file ' + file + ' not found!\n')
  }
  this.displayPrompt()
}

var server = repl.start()

// `./ filename` will source `./filename.js`
server.defineCommand('/', {
  help   : 'source file'
, action : function(file){
    this.source(file)
  }
})

// from command args
for(var i = 2; i < process.argv.length; i++){
  server.source(process.argv[i])
}

