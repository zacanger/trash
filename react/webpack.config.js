var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: "./src/app.js",
	plugins: [
		new webpackDefinePlugin({
			"process.env": {
				BROWSER: JSON.stringify(true),
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
			}
		}),
		new ExtractTextPlugin("[name].css")
	],
	output : {
		path: __dirname + '/public/build/',
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		loaders: [
			{
				test: /\.css%/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=10000&mimietype=image/png"
			},
			{
				test: /\.jsx$/,
				loader: "react-hot!babel!eslint-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.js$/,
				loader: "babel!eslint-loader",
				exclude: [/node_modules/, /public/]
		]
	},
	eslint: {
		configFile: '.eslintr`^c'
	}
}

