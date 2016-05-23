const _ = require('lodash')

module.exports = {
  openP    : '('
, closeP   : ')'
, add      : '+'
, del      : '-'
, mult     : '*'
, div      : '/'
, quot     : '\''
, coreFunc : ['prnt', 'def']
, funcMap  : {
    '+'    : 'core.add'
  , '-'    : 'core.del'
  , '*'    : 'core.mult'
  , '/'    : 'core.div'
  , 'prnt' : 'core.prnt'
  }
, isChar   : _.partial(_.contains, 'ABCDEFGHIJKLMNOPQRXTUVWXYZabcdefghijklmnopqrstuvwxyz')
, isNum    : _.partial(_.contains, '0123456789')
, isToken  : _.partial(_.contains, '()+-*/')
}

