function getRidOfThat(obj, removed){
  var key
  for (key in obj){
    if(obj.hasOwnProperty(key) && obj[key] === removed){
      delete obj[key]
    }
  }
}

