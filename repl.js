#!/usr/bin/env node

const repl = require('repl')
const { littleLisp } = require('./index')

repl.start({
  prompt: '> ',
  eval: (cmd, context, filename, callback) => {
    if (cmd === '(q)\n') {
      console.log('goodbye!')
      process.exit(0)
    }
    if (cmd !== '(\n)') {
      cmd = cmd.slice(1, -2) // rm parens and newline added by repl
      const ret = littleLisp.interpret(littleLisp.parse(cmd))
      callback(null, ret)
    } else {
      callback(null)
    }
  }
})
