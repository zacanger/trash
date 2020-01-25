import React from 'react'
import styled from 'styled-components/macro'
import PostVoteUpvote from './upvote'
import PostVoteDownvote from './downvote'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.normalText};
`

class PostVote extends React.Component {
  constructor(props) {
    super(props)
    const didVote = PostVote.existingVote(props)

    this.state = {
      score: props.score,
      didVote,
      didUpvote: didVote === 1,
      didDownvote: didVote === -1,
    }
  }

  static existingVote({ user, votes }) {
    const existingVote =
      user && votes && votes.find((vote) => vote.user === user.id)
    return existingVote ? existingVote.vote : 0
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (this.props.score !== nextProps.score) {
      const didVote = PostVote.existingVote(nextProps)
      this.setState({
        score: nextProps.score,
        didVote,
        didUpvote: didVote === 1,
        didDownvote: didVote === -1,
      })
    } else if (this.props.token !== nextProps.token && !nextProps.token) {
      this.setState({
        didVote: false,
        didUpvote: false,
        didDownvote: false,
      })
    }
  }

  castVote(vote) {
    const { attemptVote, id, token } = this.props
    if (token) {
      attemptVote(id, vote)
      this.setState((prevState) => ({
        score: prevState.score + vote - prevState.didVote,
        didVote: vote,
        didUpvote: vote === 1,
        didDownvote: vote === -1,
      }))
    }
  }

  upvote = () => this.castVote(this.state.didUpvote ? 0 : 1)

  downvote = () => this.castVote(this.state.didDownvote ? 0 : -1)

  render() {
    return (
      <Wrapper>
        <PostVoteUpvote
          canVote={!!this.props.token}
          didVote={this.state.didUpvote}
          onClick={this.upvote}
        />
        <span>{this.state.score}</span>
        <PostVoteDownvote
          canVote={!!this.props.token}
          didVote={this.state.didDownvote}
          onClick={this.downvote}
        />
      </Wrapper>
    )
  }
}

export default PostVote