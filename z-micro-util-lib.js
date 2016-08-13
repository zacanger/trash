// a little kinda lib thingy idk
// just a bunch of utils really
// some stuff that's basically polyfills-ish
// needs node (there's fs stuff, etc.)
// forked/yoinked/modified from gh:nervgh/yum.js,
// gh:shapeshed/stringbean (cleaned up & modernized)
// and also a fair few of my own.
const
  fs   = require('fs')
, util = require('util')
, os   = require('os')

// returns true if val is NaN
export const isNaN = Number.isNaN || this.isNaN

// returns true if val is num
export const isNumber = v =>
  typeof v === 'number' && isNaN(v)

// returns true if num is int
export const isInteger = Number.isInteger || function (n) {
  return (n | 0) === n
}

// returns true if num is float
export const isFloat = n =>
  (n | 0) !== n

// returns true if num is odd
export const isOdd = n =>
  (n & 1) !== 0

// returns true if num is even
export const isEven = n =>
  (n & 1) === 0

// returns greatest common divisor
export const greatestCommonDivisor = () => {
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
export const leastCommonMultiple = () => {
  let i = arguments.length
  let a = arguments[--i]
  while(a && i) {
    let b = arguments[--i]
    a = a * b / greatestCommonDivisor(a, b)
  }
  return a
}

// returns true if val is obj
export const isObject = v =>
  objToString.call(v) === '[object Object]'

// toString
export const objToString = Object.prototype.toString

// compares params by val
export const isEqualObj = (a, b) => {
  if (a === b) {
    return true
  }
  return JSON.stringify(a) === JSON.stringify(b)
}

// clones object
export const objClone = (obj) => {
  // Number, String, Boolean, Function, null, undefined
  if (null === obj || 'object' !== typeof obj) {
    return obj
  }

  // Date and RegExp
  if (isDate(obj) || isRegExp(obj)) {
    return new obj.constructor(obj)
  // Array and Object
  } else {
    let copy = isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj))
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = this.clone(obj[key])
      }
    }
    return copy
  }
}

