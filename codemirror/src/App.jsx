import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Codemirror from '../node_modules/codemirror'

require('../node_modules/codemirror/mode/javascript/javascript')

var defaults = {
  javascript: 'var foo = \'bar\'\nfunction(){\n  return foo\n}'
}

var App = Reacet.createClass({
  getInitialState () {
    return {
      code     : defaults.javascript
    , readOnly : true
    , mode     : 'javascript'
    }
  },
  updateCode: (newCode) {
    this.setState({
      code: newCode
    })
  },
  toggleReadOnly () {
    this.setState({
      readOnly: !this.state.readOnly
    }, () => this.refs.editor.focus())
  },
  interact(cm){
    console.log(cm.getValue())
  },
  render () {
    var options = {
      lineNumbers : true
      , readOnly  : this.state.ReadOnly
      , mode      : this.state.mode
    }
    return (
      <div>
        <Codemirror
          ref="editor"
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          interact={this.interact} />
        <div style={{marginTop:10}}>
          <button onClick={this.toggleReadOnly}>
            read-only (currently {this.state.readOnly ? 'on' : 'off'})
          </button>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))

