import React    from 'react'
import ReactDOM from 'react-dom'

// approximation of ng-click in react

const Click = React.createClass({
  getInitialState(){
    return {clickCount : 0}
  }
, handleClick(){
    this.setState({clickCount : this.state.clickCount + 1})
}
, render(){
    return (
      <button
        onClick={this.handleClick}>
        clicked {this.state.clickCount} times
      </button>
    )
  }
})

ReactDOM.render(<Click />, document.getElementByID('click'))

