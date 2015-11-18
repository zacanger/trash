import React from 'react'

const Friendz = React.createClass(
  render() {
    getInitialState(){
      return {
        newFriend: ''
      }
    },
    updateFriend(e){ // for event.
      this.setState({
        newFriend: event.target.value
      })
    },
    return (
      <div>
        <input type="text" />
        <button onClick={() => this.props.addFriend} onChange={this.state.newFriend}>add it!</button>
      </div>
    )
  }
)

export default Friendz
