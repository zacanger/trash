import React from 'react' // same as var React = require('react')
import ReactDOM from 'react-dom'
import List from './List'
import Friendz from './Friendz'

const App = React.createClass({
  getInitialState(){
    return (
      bros: ['bman', 'brosef']
    )
  },
  componentDidMount(){}, // onload
  componentWillMount(){}, // not quite on load?
  addFriend(newFriend){
    this.setState({
      friends: this.state.friends.cocat(new, newFriend)
    })
  }

  render() {
    return (
      <div>what up {this.state.bros}</div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
