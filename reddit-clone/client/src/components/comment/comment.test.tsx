/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Comment from '.'
import CommentDetailContainer from './detail/container'
import CommentContent from './content'

it('renders without crashing', () => {
  // @ts-ignore
  shallow(<Comment />)
})

it('renders details about the comment', () => {
  const wrapper = shallow(<Comment />)
  // @ts-ignore
  expect(wrapper.contains(<CommentDetailContainer />)).toEqual(true)
})

it("renders the comment's content", () => {
  const comment = 'test comment'
  const wrapper = shallow(<Comment body={comment} />)
  expect(wrapper.find(CommentContent).exists()).toEqual(true)
  expect(
    wrapper
      .find(CommentContent)
      .children()
      .text()
  ).toEqual(comment)
})
