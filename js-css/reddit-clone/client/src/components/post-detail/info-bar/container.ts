import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../../../util/with-auth'
import { attemptDeletePost } from '../../../actions/posts'
import PostDetailInfoBar from './component'

const mapDispatchToProps = { attemptDeletePost }

const enhance = compose(withAuth, connect(null, mapDispatchToProps))

const PostDetailInfoBarContainer = enhance(PostDetailInfoBar)

export default PostDetailInfoBarContainer
