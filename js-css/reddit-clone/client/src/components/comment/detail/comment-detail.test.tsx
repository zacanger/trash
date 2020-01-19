/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import CommentDetail from './component'
import Author from '../../shared/author'
import CommentDetailTimestamp from './timestamp'

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
