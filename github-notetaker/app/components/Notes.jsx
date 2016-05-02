import React from 'react'

const Notes = React.createClass({
  render(){
    return (
      <div>
        <div>{this.props.notes}</div>
      </div>
    )
  }
})

export default Notes

