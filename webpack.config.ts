import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, '/'),
		},
		open: true,
	},
};
