// take arr of strs, return obj that contains number of times each str is in array.

const strs = ['one', 'one', 'two', 'one', 'four', 'three', 'three']

const countStrs = arr => arr.reduce((prev, curr) => {
  prev[curr] = ++prev[curr] || 1
  return prev
}, {})

