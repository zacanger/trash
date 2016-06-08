// cred : texas toland

// {key, ...clone} = source
export const cloneWithout = (source, ...keys) => exports.copyWithout({}, source, ...keys)

// {key, ...copy} = {...target, ...source}
export const copyWithout = (target, source, ...keys) => {
  const copy = Object.assign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

