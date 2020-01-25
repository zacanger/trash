import React from 'react'
import styled from 'styled-components/macro'
import Form from '../shared/form/form'
import { transition } from '../shared/helpers'
import CommentFormTextArea from './text-area'
import CommentFormSubmitButton from './submit-button'

const StyledForm = styled(Form)`
  ${transition('border', 'box-shadow')};

  margin-top: -1px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0 0 2px 2px;
  max-width: none;
  padding: 0;

  @media (hover: hover) {
    :hover {
      border: 1px solid ${(props) => props.theme.accent};
    }
  }

  :focus-within {
    border: 1px solid ${(props) => props.theme.accent};
    box-shadow: 0 0 0 2px ${(props) => props.theme.accent + '4d'};
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    border-radius: 0;
    border-left: none;
    border-right: none;

    :hover,
    :focus-within {
      border-left: none;
      border-right: none;
    }
  }
`

type Props = {
  attemptCreateComment: (string) => void
  handleSubmit: (any) => void
}

class CommentForm extends React.Component<Props> {
  createComment = (comment) => this.props.attemptCreateComment(comment)

  onSubmit = () => this.props.handleSubmit(this.createComment)

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit()}>
        <CommentFormTextArea
          name="comment"
          // @ts-ignore
          onSubmit={this.onSubmit()}
        />
        <CommentFormSubmitButton />
      </StyledForm>
    )
  }
}

export default CommentForm