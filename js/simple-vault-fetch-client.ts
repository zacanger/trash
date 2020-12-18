import fetch from 'node-fetch'

const {
  VAULT_TOKEN = '',
  VAULT_USER = '',
  VAULT_PASS = '',
  VAULT_URI = '',
} = process.env

type Cache = {
  [key: string]: any
}

/* Example usage:
 * First have the above environment variables set.
 *
 * import vaultClient from './this-file'
 *
 * const somePassword = await vaultClient('path/to/password')
 *
 * vaultClient('path/to/password')
 *   .then((password) => {
 *     doSomeThing(password)
 *   })
 */

const initClient = () => {
  const cache: Cache = {}
  let headers = {}

  if (VAULT_TOKEN) {
    headers = { 'x-vault-token': VAULT_TOKEN }
  } else if (VAULT_USER && VAULT_PASS) {
    const path = `${VAULT_URI}/v1/auth/userpass/login/${VAULT_USER}`
    const body = JSON.stringify({ password: VAULT_PASS })
    fetch(path, {
      method: 'POST',
      body,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ auth }) => auth.client_token)
      .then((token) => {
        headers = { 'x-vault-token': token }
      })
      .catch((err) => {
        console.error(err)
      })
  } else {
    console.error('No Vault authentication method available')
  }

  return (secretPath: string) => {
    if (cache[secretPath]) {
      return cache[secretPath]
    }

    return fetch(`${VAULT_URI}/v1/secret/${secretPath}`, {
      headers: {
        ...headers,
        accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        cache[secretPath] = data
        return data
      })
  }
}

export default initClient()
