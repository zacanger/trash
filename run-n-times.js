// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left

export default function tryExecNTimes (funcToRetry, retriesLeft, onEveryError) {
  const exitCode = funcToRetry()
  if (exitCode === 0) {
    return exitCode
  } else {
    if (onEveryError) {
      onEveryError()
    }
    retriesLeft--
    echo(`Command failed, ${retriesLeft} retries left`)
    if (retriesLeft === 0) {
      return exitCode
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError)
    }
  }
}
