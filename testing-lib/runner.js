let
  ran     = 0
, pending = 0

function assertionError(){}

assertionError.prototype.toString = () => 'assertion error'

module.exports = {

  assert(expression){
     if (!expression){
      throw new assertionError
    } else {
      return true
    }
  }

, describe(name, callable){
    console.log(name)
    callable()
  }

, it(name, callable){
    console.log(` - ${name}`)
    callable()
    ran = ran + 1
  }

, xit(name, callable){
    console.log(`  (PENDING) ${name}`)
    pending = pending + 1
  }

, before(callable){callable()}

, after(callable){callable()}

, assert_raises(callable){
    let error = false
    try {
      callable()
    } catch(err){
      error = true
    }
    this.assert(error)
  }

, summary(){
    console.log(`\nran ${ran} specs (${pending} pending)`)
  }

}

