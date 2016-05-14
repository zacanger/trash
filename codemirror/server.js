var webpack          = require('webpack')
  , WebpackDevServer = require('webpack-dev-server')
  , config           = require('./webpack.config')
  , port             = 4444

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
	, hot: true
	, historyApiFallback: true
}).listen(port, 'localhost', function(err, result){
  if (err) {
    console.log(err)
  }

  console.log('check ' + port)
})
