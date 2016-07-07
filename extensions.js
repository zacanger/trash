// forked/yoinked/modified from gh:nervgh/yum.js
// cleaned up, slightly modernized
// basically a bunch of checkers that return bools
// and a couple of sorta polyfills
// these extend globals, so

// returns true if val is NaN
Number.isNaN = Number.isNaN || this.isNaN

// returns true if val is num
Number.isNumber = v => typeof v === 'number' && this.isNaN(v)

// returns true if num is int
Number.isInteger = Number.isInteger || function (n) {
  return (n | 0) === n
}

// returns true if num is float
Number.isFloat = n => (n | 0) !== n

// returns true if num is odd
Number.isOdd = n => (n & 1) !== 0

// returns true if num is even
Number.isEven = n => (n & 1) === 0

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
Object.isObject = v => Object.toString.call(v) === '[object Object]'

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
Boolean.isBoolean = v => typeof v === 'boolean'

// returns true if val is str
String.isString = v => typeof v === 'string'

// returns true if val is date
Date.isDate = v => Object.toString.call(v) === '[object Date]'

// returns true if val is regex
RegExp.isRegExp = v => Object.toString.call(v) === '[object RegExp]'

// returns true if val is arr
Array.isArray = Array.isArray || function (v) {
  return Object.toString.call(v) === '[object Array]'
}

// returns true if val is fn
Function.isFunction = v => typeof v === 'function'

// returns true if val is primitive
const isPrimitive = v => {
  if (v === null) {
    return true
  }
  const t = typeof v
  return t !== 'object' && t !== 'function'
}

// returns true if val is null
const isNull = v => v === null

// returns true if val is undefined
const isUndefined = v => v === undefined

// returns true if val is defined
const isDefined = v => v !== undefined

// returns true if val is DOM el
const isElement = v => Object.toString.call(v).slice(8, 12) === 'HTML'
