'use strict'

const
  express      = require('express')
, app          = express()
, config       = require('./config')
, hoganExpress = require('hogan-express')
, path         = require('path')
, mdkb         = require('../app/mdkb')

app
.use('/assets', express.static('public/assets'))
.use('/content/UPLOADS', express.static('content/UPLOADS'))

.set('view engine', 'html')
.set('layout', 'layout')
.set('partials', {'navigation' : 'partials/navigation'})

// .enable('view cache')
.set('views', path.join(config.theme, 'templates'))
.engine('html', hoganExpress)

.get('*', (req, res) => {
  let page
  if (req.query.search) { // do the search logic
    page = mdkb.searchPages(req.query.search)
  } else if (req.params[0]) { // render docs page
    page = mdkb.getPage(req.params[0])
  } else { // index page
    page = mdkb.getHomePage()
  }
  res.render(page.template, page)
})

// start the server
const server = app.listen(config.port, () => {
  const info = server.address()
  console.log('listening on http://%s:%s', 'localhost', info.port)
})
