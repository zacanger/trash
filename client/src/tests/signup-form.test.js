import React from 'react'
import { shallow } from 'enzyme'
import SignupForm from '../components/signup-form/component'

it('renders without crashing', () => {
  shallow(<SignupForm handleSubmit={(fn) => fn} />)
})
