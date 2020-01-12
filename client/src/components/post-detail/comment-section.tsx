import React from 'react'
import Empty from '../shared/empty'
import CommentList from '../comment-list'

const PostDetailCommentSection = ({ comments }) => (
  <>
    {!comments || comments.length === 0 ? (
      <Empty comments />
    ) : (
      <CommentList comments={comments} />
    )}
  </>
)

export default PostDetailCommentSection
