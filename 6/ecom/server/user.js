var mongoose = require('mongoose')
  , bcrypt   = require('bcrypt')
  , cart     = require('./cart.js')

var schema = new mongoose.Schema({
	name: {type: String, required: true}
  ,	email: {type: String, required: true, unique: true, index: true}
  , password: {type: String, required: true}
  , cart: [cartSchema]
  , orders: []
})

module.exports = mongoose.model('User', schema)
