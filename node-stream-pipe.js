var child  = require('child_process')
  , fooRep = child.spawn('node')

fooRep.stdout.pipe(process.stdout, {end: false})
process.stdin.resume()
process.stdin.pipe(fooRep.stdin, {end:false})

fooRep.stdin.on('end', function(){
  process.stdout.write('ended stream')
})

fooRep.on('exit', function(code){
  process.exit(code)
})

