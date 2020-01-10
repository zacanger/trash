import React from 'react'
import { shallow } from 'enzyme'
import CommentForm from './component'

it('renders without crashing', () => {
  shallow(<CommentForm handleSubmit={(fn) => fn} />)
})
