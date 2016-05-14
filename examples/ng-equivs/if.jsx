import React    from 'react'
import ReactDOM from 'react-dom'

// an approximation of ng-if

const If = React.createClass({
  render(){
    let el = null
    if (this.props.show) {
      el = (
        <div>showing if show is true!</div>
      )
    }
    return el
  }
})
ReactDOM.render(<If show={true} />, document.getElementById('if'))

const Switch = React.createClass({
  render(){
    let el = null
    switch (this.props.show) {
      case one:
        el = (<span>one</span>)
        break
      case two:
        el = (<span>two</span>)
        break
      default
        el = (<span>default</span>)
    }
    return el
  }
})
ReactDOM.render(<Switch show={one} />, document.getElementById('switch'))

const IIFE = React.createClass({
  render(){
    return (
      <div>
        {(show => {
          if (show) {
            return (<span>woot</span>)
          }
        })(this.props.show)}
      </div>
    )
  }
})
ReactDOM.render(<IIFE show={false} />, document.getElementById('iife'))

