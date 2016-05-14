var path    = require('path')
  , webpack = require('webpack')

module.exports = {
  watch: true
, devtool: 'cheap-module-eval-source-map'
, entry: [ './index' ]
, output : {
    path.join(__dirname, 'build')
  , filename: 'index.js'
  },
  plugins: [
    new webpack.optimizeOccurenceOrderPlugin()
  , new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/
    , loaders: ['babel']
    , exclude: /node_modules/
    , include: __dirname
    }]
  }
}
