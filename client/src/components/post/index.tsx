import React from 'react'
import styled from 'styled-components/macro'
import PostVoteContainer from './vote/container'
import PostContent from './content'

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${(props) => props.theme.foreground};
`

const Post = ({ id, votes, score, comments, full, ...content }) => (
  <Wrapper>
    <PostVoteContainer id={id} votes={votes} score={score} />
    <PostContent
      showFullPost={full}
      id={id}
      commentCount={comments ? comments.length : 0}
      {...content}
    />
  </Wrapper>
)

export default Post
