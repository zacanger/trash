export default function deepEqual (a, b) {
  if (a === b) {
    return true
  }
  if (!a || !b) {
    return false
  }
  if (Array.isArray(a)) {
    return a.every((item, i) => {
      return deepEqual(item, b[i])
    })
  }
  if (typeof a === 'object') {
    return Object.keys(a).every(key => {
      return deepEqual(a[key], b[key])
    })
  }
  return false
}
