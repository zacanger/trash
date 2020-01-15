/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Post from '.'
import PostVoteContainer from './vote/container'
import PostContent from './content'

it('renders without crashing', () => {
  // @ts-ignore
  shallow(<Post />)
})

it('renders vote buttons and score', () => {
  // @ts-ignore
  const wrapper = shallow(<Post />)
  expect(wrapper.contains(<PostVoteContainer />)).toEqual(true)
})

it('renders information about the post', () => {
  // @ts-ignore
  const wrapper = shallow(<Post />)
  expect(wrapper.contains(<PostContent commentCount={0} />)).toEqual(true)
})
