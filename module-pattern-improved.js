// the idea here is to make a module that works with AMD (requirejs),
// node, and in the browser.

// example node usage:
const someModule = require('some-module')
console.log(someModule.greets) // => 'howdy'

// example browser usage:
// <script type="text/javascript" src="./someModule.js"></script>
// <script type="text/javascript">someModule.greets()</script>

// example requirejs usage:
define(['somemodule'], function(someModule){
  console.log(someModule.greets) // => 'howdy'
  // source code all in here i guess
})

// and how to actually wrap it all up:
((namespace) => {
  if(typeof define === 'undefined'){
    define = (fn) => {
      var res = fn()
      if(typeof exports == 'undefined'){
        window[namespace] = res
      } else {
        module.exports = res
      }
    }
  }
  define(() => {
    // return the things from the module here!
    return { greets : 'howdy' }
  })
})('someModule')

