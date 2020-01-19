import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, Route, Switch } from 'react-router-dom'
import theme from '../../theme'
import history from '../../util/history'
import GlobalStyle from '../../global-style'
import HeaderContainer from '../header/container'
import ErrorNotificationContainer from '../error-notification/container'
import LoginFormContainer from '../login-form/container'
import SignupFormContainer from '../signup-form/container'
import CreatePostFormContainer from '../create-post-form/container'
import Home from '../home'

const App = (props) => (
  <ThemeProvider theme={theme(props.dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Route component={ErrorNotificationContainer} />
        <Switch>
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupFormContainer} />
          <Route path="/createpost" component={CreatePostFormContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
)

export default App
