import React from 'react'
import { shallow } from 'enzyme'
import PostDetailCommentSection from './comment-section'
import CommentList from '../comment-list'
import Empty from '../shared/empty'

it('renders without crashing', () => {
  shallow(<PostDetailCommentSection post />)
})

it('renders a list of comments', () => {
  const comments = [{}]
  const wrapper = shallow(<PostDetailCommentSection comments={comments} />)
  expect(wrapper.contains(<CommentList comments={comments} />)).toEqual(true)
})

it('renders a message when there are no comments', () => {
  const wrapper = shallow(<PostDetailCommentSection post />)
  expect(wrapper.contains(<Empty comments />)).toEqual(true)
})
