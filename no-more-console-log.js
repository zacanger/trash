var debug = true
// set debug = false to disable logging
var _log = function(){
    debug && console && console.log.apply(console, arguments)
  }

// example usage in fn
function ex(ample){
  _log(ample)
}
whatever('testing from fn\n')

// example direct useage
_log('this is testing directly\n')

