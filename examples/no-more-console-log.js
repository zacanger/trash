var debug = true,
  _log = function(){
    debug && window.console && console.log.apply(console, arguments)
  }

function whatever(){
  _log('yup, that worked')
}
