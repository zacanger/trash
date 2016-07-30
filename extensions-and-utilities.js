// forked/yoinked/modified from gh:nervgh/yum.js,
// gh:shapeshed/stringbean (cleaned up & modernized)
// and also a fair few of my own.

// these extend globals, so

// make console.error actually throw instead of just logging
console.error = err => {
  throw new Error(err)
}

// returns true if val is NaN
Number.isNaN = Number.isNaN || this.isNaN

// returns true if val is num
Number.isNumber = v =>
  typeof v === 'number' && this.isNaN(v)

// returns true if num is int
Number.isInteger = Number.isInteger || function (n) {
  return (n | 0) === n
}

// returns true if num is float
Number.isFloat = n =>
  (n | 0) !== n

// returns true if num is odd
Number.isOdd = n =>
  (n & 1) !== 0

// returns true if num is even
Number.isEven = n =>
  (n & 1) === 0

// returns greatest common divisor
Math.gcd = () => {
  let i = arguments.length
  let a = arguments[--i]
  while(a && i) {
    let b = arguments[--i]
    while(b) {
      var c = a % b
      a = b
      b = c
    }
  }
  return a
}

// returns least common multiple
Math.lcm = () => {
  let i = arguments.length
  let a = arguments[--i]
  while(a && i) {
    let b = arguments[--i]
    a = a * b / Math.gcd(a, b)
  }
  return a
}

// returns true if val is obj
Object.isObject = v =>
  Object.toString.call(v) === '[object Object]'

// toString
Object.toString = Object.prototype.toString

// compares params by val
Object.isEqual = (a, b) => {
  if (a === b) {
    return true
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

// clones object
Object.clone = (obj) => {
  // Number, String, Boolean, Function, null, undefined
  if (null === obj || 'object' !== typeof obj) {
    return obj
  }

  // Date and RegExp
  if (Date.isDate(obj) || RegExp.isRegExp(obj)) {
    return new obj.constructor(obj)
  // Array and Object
  } else {
    let copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj))
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = this.clone(obj[key])
      }
    }
    return copy
  }
}

// copy vals of all enumerable own properties from source obj to target obj
Object.assign = Object.assign || function (target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

// inherits target by source
Object.inherit = (target, source) => {
  target.super_ = source
  target.prototype = Object.create(target.super_.prototype)
  let descriptor = Object.clone(target.super_.descriptor) || {}
  descriptor.constructor = {
    value        : target
  , enumerable   : false
  , writable     : true
  , configurable : true
  }
  Object.defineProperties(target.prototype, descriptor)
}

// returns true if val is bool
Boolean.isBoolean = v =>
  typeof v === 'boolean'

// returns true if val is str
String.isString = v =>
  typeof v === 'string'

// returns true if val is date
Date.isDate = v =>
  Object.toString.call(v) === '[object Date]'

// returns true if val is regex
RegExp.isRegExp = v =>
  Object.toString.call(v) === '[object RegExp]'

// returns true if val is arr
Array.isArray = Array.isArray || function (v) {
  return Object.toString.call(v) === '[object Array]'
}

// returns true if val is fn
Function.isFunction = v =>
  typeof v === 'function'

// these don't go extending stuff

// deepcopy obj
export const deepCopy = o => {
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
export const shallowCopy = o => {
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
export const copy = (o, shallow) => {
  let copyfn = shallow ? shallowCopy : deepCopy
  return copyfn(o)
}
// returns true if val is primitive
export const isPrimitive = v => {
  if (v === null) {
    return true
  }
  const t = typeof v
  return t !== 'object' && t !== 'function'
}

// returns true if val is null
export const isNull = v =>
  v === null

// returns true if val is undefined
export const isUndefined = v =>
  v === undefined

// returns true if val is defined
export const isDefined = v =>
  v !== undefined

// returns true if val is DOM el
export const isElement = v =>
  Object.toString.call(v).slice(8, 12) === 'HTML'

// escapes html
export const escapeHTML = str =>
  str.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// unescapes escaped html
export const unescapeHTML = str =>
  str.replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')

// removes non-alphabetic chars
export const removeAlpha = str =>
  str.replace(/[^A-Za-z ]+/g, "")

// removes non-alpha-numeric chars
export const removeNonAlphanumeric = str =>
  str.replace(/[^A-Za-z0-9 ]+/g, "")

// removes non-numeric chars
export const removeNonNumeric = str =>
  str.replace(/[^0-9-.]/g, "")

// removes numeric chars
export const removeNumeric = str =>
  str.replace(/[0-9]/g, "")

// base64 encodes
export const base64Encode = str =>
  new Buffer(str).toString('base64')

// base64 decodes
export const base64Decode = str =>
  new Buffer(str, 'base64').toString('utf8')

// capitalizes first char
export const capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1)

// colour utilities
const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i

// takes string colour, returns bool
export const isHexBased = color =>
hex.text(color)

// takes string colour, returns bool
export const isValidHex = color =>
  isHexBased(trimSpaces(color))

// takes string colour, returns either string or null
export const normalizeColor = color => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d)
  }
  return nextColor.toUpperCase()
}

// takes string colour, returns string
export const trimHash = color =>
  typeof color === 'string' ? color.replace('#', '') : color

// takes string colour, returns string
export const trimSpaces = color =>
  typeof color === 'string' ? color.replace(/\s/g, '') : color


// json utils (mostly node ones)

const fs = require('fs')

// checks if is json
export const isJson = str => {
  try {
    JSON.parse(str)
  } catch(e) {
    return false
  }
  return true
}

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
const readFileSync = file =>
  JSON.parse(fs.readFileSync(file, 'utf8'))

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
export const writeFileSync = (file, data, indent) => {
  if (typeof indent !== 'number') {
    indent = 0
  }
  fs.writeFileSync(file, JSON.stringify(data, null, indent), 'utf8')
}

// rot13
export function rot13(s) {
  return (s ? s : this).split('').map((_) => {
    if (!_.match(/[A-Za-z]/)) {
      return _
    }
    const c = Math.floor(_.charCodeAt(0) / 97)
    const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26
    return String.fromCharCode(k + ((c == 0) ? 64 : 96))
  }).join('')
}

// generates short uid
export const shortUid = () =>
  ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)

// normalize text
export const normText = text =>
  text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig).join(' ')

// credit: texas toland
export const pipe = (x, ...fs) =>
  fs.reduce((y, f) =>
    f(y), x)
// more verbosely
// const pipe = (initialValue, ...fns) =>
// fns.reduce((state, fn) => fn(state), initialValue)

// convert camelCase to lisp-case
export const camelCaseToLispCase = str => (
  str.replace(/[A-Z]/g, match => (
    '-' + match.toLowerCase())).toLowerCase()
)

// convert camelCase to snake_case
export const cameCaseToSnakeCase = str => (
  str.replace(/[A-Z]/g, match => (
    '_' + match.toLowerCase())).toLowerCase()
)

// convert lisp-case to camelCase
export const lispCaseToCamelCase = str => (
  str.toLowerCase().replace(/-[a-z]/g, match => (
    match.slice(1).toUpperCase()
  ))
)

// convert snake_case to camelCase
export const snakeCaseToCamelCase = str => (
  str.replace (/(\_\w)/g, match => (
    match[1].toUpperCase())
  )
)
