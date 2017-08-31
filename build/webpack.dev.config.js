const webpack = require('webpack')
		, htmlWebpackPlugin = require('html-webpack-plugin')
		, path = require('path')

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

module.exports = {
	// context: __dirname,
	entry: {
		main: ['./src/main.js', hotMiddlewareScript]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: [ 'stage-3', 'react' ],
							plugins: [ 'transform-decorators-legacy' ]
						}
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
	]
}
