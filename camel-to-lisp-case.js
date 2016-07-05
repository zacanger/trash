const c2lc = str => (
  str.replace(/[A-Z]/g, match => (
    '-' + match.toLowerCase())).toLowerCase()
)
export default c2lc
