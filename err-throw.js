// make console.error actually throw instead of just logging
console.error = err => {
  throw new Error(err)
}
