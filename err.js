// use instead of `console.error()`; logs to file and stdout both

const
  fs   = require('fs')
, util = require('util')
, file = fs.createWriteStream(`${__dirname}/debug.log`, {flags : 'w'})
, sout = process.stdout
, err  = d => {
  file.write(util.format(d) + '\n')
  sout.write(util.format(d) + '\n')
}
