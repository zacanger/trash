import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../../../util/with-auth'
import { attemptDeleteComment } from '../../../actions/posts'
import CommentDetail from './component'

const mapDispatchToProps = { attemptDeleteComment }

const enhance = compose(withAuth, connect(null, mapDispatchToProps))

// @ts-ignore
const CommentDetailContainer = enhance(CommentDetail)

export default CommentDetailContainer
