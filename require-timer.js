// just require this file to time requires into that file
// based on gh:stefanpenner/node-require-timings
const fs = require('fs')
require.extensions['.js'] = (module, filename) => {
  const strt = new Date()
  const cont = fs.readFileSync(filename, 'utf8').toString()
  const modl = module._compile(cont, filename)
  const arry = []
  const item = `${new Date() - strt} : ${filename}`
  arry.push(item)
  console.log(arry)
  return modl
}
