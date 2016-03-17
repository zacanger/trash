const
  fs   = require('fs')
, file = process.argv[2]

if(file){
  try{
    fs.watch(file, () => {
      console.log(file, 'changed')
    })
    console.log('watching', file)
  } catch(e){
    if(e.errno === 'ENOENT'){
      console.error('Error, no such file', file)
    } else {
      console.error(e)
    }
  }
} else {
  console.log('please specify a file to watch')
}

