import React from 'react'
import LoadingIndicatorBox from '../shared/loading-indicator/box'
import Empty from '../shared/empty'
import PostDetailPost from './post'
import PostDetailInfoBarContainer from './info-bar/container'
import CommentFormContainer from '../comment-form/container'
import PostDetailCommentSection from './comment-section'

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.post !== prevProps.post && this.props.post === null) {
      this.props.history.goBack()
    }
  }

  render() {
    const { post } = this.props
    if (this.props.isFetching) return <LoadingIndicatorBox />
    if (!post) return <Empty />
    return (
      <>
        <PostDetailPost {...post} />
        <PostDetailInfoBarContainer
          id={post.id}
          views={post.views}
          upvotePercentage={post.upvotePercentage}
          author={post.author}
        />
        {this.props.token && <CommentFormContainer id={post.id} />}
        <PostDetailCommentSection comments={post.comments} />
      </>
    )
  }
}

export default PostDetail
