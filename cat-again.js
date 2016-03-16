#!/usr/bin/env node

'use strict'

const fs = require('fs')

function cat(result, file){
  var
    stdout = ''
  , stderr = ''

  try {
    stdout = result.stdout + fs.readFileSync(file, 'utf8')
    stderr = result.stderr
  } catch(e){
    stdout = result.stdout
    stderr = result.stderr + ['cat: ', file, ': ', 'No such file or directory.'].join('')
  }
  return {stdout : stdout, stderr : stderr}
}

function nl(str){
  return str.length > 0 && str[str.length -1] !== '\n' ? str + '\n': str
}

function doCat(files){
  var results = files.reduce(cat, {stdout : '', stderr : ''})
  return {stdout : nl(results.stdout), stderr : nl(results.stderr)}
}

var results = doCat(process.argv.slice(2))

if(results.stderr.length){
  process.stderr.write(results.stderr)
}

if(results.stdout.length){
  process.stdout.write(results.stdout)
}

process.exit(results.stderr.length ? 1 : 0)
