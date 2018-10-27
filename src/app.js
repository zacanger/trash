import * as React from 'react'
import Repos from './repos'

const globalStyles = `
html, body {
  margin: 0;
  padding: 0;
  font-family: "Proxima Nova", "Montserrat", "Helvetica Neue", "Noto Sans", sans-serif;
  box-sizing: border-box;
}
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [] }
  }

  componentDidMount() {
    const style = document.createElement('style')
    style.innerHTML = globalStyles
    document.head.appendChild(style)

    fetch('https://api.github.com/users/zacanger/repos?sort=updated')
      .then(b => b.json())
      .then(rs => {
        const repos = rs
          .filter((r) => !r.fork && !r.archived)
          .map(
            ({
              description,
              html_url: url,
              language,
              name,
              stargazers_count: stars
            }) => ({
              description,
              language,
              name,
              stars,
              url
            })
          )
          .sort((a, b) => b.stars - a.stars)

        this.setState({ repos })
      })
  }

  render() {
    return (
      <div>
        <Repos repos={this.state.repos} />
      </div>
    )
  }
}
