// gh:artificerentertainment
// const nco = require('./nco')
// const foo = (one, two) => {
// one = nco(one, 'default')
// two = nco(two, 'other')
// }

export default const nco = (variable, defaultValue) => (variable === null || typeof variable === 'undefined') ? defaultValue : variable

