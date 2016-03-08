function counter(x){
  var i = x == undefined ? 1 : x
  return function(){return i++}
}
