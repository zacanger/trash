import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import withAuth from '../../util/with-auth'
import { attemptLogin } from '../../actions/auth'
import LoginForm from './component'

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
})

const mapDispatchToProps = { attemptLogin }

const enhance = compose(
  reduxForm({ form: 'login' }),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
)

const LoginFormContainer = enhance(LoginForm)

export default LoginFormContainer
