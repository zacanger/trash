window.console2 = (() => {
  let
    globals = []
  , iframe = document.createElement('iframe')
  , cleanWindow

  iframe.src = 'about:blank'
  iframe.style.display = ‘none’
  document.body.appendChild(iframe)

  return (iframe.contentWindow || iframe.contentDocument).console
}())
Object.defineProperty(window, 'console', {
  get () {return window.console2}
})

// or
const disableConsole = (() => {
  try {
    let consoleTwo = console
    Object.defineProperty(window, 'console', {
      get () {
        if (consoleTwo._commandLineAPI)
          throw 'this console is disabled!'
        return consoleTwo
      }
    , set (val) {
        consoleTwo = val
      }
    })
  } catch (ignore) {
  }
})()

