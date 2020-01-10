import React from 'react'
import { shallow } from 'enzyme'
import CommentForm from '../components/comment-form/component'

it('renders without crashing', () => {
  shallow(<CommentForm handleSubmit={(fn) => fn} />)
})
