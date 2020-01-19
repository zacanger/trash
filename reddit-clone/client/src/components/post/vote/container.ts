import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../../../util/with-auth'
import { attemptVote } from '../../../actions/posts'
import PostVote from './component'

const mapDispatchToProps = { attemptVote }

const enhance = compose(withAuth, connect(null, mapDispatchToProps))

const PostVoteContainer = enhance(PostVote)

export default PostVoteContainer
