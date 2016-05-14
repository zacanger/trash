import React    from 'react'
import ReactDOM from 'react-dom'

// approximation of ng-repeat

const stuff = [
  {foo : 'things' , bar : 'stuff'}
, {foo : 'asdfgh' , bar : 'ghjkl'}
, {foo : 'quux'   , bar : 'baz'  }
, {foo : 'hello'  , bar : 'world'}
]

const Repeat = React.createClass({
  getInitialState(){
    return {stuff : []}
  }
, render(){
    const list = this.props.stuff.map(a => {
      return (
        <li key={a.foo}>
          <strong>{a.foo}</strong>
          <em>{a.bar}</em>
        </li>
      )
    })
    return (
      <div>
        <h2>below you'll see an array of objects, repeated over</h2>
        <ul>{list}</ul>
      </div>
    )
  }
})

ReactDOM.render(<Repeat stuff={stuff} />, document.getElementById('repeat'))

