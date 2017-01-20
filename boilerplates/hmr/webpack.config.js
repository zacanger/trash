const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-eval-source-map'
, context: resolve(__dirname)
, debug: true
, entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080'
  , 'webpack/hot/only-dev-server'
  , './src/index.js'
  ]
, output: {
    filename: 'bundle.js'
  , path: './public'
  , publicPath: 'http://127.0.0.1:8080/'
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
, devServer: {
    contentBase: './public'
  , historyApiFallback: true
  , hot: true
  , stats: {
      colors: true
    }
  }
, plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
, resolve: {
    extensions : ['', '.js', '.css']
  }
}
