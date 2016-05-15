import React    from 'react'
import ReactDOM from 'react-dom'

const Style = React.createClass({
  render(){
    const style = {
      height : 500
    , width  : 500
    , color  : '#101010'
    }
    return (
      <div style={style}>
        styled!
      </div>
    )
  }
})

ReactDOM.render(<Style />, document.getElementById('style'))

