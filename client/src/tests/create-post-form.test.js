import React from 'react'
import { shallow } from 'enzyme'
import CreatePostForm from '../components/create-post-form/component'

it('renders without crashing', () => {
  const form = { values: {} }

  shallow(<CreatePostForm handleSubmit={(fn) => fn} form={form} />)
})
