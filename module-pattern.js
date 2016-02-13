var moduleName = function(){
  function privateFunction(){}
  function publicFunction(){
    privateFunction() // imports!
    otherModule.doSomething()
  }
  return { // exports!
    publicFunction: publicFunction
  }
}()

// <script type="text/javascript">
// moduleName.publicFunction()
// </script>