// copy vals of all enumerable own properties from source obj to target obj
export const objAssign = Object.assign || function (target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

// inherits target by source
export const objInherit = (target, source) => {
  target.super_ = source
  target.prototype = Object.create(target.super_.prototype)
  let descriptor = objClone(target.super_.descriptor) || {}
  descriptor.constructor = {
    value        : target
  , enumerable   : false
  , writable     : true
  , configurable : true
  }
  Object.defineProperties(target.prototype, descriptor)
}

// returns true if val is bool
export const isBoolean = v =>
  typeof v === 'boolean'

// returns true if val is str
export const isString = v =>
  typeof v === 'string'

// returns true if val is date
export const isDate = v =>
  objToString.call(v) === '[object Date]'

// returns true if val is regex
export const isRegExp = v =>
  objToString.call(v) === '[object RegExp]'

// returns true if val is arr
export const isArray = Array.isArray || function (v) {
  return objToString.call(v) === '[object Array]'
}

// returns true if val is fn
export const isFunction = v =>
  typeof v === 'function'

// these don't go extending stuff

// deepcopy obj
export const deepCopy = o => {
  let newObj
  if (!o || typeof o !== 'object') {
    return o
  }
  if (isArray(o)) {
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
  if (isArray(o)) {
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
  objToString.call(v).slice(8, 12) === 'HTML'

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
export const readJson = (file, cb) => {
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
export const readJsonSync = file =>
  JSON.parse(fs.readFileSync(file, 'utf8'))

// write with data
export const writejson = (file, data, indent, cb) => {
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
export const writeJsonSync = (file, data, indent) => {
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
  ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)

// i don't know why
export const otherShortUid = () =>
  (Math.random().toString(36) + '00000000000000000').slice(2, 10)


// normalize text
export const normText = text =>
  text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig).join(' ')

// credit: texas toland
export const pipe = (x, ...s) =>
  s.reduce((y, f) =>
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

// use instead of `console.error()`; logs to file and stdout both
const
  fn   = process.argv[2] || process.env.ERR_FILE || 'err.log'
, file = fs.createWriteStream(`${__dirname}/${fn}`, {flags : 'w'})
, sout = process.stdout
, err  = d => {
  file.write(util.format(d) + '\n')
  sout.write(util.format(d) + '\n')
}

// gh:artificerentertainment
export const nco = (variable, defaultValue) =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable

export const niceDate = `[${Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1]}]`

// usage: // isType(1, 'number', 'string') ; isType([], 'array') ; etc.
export const isType = a => {
  let types = Array.prototype.slice.call(arguments, 1)

  for (let i = 0, len = types.length; i < len; i++) {
    let type = String(types[i]).toLowerCase()

    if ((type == 'null' && a === null)        ||
        (type == typeof a)                    ||
        (type == 'object' && a === Object(a)) ||
        (type == 'array' && isArray && isArray(a)) ||
        Object.prototype.toString.call(a).slice(8, -1).toLowerCase() == type) {
      return true
    }
  }
  return false
}

export const xor = (a, b) =>
  !a != !b

export const lesser = (a, b) =>
  (a < b) ? a : b

// cred : gh:texastoland
// {key, ...clone} = source
export const cloneWithout = (source, ...keys) =>
  exports.copyWithout({}, source, ...keys)
// {key, ...copy} = {...target, ...source}
export const copyWithout = (target, source, ...keys) => {
  const copy = objAssign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

// left-pad (yes, really)
export const leftpad = (str, len, pd = ' ') =>
  Array(len > str.length ? 1+len-str.length : 0).join(pd) + str

// positive/negative nums with type checking
export const isPositive = (x) =>
  +x === x && x > 0
export const isNegative = (x) =>
  +x === x && x < 0

// transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
export const transpose = m =>
  m.map((r, ri) =>
    r.map((c, ci) => m[ci][ri]))

// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
export const transposeFlat = (m, l = Math.sqrt(m.length)|0) => m.map((c, i) =>
  m[(i%l)*l + i/l|0])

// reverse digits with correct sign handling
export const revNum = (n) =>
  Math.sign(n)*(''+Math.abs(n)).split('').reverse().join('')||0

// is num power of two
export const Po2 = (n) =>
  1 << (n.toString(2).length - 1) === n

// not sure which of these is better
export const userHome = process.env[(process.platform === 'win32')
  ? 'USERPROFILE'
  : 'HOME'
]
export const userHomeTwo = process.env.HOME
  || process.env.HOMEPATH
  || process.env.USERPROFILE


// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left
export function tryExecNTimes (funcToRetry, retriesLeft, onEveryError) {
  const exitCode = funcToRetry()
  if (exitCode === 0) {
    return exitCode
  } else {
    if (onEveryError) {
      onEveryError()
    }
    retriesLeft--
    echo(`Command failed, ${retriesLeft} retries left`)
    if (retriesLeft === 0) {
      return exitCode
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError)
    }
  }
}

// check if a terminal supports colour
const isWin = () => process.platform === 'win32'
const isColour = () => {
  const termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColour.test(process.env.TERM)
}
export isWin() || isColour()

// i know this is pointless but i think it's cute
export const sleep = ms => {
  const start = new Date().getTime()
  while ((new Date().getTime() - start) < ms){}
}


// some dom things
export const scrollTop = () =>
  global.scrollTo(0, 0)

export const getWidth = () =>
  global.innerWidth ||
  global.document.documentElement.clientWidth

export const getHeight = () =>
  global.innerHeight ||
  global.document.documentElement.clientHeight


// logging things

export const throwError = err => {
  throw new Error(err)
}

export const logWithTimestamp = function () {
  const date = new Date()
  const timestamp = date.getDate() + '/' + date.getMonth() + ' ' + date.getHours() + ':' +
  date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
  const message = Array.prototype.slice.call(arguments)
  message.unshift('--')
  message.unshift(timestamp)
  console.log.apply(console, message)
}

export const withInfo = (str = '') =>
  `${str}:${os.hostname()}:${process.pid}`

export const logWithInfo = (str = '') =>
  console.log(withInfo(str))


// this is a tiny router. hence the name.
export const tinyRouter = (pathname, response) => {
  let html, filePath
  if (pathname !== '/favicon.ico'){
    try {
      filePath = './' + pathname
      console.log('loading ' + filePath)
      html = fs.readFileSync(filePath)
      response.write(html)
      response.end()
    } catch (err) {
      console.log('unable to load ' + filePath)
      response.end()
    }
  }
}


// invokes until function returns truthily
// examples:
// Succeeds after 15 calls
// let i = 0
// invoker(20, 100)(() => {
// console.log(i)
// return ++i > 15
// }, console.log)
// Fails after 20 calls
// let ii = 0
// invoker(20, 100)(() => {
// console.log(ii)
// return ++ii > 22
// }, console.log)
export const invoker = (limit, interval) => (fn, cb) => {
  let current = 0
  let _fn = () => {
    current++
    let result = fn()
    if (result) {
      cb(null, result)
    } else if (current < limit) {
      setTimeout(_fn, interval)
    } else {
      cb(new Error('Limit exceeded!'), null)
      cb = () => {}
    }
  }
  _fn()
}


// run only once
// usage:
// function foo (cb) {
// cb = once(cb)
// if (!cb.called) {
// // do things
// }
// }
export function once (fn) {
  let f = function () {
    if (f.called) {
      return f.value
    }
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

// you should never rely on something like this to validate an email.
// email validation is basically impossible, so find some stable library
// to do it for you.
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
export const isValidEmail = email =>
  /^([\w-\.]*(\+[a-z0-9-]+)?@([\w-]+\.)+[\w-]{2,10})?$/.test(email)

export const transparentGif = () =>
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export const memoizeSimple = fn => {
  let
    cachedArg
  , cachedRes
  return arg => {
    if (cachedArg === arg) {
      return cachedRes
    }
    cachedArg = arg
    cachedRes = fn(arg)
    return cachedRes
  }
}

export const memoizeWithCache = fn => (arg, memoCache) => {
  if (memoCache.arg === arg) {
    return memoCache.res
  }
  const res = fn(arg)
  memoCache.arg = arg
  memoCache.res = res
  return res
}
