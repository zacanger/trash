// just require this file to time requires into that file
// based on gh:stefanpenner/node-require-timings
const { readFileSync } = require('fs')
require.extensions['.js'] = (module, filename) => {
  const
    strt = new Date()
  , cont = readFileSync(filename, 'utf8').toString()
  , modl = module._compile(cont, filename)
  , arry = []
  , item = `${new Date() - strt} : ${filename}`
  arry.push(item)
  console.log(arry)
  return modl
}
