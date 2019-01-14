import * as React from 'react'
import c from 'cxs/component'

const Section = c('section')({
  background: 'white',
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '1500px',
  marginLeft: 'auto',
  marginRight: 'auto'
})

const StarSpan = c('span')({
  color: 'gold',
  content: 'star'
})

const Star = () => <StarSpan>{' \u2605'}</StarSpan>

const Stars = ({ stars }) => (
  <span>
    {stars} <Star />
  </span>
)

const Description = c('div')({
  color: '#444',
  fontSize: '14px'
})

const RepoWrapper = c('article')({
  ':hover,:focus': {
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.15)',
    transform: 'translate(1px, -1px)'
  },
  margin: '8px',
  maxHeight: '400px',
  overflow: 'hidden',
  boxShadow: '2px 2px 4px #999',
  transition: '.2s ease-in-out transform, .2s ease-in-out box-shadow',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
  width: '300px',
  height: '150px',
  maxWidth: '300px',
  minWidth: '200px'
})

const RepoName = c('a')({
  textDecoration: 'none',
  marginBottom: '8px',
  color: '#2cc1ed',
  ':hover': {
    textDecoration: 'underline'
  }
})

const NoWrap = c('span')({
  fontSize: '14px',
  marginBottom: '16px'
})

const Repo = (props) => (
  <RepoWrapper key={props.name}>
    <RepoName href={props.url} target="blank" rel="noopener noreferrer">
      {props.name}
    </RepoName>
    <NoWrap>
      <Stars stars={props.stars} />
      {props.language && (
        <React.Fragment>
          {' '}
          &middot; <span>{props.language}</span>
        </React.Fragment>
      )}
    </NoWrap>
    <Description>{props.description}</Description>
  </RepoWrapper>
)

const Repos = (props) => (
  <Section>
    {props.repos.map((repo) => (
      <Repo {...repo} key={repo.name} />
    ))}
  </Section>
)

export default Repos
