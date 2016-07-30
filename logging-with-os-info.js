// usage:
// import l from './this-file'
// console.info(l()) => ':my-computer:12345'
// console.log(l('stuff')) => 'stuff:my-computer:12345'
// import { ll } from './this-file'
// ll() => ':my-computer:12345'
// ll('stuff') => 'stuff:my-computer:12345'

const os = require('os')

const l = (str = '') => `${str}:${os.hostname()}:${process.pid}`

export const ll = (str = '') => console.log(l(str))

export default l
