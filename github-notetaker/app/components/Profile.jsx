import React  from 'react'
import Router from 'react-router'
import User   from './User'
import Repos  from './repos'
import Notes  from './Notes'

const Profile = React.createClass({
  getInitialState(){
    return {
      notes : []
    , user  : {}
    , repos : []
    }
  }

, render(){
    return (
      <div>
        <Profile
          username={this.props.params.username}
          user={this.state.bio}
        />
        <Repos repos={this.state.repos} />
        <Notes notes={this.state.notes} />
      </div>
    )
  }
})

export default Profile

