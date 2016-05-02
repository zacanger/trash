import React  from 'react'
import Router from 'react-router'
import Main   from '../components/Main'
import Home   from '../components/Home'

const Route = Router.Route
const IndexRoute = Router.IndexRoute

const Routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
  </Route>
)

export default Routes

