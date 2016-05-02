import React from 'react'

const Repos = React.createClass({
  render(){
    return (
      <div>
        <p>{this.props.repos}</p>
      </div>
    )
  }
})

export default Repos

