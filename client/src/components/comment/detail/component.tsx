import React from 'react'
import styled from 'styled-components/macro'
import Author from '../../shared/author'
import CommentDetailTimestamp from './timestamp'
import DeleteButton from '../../shared/delete-button'

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  font-size: 13px;
`

type Props = {
  attemptDeleteComment: (number) => void
  id: number
  token: string
  author: {
    username: string
    id: number
  }
  user: {
    id: number
    admin: boolean
  }
  created: Date
}

class CommentDetail extends React.Component<Props> {
  deleteComment = () => this.props.attemptDeleteComment(this.props.id)

  render() {
    return (
      <Wrapper>
        <Author username={this.props.author && this.props.author.username} />
        <CommentDetailTimestamp created={this.props.created} />
        {this.props.token &&
          (this.props.user.id === this.props.author.id ||
            this.props.user.admin) && (
            <DeleteButton onClick={this.deleteComment} />
          )}
      </Wrapper>
    )
  }
}

export default CommentDetail
