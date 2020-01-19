import { LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGOUT } from '../actions/auth'
import storage from '../util/storage'

export default () => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS || action.type === SIGNUP_SUCCESS) {
    storage.setItem('token', action.token)
  } else if (action.type === LOGOUT) {
    storage.removeItem('token')
  }
  next(action)
}
