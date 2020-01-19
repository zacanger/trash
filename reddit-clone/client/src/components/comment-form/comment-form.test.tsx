/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import CommentForm from './component'

it('renders without crashing', () => {
  // @ts-ignore
  shallow(<CommentForm handleSubmit={(fn) => fn} />)
})
