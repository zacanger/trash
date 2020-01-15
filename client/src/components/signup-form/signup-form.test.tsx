/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import SignupForm from './component'

it('renders without crashing', () => {
  shallow(<SignupForm handleSubmit={(fn) => fn} />)
})
