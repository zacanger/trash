var debug = true

var _log = function(){
    debug && window.console && console.log.apply(console, arguments)
  }

function whatever(things){
  _log(things)
}

whatever('testing from fn\n')

_log('this is testing directly\n')

