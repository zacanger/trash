const { resolve } = require('path')
const p = resolve(__dirname, '..', 'imgs')

module.exports = {
  imagePath: p,
  legal: 'legal files only please',
  name: 'imghost',
  port: 3000
}
