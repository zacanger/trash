import React       from 'react'
import FriendsList from './FriendsList'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>the <strong>friend</strong> machine</h1>
        <div className='friends'>
          <FriendsList />
        </div>
      </div>
    )
  }
}

export default App
