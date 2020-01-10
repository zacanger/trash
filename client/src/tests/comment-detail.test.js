import React from 'react'
import { shallow } from 'enzyme'
import CommentDetail from '../components/comment/detail/component'
import Author from '../components/shared/author'
import CommentDetailTimestamp from '../components/comment/detail/timestamp'

it('renders without crashing', () => {
  shallow(<CommentDetail author />)
})

it('renders the author', () => {
  const username = 'deniz'
  const wrapper = shallow(<CommentDetail author={{ username }} />)
  expect(wrapper.contains(<Author username={username} />)).toEqual(true)
})

it('renders the timestamp', () => {
  const wrapper = shallow(<CommentDetail author />)
  expect(wrapper.contains(<CommentDetailTimestamp />)).toEqual(true)
})
