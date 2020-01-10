import React from 'react'
import { shallow } from 'enzyme'
import CreatePostForm from './component'

it('renders without crashing', () => {
  const form = { values: {} }

  shallow(<CreatePostForm handleSubmit={(fn) => fn} form={form} />)
})
