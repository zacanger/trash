import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import CommentDetailTimestamp from '../components/comment/detail/timestamp'

it('renders without crashing', () => {
  shallow(<CommentDetailTimestamp />)
})

it('renders a relative timestamp', () => {
  const timestamp = '2018-11-05T05:02:38.544Z'
  const wrapper = shallow(<CommentDetailTimestamp created={timestamp} />)
  expect(wrapper.text()).toEqual(moment(timestamp).fromNow())
})
