// usage:
// isType(1, 'number', 'string')
// isType([], 'array')
// etc.

const isType = a => {
  let types = Array.prototype.slice.call(arguments, 1)

  for (let i = 0, len = types.length; i < len; i++) {
    let type = String(types[i]).toLowerCase()

    if ((type == 'null' && a === null)        ||
        (type == typeof a)                    ||
        (type == 'object' && a === Object(a)) ||
        (type == 'array' && Array.isArray && Array.isArray(a)) ||
        Object.prototype.toString.call(a).slice(8, -1).toLowerCase() == type) {
      return true
    }
  }
  return false
}

export default isType
