// this is similar to node's `util.format`, but for... node node.
// this only does a string, not numbers, json, and an escaped `%`.
// it's still pretty useful, though obviously es6 interpolation
// is a thing, too.

function format(){
  var args    = [].slice.call(arguments)
    , initial = args.shift()
  function replacer(text, replacement){
    return text.replace('%s', replacement)
  }
  return args.reduce(replacer, initial)
}
