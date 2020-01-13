const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9090/api'
    : `https://${window.location.hostname}/api`

const methods = {
  get: async (endpoint, token = null) => {
    const options = {
      method: 'GET',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    }

    const response = await fetch(`${baseUrl}/${endpoint}`, options)
    const json = await response.json()

    if (!response.ok) {
      throw Error(json.message)
    }

    return json
  },

  post: async (endpoint, body, token = null) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    }

    const response = await fetch(`${baseUrl}/${endpoint}`, options)
    const json = await response.json()

    if (!response.ok) {
      if (response.status === 422) {
        json.errors.forEach((error) => {
          throw Error(`${error.param} ${error.msg}`)
        })
      }

      throw Error(json.message)
    }

    return json
  },

  delete: async (endpoint, token = null) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    }

    const response = await fetch(`${baseUrl}/${endpoint}`, options)
    const json = await response.json()

    if (!response.ok) {
      if (response.status === 401) {
        throw Error('unauthorized')
      }
      throw Error(json.message)
    }

    return json
  },
}

export const login = async (username, password) => {
  const json = await methods.post('login', { username, password })
  return json.token
}

export const signup = async (username, password) => {
  const json = await methods.post('register', { username, password })
  return json.token
}

export const getPosts = (category) => methods.get(`posts/${category}`)

export const getProfile = (username) => methods.get(`user/${username}`)

export const getPost = (id) => methods.get(`post/${id}`))

export const createPost = (body, token) =>
  await methods.post('posts', body, token)

export const deletePost = (id, token) => methods.delete(`post/${id}`, token)

export const createComment = (post, comment, token) =>
  methods.post(`post/${post}`, comment, token)

export const deleteComment = (post, comment, token) =>
  methods.delete(`post/${post}/${comment}`, token)

export const castVote = async (id, vote, token) => {
  const voteTypes = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote',
  }

  const voteType = voteTypes[vote]

  return await methods.get(`post/${id}/${voteType}`, token)
}
