const writeFn = (node, ctrl) => {
  let
    fnName  = node.children[0]
  , args    = node.children[1]
  , fnBody  = node.children[2]
  , numArgs = args.children.length

  ctrl.res += `var ${fnName.get('value')} = function(`

  _each(args.children, (argNode, idx) => {
    ctrl.res += argNode.get('value')
    if (numArgs > 1 && idx < numArgs - 1) {
      ctrl.res += ', '
    }
  })

  ctrl.rex += '){\n'

  let customCtrl = new Controller()

  interpretNode(fnBody, customCtrl)

  ctrl.res += `return ${customCtrl};`
  ctrl.res += '\n}\n'
}

