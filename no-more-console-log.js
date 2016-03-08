var debug = true
// set debug = false to disable logging
var log = function(){
  debug && console && console.log.apply(console, arguments)
}

// example usage in fn
function ex(ample){
  log(ample)
}
whatever('testing from fn\n')

// example direct usage
log('this is testing directly\n')
