function navigate(){
  // removing leading and trailing slash
  normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '')

  if(normalizedHash == ''){
    startNav('/somewhere')
  } else {
    setState({location : normalizedHash.split('/'), transitioning : false})
  }
}

function startNav(newURI){
  var currentURI = window.location.hash.substr(1)

  if(currentURI != newURI){
    setState({transitioning : true})

    window.location.replace(
      window.location.pathname + window.location.search + '#' + newURI
    )
  }
}

