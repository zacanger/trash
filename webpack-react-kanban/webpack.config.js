var path    = require('path')
  , htmlplug = require('html-webpack-plugin')
  , webpack  = require('webpack')
  , merge    = require('merge')

const TARGET = process.env.npm_lifecycle_event
const PATHS = {
    app: path.join(__dirname, 'app')
  , build: path.join(__dirname, 'build')
}
process.env.BABEL_ENV = TARGET

var common = {
    entry: PATHS.app
/*  , output: {
    path: PATHS.build
    , filename: 'bundle.js'
  }, */
, resolve: {
  extensions: ['', '.js', '.jsx']
}
,  module: {
  loaders: [
  {
    test: /\.css$/
  , loaders: ['style', 'css']
  , include: PATHS.app
  },{
    test: /\.jsx?$/
  , loaders: ['babel']
  , include: PATHS.app
  }
  ]
  },
  plugins: [new htmlplug({title: 'appy'})]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
  devtool: 'eval-source-map'
  ,  devServer: {
    historyApiFallback: true
  , hot: true
  , inline: true
  , progress: true
  , stats: 'errors-only'
  , host: process.env.HOST
  , port: process.env.PORT
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
  })
}
