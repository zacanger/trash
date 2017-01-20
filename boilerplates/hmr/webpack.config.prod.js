const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname)
, entry: './src/index.js'
, output: {
    filename: 'bundle.js'
  , path: './public'
  }
, module: {
    loaders: [{
      test: /\.js$/
    , include: resolve(__dirname, 'src')
    , loaders: ['babel']
    }
  , {
      test: /\.css$/
    , include: resolve(__dirname, 'src')
    , loader: 'style!css'
    }
  ]}
, plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  , new webpack.optimize.UglifyJsPlugin()
  ]
, resolve: {
    extensions: ['', '.js', '.css']
  }
}
