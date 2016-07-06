'use strict'

// clone current environment so everything system is the same
// add in current `process.env`
// windows uses a semicolon. dammit, windows.
const
  execSync  = require('child_process').execSync
, SEPARATOR = process.platform === 'win32' ? ';' : ':'
, env       = Object.assign({}, process.env)

env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH

const execute = cmd => {
  let output = execSync(cmd, {
    cwd : process.cwd()
  , env : env
  })
}

// and now you can do something like `execute('standard-format -w .')`
