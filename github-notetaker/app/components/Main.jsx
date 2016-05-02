import React from 'react'

const Main = React.createClass({
  render(){
    return (
      <div>
        <nav>
          <button>
            Menu
          </button>
        </nav>
        <div>{this.props.children}</div>
      </div>
    )
  }
})

export default Main

