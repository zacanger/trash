import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import alt from './lib/alt'
import storage from './lib/storage'
import persist from './lib/persist'

main()

function main(){
  persist (alt, storage, 'app')
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(<App />, app)
}
