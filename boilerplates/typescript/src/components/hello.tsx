import * as React from 'react'

const styles = { color: 'blue', fontFamily: 'monospace' }

export default class Hello extends React.Component<void, void> {
  public render() {
    return (
      <div>
        <h1 style={styles}>Hello</h1>
      </div>
    )
  }
}
