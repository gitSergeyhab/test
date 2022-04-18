const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

const Mode = {
    Development: 'development',
    Production: 'production',
}

const mode = process.env.NODE_ENV === Mode.Development ? Mode.Development : Mode.Production;
const styleLoader = mode === Mode.Development ? 'style-loader' : MiniCssExtractPlugin.loader;

console.log('mode', mode)

module.exports = {
    mode,
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].[hash].js",
        clean: true,
	},
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
			{
				test: /\.scss$/i,
				use: [styleLoader, "css-loader", "sass-loader"],
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
		new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}