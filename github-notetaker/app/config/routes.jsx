import React   from 'react'
import Router  from 'react-router'
import Main    from '../components/Main'
import Home    from '../components/Home'
import Profile from '../components/Profile'

const Route = Router.Route
const IndexRoute = Router.IndexRoute

const Routes = (
  <Route path='/' component={Main}>
    <Route path='/profile/:username' component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)

export default Routes

