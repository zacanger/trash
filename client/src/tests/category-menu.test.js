import React from 'react'
import { shallow } from 'enzyme'
import CategoryMenu from '../components/category-menu/component'
import CategoryMenuCreatePostButton from '../components/category-menu/create-post-button'

it('renders without crashing', () => {
  shallow(<CategoryMenu />)
})

it('renders a create post button if user is logged in', () => {
  const wrapper = shallow(<CategoryMenu token />)
  expect(wrapper.contains(<CategoryMenuCreatePostButton />)).toEqual(true)
})

it("doesn't render a create post button if user is not logged in", () => {
  const wrapper = shallow(<CategoryMenu />)
  expect(wrapper.contains(<CategoryMenuCreatePostButton />)).toEqual(false)
})
