const c2sc = str => (
  str.replace(/[A-Z]/g, match => (
    '_' + match.toLowerCase())).toLowerCase()
)
export default c2sc
