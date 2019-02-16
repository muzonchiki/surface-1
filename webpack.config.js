// Webpack v4
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader,  'css-loader', 'postcss-loader', 'sass-loader']   
            },
            {
                test:/\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].ext'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        //new ExtractTextPlugin({
        //    filename: 'style.css'
        //}),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};  