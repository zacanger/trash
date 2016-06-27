const isWin = () => process.platform === 'win32'

const isColour = () => {
  const termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i
  return !!process.env.COLORTERM || termColour.test(process.env.TERM)
}

export default isWin() || isColour()
