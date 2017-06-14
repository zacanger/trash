const { compose } = require('zeelib')

const IO = function (f) {
  this.__value = f
}

IO.of = function (a) {
  return new IO(() => a)
}

IO.prototype.map = function (f) {
  return new IO(compose(f, this.__value))
}
