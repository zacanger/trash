'use strict'

const React = require('react')

module.exports = React.createClass({
  render(){
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>demo</title>
          <link rel='stylesheet' href='/styles.css'></link>
        </head>
        <body>
          <div>{this.props.children}</div>
          <script src="/socket.io/socket.io.js"></script>
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
})
