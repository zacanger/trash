import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Button from '../shared/button'

const CreatePostButton = styled(Button)`
  border-radius: 2px 2px 0 0;
  padding: 16px;
  text-decoration: none;
  text-align: center;
`

const SidebarCreatePostButton = () => (
  <CreatePostButton as={Link} to="/createpost">
    create post
  </CreatePostButton>
)

export default SidebarCreatePostButton
