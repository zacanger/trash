import React from 'react'
import { Field } from 'redux-form'
import Form from '../shared/form/form'
import renderField from '../shared/form/render-field'
import { usernameValidator, passwordValidator } from '../../util/validators'
import SubmitButton from '../shared/form/submit-button'

class SignupForm extends React.Component {
  componentDidMount() {
    this.redirectIfLoggedIn()
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn()
  }

  redirectIfLoggedIn() {
    if (this.props.token) {
      this.props.history.push('/')
    }
  }

  onSubmit = ({ username, password }) => {
    this.props.attemptSignup(username, password)
  }

  render() {
    return (
      <Form
        loading={this.props.loading}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="username"
          label="username"
          type="text"
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          name="password"
          label="password"
          type="password"
          component={renderField}
          validate={passwordValidator}
        />
        <Field
          name="password2"
          label="confirm password"
          type="password"
          component={renderField}
        />
        <SubmitButton type="submit">sign up</SubmitButton>
      </Form>
    )
  }
}

export default SignupForm
