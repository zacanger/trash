var path    = require('path')
  , webpack = require('webpack')

module.exports = {
  watch: true
, devtool: 'cheap-module-eval-source-map'
, entry: [ './index' ]
, output : {
    path    : './build'
  , filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/
    , loaders: ['babel']
    , exclude: /node_modules/
    }]
  }
}

