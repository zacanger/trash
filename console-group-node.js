// from the redux-saga examples (slightly modified)

// Poor man's `console.group` and `console.groupEnd` for Node.
// Can be overridden by the `console-group` polyfill.
// The poor man's groups look nice, too, so whether to use
// the polyfilled methods or the hand-made ones can be made a preference.

const GROUP_SHIFT = '   '
const GROUP_ARROW = '▼'
let groupPrefix = ''

export const consoleGroup = (...args) => {
  if (console.group) {
    console.log(...args)
  } else {
    console.log('')
    console.log(groupPrefix + GROUP_ARROW, ...args)
    groupPrefix += GROUP_SHIFT
  }
}

export const consoleGroupEnd = () => {
  if (console.groupEnd) {
    console.groupEnd()
  } else {
    groupPrefix = groupPrefix.substr(0, groupPrefix.length - GROUP_SHIFT.length)
  }
}
