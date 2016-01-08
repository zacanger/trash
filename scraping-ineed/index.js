var ineed = require('ineed')

ineed.collect.images.hyperlinks.scripts.stylesheets.from('http://zacanger.tumblr.com',
  function(err, response, result){
    console.log(result)
  })

