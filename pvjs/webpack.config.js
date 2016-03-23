var path = require('path')
var appPath = path.resolve(__dirname, 'src', 'index.js')
var buildPath = path.resolve(__dirname, 'public')

module.exports = {

  entry: appPath,

  output: {
    filename: 'app.js',
    path: buildPath,
    publicPath: 'public'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }

}
