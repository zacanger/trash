/* eslint-env jest */

// eslint-disable-next-line node/no-unpublished-import
import faker from 'faker'

export const validUser = () => ({
  username: faker.name.firstName(),
  password: 'password',
})

export const validPost = (author: number, category: string) => ({
  title: faker.lorem.sentence(),
  url: faker.internet.url(),
  category,
  author,
  type: 'link',
})
