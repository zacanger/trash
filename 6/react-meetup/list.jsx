import React from 'react'

const List = React.createClass({
  render() {
    const friendsLIs = this.props.friends.map({item, list}) =>
      return <li key={index}>{item}</li>
      // return ( ) something...?
  }
})

export default List // like module.exports = {}
