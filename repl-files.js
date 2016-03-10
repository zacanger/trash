#!/usr/bin/env node

'use strict'

// npm i -S temp
// chmod +x thisFile.js
// ./thisFile.js someOtherFile.js

const
  temp         = require('temp')
, fs           = require('fs')
, repl         = require('repl').start('> ')
, lastContents = {}
, inputFile    = process.argv[2]

function hasChanged(file, newData){
  let oldData = lastContents[file]
  if(!oldData){
    return true
  }
  if(oldData.length != newData.length){
    return true
  }
  for(let i = 0, l = oldData.length; i < l; i++){
    if(oldData[i] != newData[i]){
      return true
    }
  }
  return false
}

function reload(file) {
  fs.readFile(file, (err, data) => {
    if(err){
      throw err
    }
    if(!hasChanged(file, data)){
      return
    }
    if(file in lastContents){
      console.log('\nreloading ' + file + '\n')
    }
    lastContents[file] = data
    temp.open('filerrepl-temp-source', (err, info) => {
      if(err){
        throw err
      }
      fs.write(info.fd, data, 0, data.length, 0, (err, written) => {
        if(err){
          throw err
        }
        try {
          let module = require(info.path)
          for(let each in module){
            repl.context[each] = module[each]
          }
        } catch(e){
          console.log(e.stack)
        }
      })
    })
  })
}

function start(file){
  reload(file)
  fs.watchFile(file, reload.bind(null, file))
}

start(inputFile)

