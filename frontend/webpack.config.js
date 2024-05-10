var path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HWP = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	watch: true,
	entry: SRC_DIR + '/app/index.js',
	devtool: 'eval-source-map',
	output: {
		path: DIST_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		publicPath: '/',
		historyApiFallback: true,
		port: 4500,
		proxy: {
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true,
				secure: false,
				logLevel: 'debug'
			}
		}

	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'style-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
	plugins: [
		new HWP({
			template: './src/app/index.html',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
			{ from: 'src/assets', to: 'assets' },
			{ from: 'src/app/index.css', to: 'index.css' }
		]),
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
		// new CleanWebpackPlugin('dist', {}),
	]
};

module.exports = config;
