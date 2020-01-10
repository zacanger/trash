const hasStorage = () => {
  try {
    const key = '__1lksjdf2lkjsdo8sdf98j2'
    localStorage.setItem(key, key)
    localStorage.removeItem(key)
    return true
  } catch (_) {
    return false
  }
}

const mockStorage = () => {
  const store = {}
  return {
    setItem (key, val) {
      store[key] = val
    },
    removeItem (key) {
      delete store[key]
    },
    getItem (key) {
      return store[key]
    }
  }
}

export default (() => {
  if (hasStorage()) {
    return localStorage
  } else {
    return mockStorage()
  }
})
