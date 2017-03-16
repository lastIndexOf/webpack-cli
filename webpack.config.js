const webpack = require('webpack')
		, path = require('path')

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: 'app.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js',
		publicPath: '/assets/'
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'stage-3', 'react'],
						plugins: ['transform-runtime']
					}
				}],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							module: true
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							module: true
						}
					},
					'postcss-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js',
			minChunks: 2
		})
	],
	devServer: {
		contentBase: __dirname + '/src'
	}
}