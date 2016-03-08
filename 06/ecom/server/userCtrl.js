schema.pre('save', function(next){
  var user = this
  if(!this.password){
    return next(new Error('Password required'))
  }
  bcrypt.genSalt(10, function(err, salt){
    if(err){
      return next(new Error(err))
    }
    console.log(user.password, salt)
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) {
        return next(new Error(err))
      }
      user.password = hash
      next()
    })
  })
})

schema.methods.checkPw = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, res){
    if(err){
      return cb(err, null)
    } else {
      return cb(null, res)
    }
  })
}

