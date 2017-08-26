const tap = require('tap')
const t = require('./index').littleLisp

const is = (input, type) =>
  Object.prototype.toString.call(input) === '[object ' + type + ']'

// takes an AST and replaces type annotated nodes with raw values
const unannotate = (input) => {
  if (is(input, 'Array')) {
    if (input[0] === undefined) {
      return []
    } else if (is(input[0], 'Array')) {
      return [unannotate(input[0])].concat(unannotate(input.slice(1)))
    } else {
      return unannotate(input[0]).concat(unannotate(input.slice(1)))
    }
  } else {
    return [input.value]
  }
}

const ip = (s) => t.interpret(t.parse(s))

tap.test('littleLisp', (a) => {
  // parser
  a.same(t.parse('a').value, 'a', 'parser should lex a single atom')
  a.same(unannotate(t.parse('()')), [], 'parser should lex an atom in a list')
  a.same(unannotate(t.parse('(hi you)')), [ 'hi', 'you' ], 'parser should lex multi atom list')
  a.same(unannotate(t.parse('((x))')), [ [ 'x' ] ], 'parser should lex list containing lists')
  a.same(unannotate(t.parse('(x (x))')), [ 'x', [ 'x' ] ], 'parser should lex list containing sub list')
  a.same(unannotate(t.parse('(x y)')), [ 'x', 'y' ], 'parser should lex list containing things')
  a.same(unannotate(t.parse('(x (y) z)')), [ 'x', [ 'y' ], 'z' ], 'more of the same with the parsing and lexing')
  a.same(unannotate(t.parse('(x (y) (a b c))')), [ 'x', [ 'y' ], [ 'a', 'b', 'c' ] ], 'parser with multi lists')

  // atoms
  a.same(unannotate(t.parse('(1 (a 2))')), [ 1, [ 'a', 2 ] ], 'atoms should parse out numbers')

  // interpeter
  a.same(ip('()'), [], 'list returns empty list')
  a.same(ip('("hey" "you")'), [ 'hey', 'you' ], 'returns list of strings')
  a.same(ip('(1 2)'), [ 1, 2 ], 'interpreter works with numbers')
  a.same(ip('("1" "2")'), [ '1', '2' ], 'interpreter doe snot parse numbers in strings')

  a.same(ip('"a"'), 'a', 'return string atom')
  a.same(ip('"a b"'), 'a b', 'return string with space atom')
  a.same(ip('"(a"'), '(a', 'return string with open paren')
  a.same(ip('")a"'), ')a', 'return string with close paren')
  a.same(ip('"(a)"'), '(a)', 'return string with parens')
  a.same(ip('1'), 1, 'return number atom')

  a.same(ip('(print 1)'), 1, 'run print on int')
  a.same(ip('(first (1 2 3))'), 1, 'return first el of list')
  a.same(ip('(rest (1 2 3))'), [ 2, 3 ], 'return rest of list')

  a.same(ip('((lambda () (rest (1 2))))'), [ 2 ], 'return correct res when invoke lambda w no params')
  a.same(ip('((lambda (x) x) 1)'), 1, 'works for id lambda with one arg')
  a.same(ip('((lambda (a b) (a b)) 1 2)'), [ 1, 2 ], 'works for id lambda with two args')
  a.same(ip('((lambda (a b) (0 a b)) 1 2)'), [ 0, 1, 2 ], 'works for lambda with list of lits and vars')
  a.same(ip('((lambda (a) (first (a))) 1)'), 1, 'returns correctly with params')

  a.same(ip('(let ((x 1) (y 2)) (x y))'), [ 1, 2 ], 'let evals inner exp w names bound')
  a.same(ip('(let ((x 1) (y x)) (x y))'), [ 1, undefined ], 'let does not expose parallel bindings')
  a.same(ip('(let () 1)'), 1, 'let accepts empty binding list')

  a.same(ip('(if 1 2 3)'), 2, 'if chooses truthy branch')
  a.same(ip('(if 0 2 3)'), 3, 'if passes falsey branch')

  a.end()
})
