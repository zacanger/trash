import React from 'react'
import { shallow } from 'enzyme'
import PostDetail from '../components/post-detail/component'
import LoadingIndicatorBox from '../components/shared/loading-indicator/box'
import PostDetailPost from '../components/post-detail/post'
import PostDetailCommentSection from '../components/post-detail/comment-section'
import Empty from '../components/shared/empty'

it('renders without crashing', () => {
  shallow(<PostDetail fetchPost={(fn) => fn} />)
})

it('renders a post and its comment section', () => {
  const wrapper = shallow(<PostDetail fetchPost={(fn) => fn} post />)
  expect(wrapper.contains(<PostDetailPost />)).toEqual(true)
  expect(wrapper.contains(<PostDetailCommentSection />)).toEqual(true)
})

it('renders a loading indicator while fetching', () => {
  const wrapper = shallow(<PostDetail fetchPost={(fn) => fn} isFetching />)
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true)
})

it("renders a message when the post doesn't exist", () => {
  const wrapper = shallow(<PostDetail fetchPost={(fn) => fn} />)
  expect(wrapper.contains(<Empty />)).toEqual(true)
})
