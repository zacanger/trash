const { resolve } = require('path')
const p = resolve(__dirname, '..', 'imgs')

const legal = 'You may upload any files that are legal under US law. Images will be rendered correctly on the list page. Illegal or copyrighted material takedown requests can be sent to zac at zac anger dot com and will be respected with a DMCA or court order. This software is a free and open source project available under the WTFPL.' // eslint-disable-line max-len

module.exports = {
  imagePath: p,
  legal,
  name: 'imghost',
  port: 3000
}
