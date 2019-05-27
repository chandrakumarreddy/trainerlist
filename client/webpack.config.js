const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./app/index.js",
	output: {
		path: path.resolve("dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	mode: "development",
	plugins: [
		new htmlWebpackPlugin({
			template: "./app/index.html",
			filename: "index.html",
			inject: "body"
		})
	]
};
