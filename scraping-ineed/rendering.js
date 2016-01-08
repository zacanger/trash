var ineed  = require('ineed')
  , stylus = require('stylus')
  , marked = require('marked')

function renderThat(code){
  var css = null
  stylus.render(code, null, function(err, result){
    css = result
  })
  return css
}

var results = ineed.reprocess.cssCode(renderThat).texts(marked).fromHtml(html)

