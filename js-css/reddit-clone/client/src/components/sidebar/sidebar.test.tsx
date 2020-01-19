/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import Sidebar from './component'
import SidebarCategoryList from './category-list'
import SidebarCreatePostButton from './create-post-button'

it('renders without crashing', () => {
  shallow(<Sidebar />)
})

it('renders a list of categories', () => {
  const wrapper = shallow(<Sidebar />)
  expect(wrapper.contains(<SidebarCategoryList />)).toEqual(true)
})

it('renders a create post button if user is logged in', () => {
  const wrapper = shallow(<Sidebar token />)
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(true)
})

it("doesn't render a create post button if user is not logged in", () => {
  const wrapper = shallow(<Sidebar />)
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(false)
})
