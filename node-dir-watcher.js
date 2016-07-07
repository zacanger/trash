const
  fs      = require('fs')
, path    = require('path')
, toWatch = process.argv[2] || path.resolve(__dirname)

fs.watch(toWatch), (e, f) => {
  console.log(e)
  if (f) {
    console.log(f)
  }
}
