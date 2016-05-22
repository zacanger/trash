const tokenizer = txt => {
  let res = []
  const tokenStream = new TokenStream(txt)

  while (!tokenStream.isDn()) {
    let token = tokenStream.curr()

    if (constants.isToken(token)) {
      res.push({type : 'operator', token : token})
    } else if (constants.isChar(token)) {
      while (constants.isChar(tokenStream.next())) {
        tokenStream.advance()
        token += tokenStream.curr()
      }
      res.push({type : 'keyword', token : token})
    } else if (constants.isNum(token)) {
      while (constants.isNum(tokenStream.next())) {
        tokenStream.advance()
        token += tokenStream.curr()
      }
      res.push({type : 'number', token : token})
    } else if (token === constants.quote) {
      while (constants.isChar(constants.next())) {
        tokenStream.advance()
        token += tokenStream.curr()
      }
      tokenStream.advance()
      token += tokenStream.curr()
      res.push({type : 'string', token : token})
    }
    tokenStream.advance()
  }
  return res
}

