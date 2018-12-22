#!/usr/bin/env node

// assumes out files go in /lib
// assumes a package.main and package.module
// requires uglify-js
// assumes only one default export
// adapted from https://github.com/lukeed/tinydate

const fs = require('fs')
const { resolve } = require('path')
const { minify } = require('uglify-js')
const pkg = require('./package')

const libDir = resolve('lib')
const entry = resolve('src/index.js')

if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir)
}

fs.readFile(entry, (_, buf) => {
  // copy as `es` module
  fs.writeFile(resolve(pkg.module), buf)

  // transform to `cjs` module
  const data = buf.toString().replace('export default', 'module.exports =')
  fs.writeFile(resolve(pkg.main), data)

  // produce minified output
  const { code } = minify(data, { fromString:true })
  const file = resolve(pkg.main.replace('.js', '.min.js'))
  fs.writeFile(file, code)
})
