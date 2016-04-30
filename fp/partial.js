// Prototype's version?
Function.prototype.curry = function(){
  var
    fn   = this
  , args = Array.prototype.slice.call(arguments)
  return function(){
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)))
  }
}

// Functional's version?
Function.prototype.partial = function(){
  var
    fn   = this
  , args = Array.prototype.slice.call(arguments)
  return function(){
    var arg = 0
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args [i] = arguments[arg++]
      }
      return fn.apply(this, args)
    }
  }
}

// from angus croll's blog
// note, the toArray is because the `arguments` array is actually and object
function toArray(enum){
  return Array.prototype.slice.call(enum)
}
// toArray is superfluous now, though, because we can just do
let args = Array.from(arguments)
//
Function.prototype.curry = function(){
  if (arguments.length < 1) {
    return this
  }
  var
    __ method = this
  , args      = toArray(arguments)
  return function(){
    return __method.apply(this, args.concat(toArray(arguments)))
  }
}
// and an example from his blog, using the above
const
  converter = (ratio, symbol, input) => [(input * ratio).toFixed(1), symbol].join(' ')
, kgToLb    = converter.curry(2.2, 'lbs')
, liToPi    = converter.curry(1.98, 'pints')
, miToKm    = converter.curry(1.62, 'km')


// note that these are all examples of partial application,
// not true currying as one would have in a purely functional language
// see:
const foo = (a, b) => a + b
foo.partiallyApply(2) // b => 2 + b
foo.curry() // a => b => a + b
foo.curry()(2) // foo.partiallyApply(2)

Function.prototype.curry = function(){
  var
    method = this
  , i      = 0
  , len    = this.length
  , args   = []

  function f() {
    args.push(arguments[0])
    if (++i < len) {
      return f
    } else {
      method.apply(this, args)
    }
  }
  return f
}

// here's a super simplistic adding thingy
// i think the es6 is right for this? in es5 below also
const adder = (a, b) => typeof(b) !== 'undefined' ? a + b : c => a + c
function adder(a, b) {
  if (typeof(b) !== 'undefined') {
    return a + b
  } else {
    return function(c){
      return a + c
    }
  }
}

// the real difference between partial application and currying:
// a curried function will accept ONLY one argument at a time.
// it will continue accepting one argument each time it's called right
// up until it's got enough, then will finally be executed for realz.

// so: a function that can take a function as input, and an int for
// the max args. should be able to call like so:
curry(fn, n, ...args) // ... that is,
curry(fn, n, 1, 2, 3) // or
curry(fn, n)(1)(2)(3) // or
curry(fn, n)(1, 2, 3) // and we should get the same results each way.
// so
curry(fn, n, 1, 2)(3, 4) == curry(fn, n, 1, 2, 3, 4)

// notes on the below:
// fn.apply(a, [1, 2, 3]) is kinda the same as doing
// fn.call(a, 1, 2, 3), where `a` is `this`
const argsArr = args => Array.from(args)

const curry = (fn, n) => {
  const args = argsArr(arguments)
  if (n === args.length -2) {
    return fn.apply(undefined, args.slice(2))
  } else {
    return () => {
      return curry.apply(undefined, args.concat(arguments))
    }
  }
}
// so try:
const addFour = (a, b, c, d) => a + b + c + d
curry(addFour, 4, 8, 16)(1, 2)

// modified to use Function.length
const newCurry = (fn, n) => {
  let args = argsArr(arguments)
  if (typeof(n) == 'undefined') {
    args[1] = fn.length
  }
  if (n === args.length - 2) {
    return fn.apply(undefined, args.slice(2))
  }
  return function(){
    return newCurry.apply(undefined, args.concat(argsArr(arguments)))
  }
}


// okay, so, from some other blog
const objs = [{id : 1}, {id : 2}, {id : 3}, {id : 4}]
objs.map(o => o.id)
// this is actualy a lot cleaner than his example, because he's doing it like
var objs = [{id : 1}, {id : 2}, {id : 3}, {id : 4}]
objs.map(function(o){return o.id})
// but we'll see where this goes, anyway
const curry = require('curry') // npm i -S curry
const get = curry(function(property, object){return object[property]})
objs.map(get('id'))
// meh.
const getIDs = function(objects){
  return objects.map(get('id'))
}
getIDs(objs)
// double meh.
const
  map    = curry((fn, val) => val.map(fn))
, getIDs = map(get('id'))

// still not sure this is actually cleaner xD
// let's keep going with his examples (translated to ES2015, though)
// some sample data (we'll pretend this is JSON we're getting from somewhere):
const sampleData = {
  "user"  : "z"
  , "posts" : [
    {"title" : "title!"     , "contents" : "asdf"  }
  , {"title" : "something!" , "contents" : "ghjkl;"}
  ]
}
require('http').get('something.whatever/that/data.json')
.then(JSON.parse)
.then(data => data.posts)
.then(posts => posts.map(post => post.title))
// or, using the curry stuff
require('http').get('something.whatever/that/data.json')
.then(JSON.parse)
.then(get('posts'))
.then(map(get('title')))
// uh
// okay
// i don't see that this is any better, here.
// oh wait, he wrote a follow-up!

// shit. i think some of this might be wrong.
// there's no `arguments`! i knew about `this`, but not `arguments`.
// (talking about when using `=>`, i mean.)
// not really a big deal, just in the above, we need to use `...args` instead.
// for example,
let sum = (...nums) => nums.reduce((a, b) => a + b)

