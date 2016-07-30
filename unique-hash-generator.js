// usage:
// const u = require('./this-file')
// console.log(u) => eb9fb314ce4f818892e92a397fdc62fb
// console.log(u) => 96c1b4fe0420b3b8b2a7e518ce19090c
// etc.

const { hostname }   = require('os')
const { createHash } = require('crypto')

const u = () => {
  const p = [hostname(), process.pid, +(new Date())]
  const h = createHash('md5').update(p.join(''))
  return h.digest('hex')
}

module.exports = u()
