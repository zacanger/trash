// this is an example from dan abramov's blog, slightly
// modified. just using regular old webpack hmr for hot loading

import React    from 'react'
import ReactDOM from 'react-dom'
const App = require('./App') // assuming you have an app
// not sure if that could be an import instead, because, see below

const el = document.getElementById('root')
ReactDOM.render(<App />, el)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App')
    ReactDOM.render(<NextApp />, el)
  })
}

