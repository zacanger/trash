var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  , products: [{
      item: productSchema
    , quantity: {type: Number, required: true, min 1}
    }],
    ordered: {type: Date, default: new Date()}
})

module.exports = mongoose.model('orders', schema)