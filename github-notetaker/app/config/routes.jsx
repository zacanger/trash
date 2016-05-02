import React  from 'react'
import Router from 'react-router'
import Main   from '../components/Main'
import Home   from '../components/Home'

const Route = Router.Route

const Routes = (
  <Route path='/' component={Main} />
)

export default Routes

