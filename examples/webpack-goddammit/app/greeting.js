import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="greeting">
        howdy, {this.props.name}
      </div>
    )
  }
})

