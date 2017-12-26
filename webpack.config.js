var path = require('path');
var webpack = require('webpack');
//var debug = process.env.NODE_ENV !== "production";

var config = {
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            }
        ],
        
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};

module.exports = config