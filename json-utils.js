// json utility functions

const fs = require('fs')

// read json file, parse it, call cb with obj or err
const readFile = (file, cb) => {
  fs.readFile(file, 'utf8', (err, json) => {
    if (err) {
      cb(err)
      return
    }
    let data
    try {
      data = JSON.parse(json)
    } catch (e) {
      cb(e)
      return
    }
    cb(null, data)
  })
}

// same as above, but sync
const readFileSync = file => JSON.parse(fs.readFileSync(file, 'utf8'))

// write with data
const writeFile = (file, data, indent, cb) => {
  if (typeof cb !== 'function') {
    cb = indent
    indent = 0
  }
  let json
  try {
    json = JSON.stringify(data, null, indent)
  } catch (e) {
    cb(e)
    return
  }
  fs.writeFile(file, json, 'utf8', cb)
}

// write json with data, sync
const writeFileSync = (file, data, indent) => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  fs.writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

// deepcopy obj
const deepCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (Array.isArray(o)) {
    return o.map(it => deepCopy(it))
  }
  newObj = {}
  Object.keys(o).forEach(prop => newObj[prop] = deepCopy(o[prop]))
  return newObj
}

// shallow copy (top level)
const shallowCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (Array.isArray(o)) {
    return o.slice(0)
  }
  newObj = {}
  Object.keys(o).forEach(prop => {
    newObj[prop] = o[prop]
  })
  return newObj
}

// copy obj, either shallow or deep
const copy = (o, shallow) => {
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}

exports.readFile      = readFile
exports.readFileSync  = readFileSync
exports.writeFile     = writeFile
exports.writeFileSync = writeFileSync
exports.deepCopy      = deepCopy
exports.shallowCopy   = shallowCopy
exports.copy          = copy
