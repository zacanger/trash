import React from 'react'
import { render } from 'react-dom'
import Thing from './components/thing'

const App = () =>
  <div>
    <Thing foo="bar" />
  </div>

render(<App />, document.getElementById('root'))
