// require timer
const fs = require('fs')
require.extensions['.js'] = (module, filename) => {
  const
    strt = new Date()
  , cont = fs.readFileSync(filename, 'utf8').toString()
  , modl = module._compile(cont, filename)
  console.log(new Date() - strt, filename)
  return modl
}
