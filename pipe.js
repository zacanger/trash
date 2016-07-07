// credit: texas toland
const pipe = (x, ...fs) => fs.reduce((y, f) => f(y), x)

// more verbosely
const pipe = (initialValue, ...fns) =>
  fns.reduce((state, fn) => fn(state), initialValue)
