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
							presets: [ 'latest', 'react' ]
						}
					}
				]
			},
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(__dirname, 'dist/img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(__dirname, 'dist/media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.resolve(__dirname, 'dist/fonts/[name].[hash:7].[ext]')
        }
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
