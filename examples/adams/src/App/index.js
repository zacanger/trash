import React from 'react'

const App = ({gifs}) => (
  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
    { gifs.map((gif, i) =>
      <img key={i} src={gif} style={{width: '100px', height: '100px'}} />
    )}
  </div>
)

export default App
