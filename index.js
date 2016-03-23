// const
const foo = 2
foo // => 2
foo = false // ERROR!

// let
let something = 'this is something!'
something = 0 // this is okay, just like with `var`
while (true) {
  let something = 'this is a new thing'
  console.log(something)
  break
}
console.log(something)
// that's not a function, it's a block.
function asdf() {
  for (let i = 0; i < 100; i++) {
    let j = 'string'
    console.log(j)
  }
  console.log(j)
}
asdf() // woahhhh



// arrow functions
var numbers = [1,2,3,4,5]
numbers.map(function(x) {
  return x * x
})
$('.btn').click(function(e) {
  e.preventDefault()
  this.toggle()
})
// or:
let numbers = [1,2,3,4,5]
numbers.map(x => x * x)
$('.btn').click(e => {
  e.preventDefault()
  this.toggle()
})


// arrow functions bind 'this' when defined, rather than when called!
// new kind of methods!
var obj = {
  name      : 'z'
, age       : 26
, friends   : ['g', 'e', 'r']
, hiFriends : function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + ' is friends with ' + friend)
    })
  }
} // undefined is friends with g (etc.)
// vs
const obj = {
  name    : 'z'
, age     : 26
, friends : ['g', 'e', 'r']
, hiFriends(){
    this.friends.forEach(friend => {
      console.log(this.name + ' is friends with ' + friend)
    })
  }
} // z is friends with e (etc)





// template strings
const greetz = 'hello'
console.log(`${greetz}, world`)


// multiline strings (using one backtick)
var thing = 'this is a multi-line string\ndoing things the old way.\nkinda gross, huh?'
let stuff = `here's a multi-line string
doing things the new way.
much nicer, i think.`




// defaults:
function add(x, y) {
  if ((typeof x == 'undefined') || (typeof y == 'undefined')) {
    console.error('invalid arguments')
  } else {
    return x + y
  }
}
// vs
function add(x = 0, y = 0) { return x + y }
add(2, 2)
add()

// destructuring:
var peeps = ['scott', 'josh', 'erin', 'sam', 'nick', 'cole', 'geordyn']
,  first  = peeps[0]
,  second = peeps[1] // etc
// vs
const peeps = ['scott', 'josh', 'erin', 'sam', 'nick', 'cole', 'geordyn']
const [first, second, third, fourth, fifth, sixth, seventh] = peeps

// also:
var self = {
  name : 'zac'
, age  : 26
, does : 'stuff'
}
var nom  = self.name
  , old  = self.age
  , does = self.does
// vs
const self = {
  name : 'zac'
, age  : 26
, does : 'stuff'
}
const {nom, old, things} = self
let
  foo    = 'foo'
, bar    = 'bar'
, fooBar = {foo, bar}
console.log(fooBar)
let
  nonsense = {key : 'value', newKey : 'newValue'}
, {key, newKey} = senseless
console.log(key, newKey)
console.log(senseless)



// putting some things together:
const eliteBook = {
  brand     : 'hp'
, overheats : 'rarely'
, ram       : 16
, cores     : 4
}
const toshy = {
  brand     : 'toshiba'
, overheats : 'frequently'
, ram       : 4
, cores     : 2
}
function laptopInfo({brand}, {overheats}, {ram}, {cores}){
  console.log(`my ${brand} laptop has ${ram} of RAM, a ${cores} CPU, and it overheats ${overheats}.`)
}


// rest:
var nums = [1,2,3,4,5]
function vals(list){
  var first  = nums[0]
    , second = nums[1]
    , rest   = list.slice(2)
  console.log(first, second, rest)
}
// vs
const nums = [1,2,3,4,5]
function vals([first, second, ...rest]){
  console.log(first, second, rest)
}
function logThings(...stuff){
  console.log(stuff)
}
logThings('thing one', 'thing two', false, 2)


// spread:
var a = [1,2,3]
  , b = [4,5,6]
  , c = [7,8,9]
  , x = [].concat(a,b,c)
// vs
let y = [...a, ...b, ...c]

var paragraphs = document.querySelectorAll('p')
Array.prototype.forEach.call(ps, (elm) => {
  console.log(elm.textContent)
})
// or
[...ps].forEach(elm => console.log(elm.textContent))



// MODULES! http://www.2ality.com/2014/09/es6-modules-final.html

// a module:
export function add(list){
  return [...list].reduce((acc, x) => acc + x, 0)
}

export function square(val){
  return val * val
}

const Math = {add, square}

export default Math

// using that module:
import Math          from 'math' // because it's the default
import {add, square} from 'math' // because we can

let
  total = Math.add(1,2,3,4,5)
, twice = square(16)

// classes:
// NO.
// https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
// https://medium.com/javascript-scene/how-to-fix-the-es6-class-keyword-2d42bb3f4caf
// https://medium.com/javascript-scene/inside-the-dev-team-death-spiral-6a7ea255467b
// http://www.johndcook.com/blog/2011/07/19/you-wanted-banana/
// http://harmful.cat-v.org/software/OO_programming/
class Mammal {
  constructor(name, limbs) {
    this.name  = name
    this.limbs = limbs
  }
  details() {
    console.log(`${this.name} has ${this.limbs} limbs`)
  }
}
let cat = new Mammal('kitten', 4)
class Human extends Mammal {
  constructor(name, limbs, skillz) {
    super(name, limbs)
    this.skillz = skillz
  }
  skilled() {
    console.log(`${this.name} has ${this.skillz} skills`)
  }
}
let me = new Mammal('Zac', 4)
me.detail()
me.skilled()


// promises
// generators
// async/await
// decorators
// observables
// array methods
// object methods
//
