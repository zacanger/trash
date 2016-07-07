// line: string to format
// indent: amount by which to indent
// limit: maxlen of line
// accum: accumulator string

const indenter = (line, indent = 2, limit = 80, accum = '') => {
  if (line.length > limit) {
    const
      reverseSlice = line.slice(0, limit).split('').reverse('')
    , firstSpace   = reverseSlice.indexOf(' ')
    , longest      = reverseSlice.slice(firstSpace + 1).reverse().join('')
    , rem          = ' '.repeat(indent) + line.slice(longest.length + 1)

    return indender(rem, indent, limit,
      accum += `${longest}\n`
    )
  }
  return accum += line
}

export default indenter
