" https://github.com/zacanger/cozy

if has_key(g:polyglot_is_disabled, 'cozy')
  finish
endif

if exists('b:current_syntax')
  finish
endif

syn keyword cozyKeyword return fn
syn keyword cozyConditional if else then
syn keyword cozyImport import export
syn match cozyFrom  '\<from\>'
syn match cozyImport  '^\s*\zsfrom\>'
syn match cozyIdentifier /\$[[:alnum:]_]\+/
syn region cozyString start=/'/ skip=/\\'/ end=/'/
syn region cozyString start=/"/ skip=/\\"/ end=/"/ contains=cozyIdentifier
syn keyword cozyOperator '||'
syn keyword cozyOperator '&&'
syn keyword cozyOperator '<'
syn keyword cozyOperator '>'
syn keyword cozyOperator '<='
syn keyword cozyOperator '>='
syn keyword cozyOperator '=='
syn keyword cozyOperator '!='
syn keyword cozyOperator '='
syn keyword cozyOperator '+'
syn keyword cozyOperator '/'
syn keyword cozyOperator '*'
syn keyword cozyOperator '-'
syn keyword cozyOperator '*'
syn match cozyComment '#.*$' display contains=cozyTodo,@Spell
syn keyword cozyTodo  TODO contained
syn match cozyNumber '\<\d\>'

hi def link cozyTodo Todo
hi def link cozyNumber Number
hi def link cozyComment Comment
hi def link cozyOperator Operator
hi def link cozyImport Include
hi def link cozyConditional Conditional
hi def link cozyRepeat Repeat
hi def link cozyFrom Statement
hi def link cozyIdentifier Identifier
hi def link cozyString String
hi def link cozyKeyword Keyword

let b:current_syntax = 'cozy'
