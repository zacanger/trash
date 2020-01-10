import React from 'react'
import { shallow } from 'enzyme'
import PostContent from '../components/post/content'
import PostContentTitle from '../components/post/content/title'
import PostContentPreview from '../components/post/content/preview'
import PostContentDetail from '../components/post/content/detail'
import PostContentFullText from '../components/post/content/full-text'

it('renders without crashing', () => {
  shallow(<PostContent />)
})

it("renders the post's title, content preview, and details", () => {
  const wrapper = shallow(<PostContent type="link" />)
  expect(wrapper.find(PostContentTitle).exists()).toEqual(true)
  expect(wrapper.find(PostContentPreview).exists()).toEqual(true)
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true)
})

it('renders the full text of a text post', () => {
  const text = 'example test post'
  const wrapper = shallow(<PostContent type="text" text={text} showFullPost />)
  expect(wrapper.find(PostContentFullText).exists()).toEqual(true)
  expect(
    wrapper
      .find(PostContentFullText)
      .children()
      .text()
  ).toEqual(text)
})
