import React    from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
  render() {
    return (
      <div className="foo">
        Hello!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

