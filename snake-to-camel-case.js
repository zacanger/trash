const s2cc = str => (
  str.replace (/(\_\w)/g, match => (
    match[1].toUpperCase())
  )
)
export default s2cc
