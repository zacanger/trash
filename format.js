// this is the same as node's `util.format`.
// just for use in, like, not-node.
// note that it's only using the string; `util.format` also has placeholders
// for numbers, json, and an actual percent sign thingy.
// it's still actually kinda useful with es6, because es6's goddamn
// interpolation is just about the most obnoxiously verbose way they
// could think of... tbh just ending quotes and using a plus really
// wasn't all that bad, in comparison.
// anyway.

function format(){
  var args = [].slice.call(arguments)
  var initial = args.shift()
  function replacer(text, replacement){
    return text.replace('%s', replacement)
  }
  return args.reduce(replacer, initial)
}

