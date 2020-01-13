import React from 'react'
import { Field } from 'redux-form'
import categories from '../../categories'
import Form from '../shared/form/form'
import renderField from '../shared/form/render-field'
import SubmitButton from '../shared/form/submit-button'

const postTypes = [
  {
    label: 'link',
    value: 'link',
  },
  {
    label: 'text',
    value: 'text',
  },
]

type Post = {
  category: string
  id: number
}

type Props = {
  token: string
  history: {
    push: (string) => void
  }
  post: Post
  attemptCreatePost: (Post) => void
  isFetching: boolean
  handleSubmit: (any) => void
}

class CreatePostForm extends React.Component<Props> {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props
    if (!token) {
      history.push('/')
    }
    if (post) {
      history.push(`/a/${post.category}/${post.id}`)
    }
  }

  onSubmit = (post) => this.props.attemptCreatePost(post)

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name="type"
          label="type"
          type="radiogroup"
          component={renderField}
          options={postTypes}
        />
        <Field
          name="category"
          label="category"
          type="select"
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name="title" label="title" type="text" component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name="url" label="url" type="url" component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <Field
            name="text"
            label="text"
            type="textarea"
            component={renderField}
          />
        )}
        <SubmitButton type="submit">create post</SubmitButton>
      </Form>
    )
  }
}

export default CreatePostForm
