import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './component'

it('renders without crashing', () => {
  shallow(<LoginForm handleSubmit={(fn) => fn} />)
})
