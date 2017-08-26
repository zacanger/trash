const library = {
  first: (x) => x[0],
  rest: (x) => x.slice(1),
  print: (x) => {
    console.log(x)
    return x
  }
}

const Context = function (scope, parent) {
  this.scope = scope
  this.parent = parent

  this.get = function (identifier) {
    if (identifier in this.scope) {
      return this.scope[identifier]
    } else if (this.parent !== undefined) {
      return this.parent.get(identifier)
    }
  }
}

const special = {
  let: (input, context) => {
    const letContext = input[1].reduce((acc, x) => {
      acc.scope[x[0].value] = interpret(x[1], context)
      return acc
    }, new Context({}, context))

    return interpret(input[2], letContext)
  },

  lambda: (input, context) =>
    (...args) => {
      const lambdaArguments = args
      const lambdaScope = input[1].reduce((acc, x, i) => {
        acc[x.value] = lambdaArguments[i]
        return acc
      }, {})

      return interpret(input[2], new Context(lambdaScope, context))
    },

  if: (input, context) =>
    interpret(input[1], context)
      ? interpret(input[2], context)
      : interpret(input[3], context)

}

const interpretList = (input, context) => {
  if (input.length > 0 && input[0].value in special) {
    return special[input[0].value](input, context)
  } else {
    const list = input.map((x) => interpret(x, context))
    if (list[0] instanceof Function) {
      return list[0].apply(undefined, list.slice(1))
    } else {
      return list
    }
  }
}

const interpret = function (input, context) {
  if (context === undefined) {
    return interpret(input, new Context(library))
  } else if (Array.isArray(input)) {
    return interpretList(input, context)
  } else if (input.type === 'identifier') {
    return context.get(input.value)
  } else if (input.type === 'number' || input.type === 'string') {
    return input.value
  }
}

const categorize = (input) => {
  if (!isNaN(parseFloat(input))) {
    return { type: 'number', value: parseFloat(input) }
  } else if (input[0] === '"' && input.slice(-1) === '"') {
    return { type: 'string', value: input.slice(1, -1) }
  } else {
    return { type: 'identifier', value: input }
  }
}

const parenthesize = (input, list) => {
  if (list === undefined) {
    return parenthesize(input, [])
  } else {
    const token = input.shift()
    if (token === undefined) {
      return list.pop()
    } else if (token === '(') {
      list.push(parenthesize(input, []))
      return parenthesize(input, list)
    } else if (token === ')') {
      return list
    } else {
      return parenthesize(input, list.concat(categorize(token)))
    }
  }
}

const tokenize = (input) =>
  input.split('"')
    .map((x, i) => {
      if (i % 2 === 0) { // not in string
        return x.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ')
      } else { // in string
        return x.replace(/ /g, '!whitespace!')
      }
    })
    .join('"')
    .trim()
    .split(/\s+/)
    .map((x) =>
      x.replace(/!whitespace!/g, ' '))

const parse = (input) =>
  parenthesize(tokenize(input))

exports.littleLisp = {
  parse,
  interpret
}
