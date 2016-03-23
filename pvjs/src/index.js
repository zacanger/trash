import React from 'react'
import ReactDOM from 'react-dom'
import { gifs, clientGifs } from './data'
import App from './App'

const dest = document.getElementById('app')

const gifData = [ ...gifs, ...clientGifs ]

ReactDOM.render(<App gifs={gifData} />, dest)
