var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {},
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
        publicPath: '../'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader?name=_assets/[hash].[ext]"
            }
        ]
    },
    plugins: []
}