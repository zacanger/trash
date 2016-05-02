import React from 'react'

const User = React.createClass({
  render(){
    return (
      <div>
        <span>{this.props.username}</span>
        <p>{this.props.user.name}</p>
      </div>
    )
  }
})

export default User

