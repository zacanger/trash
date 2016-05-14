import React    from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
  render() {
    return (
      <div className="commentBox">
        Hello React!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
)
