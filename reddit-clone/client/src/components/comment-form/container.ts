import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { attemptCreateComment } from '../../actions/posts'
import CommentForm from './component'

const mapDispatchToProps = { attemptCreateComment }

const enhance = compose(
  reduxForm({ form: 'comment' }),
  connect(null, mapDispatchToProps)
)

// @ts-ignore
const CommentFormContainer = enhance(CommentForm)

export default CommentFormContainer
