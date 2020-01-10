import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../../util/with-auth'
import { fetchPost } from '../../actions/posts'
import PostDetail from './component'

export const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post,
})

const mapDispatchToProps = { fetchPost }

const enhance = compose(withAuth, connect(mapStateToProps, mapDispatchToProps))

const PostDetailContainer = enhance(PostDetail)

export default PostDetailContainer
