var moduleName = function(){
  function privateFunction(){}
  function publicFunction(){
    privateFunction()
    otherModule.doSomething() // imports!
  }
  return {
    publicFunction: publicFunction // exports!
  }
}()

// <script type="text/javascript">
// moduleName.publicFunction()
// </script>

