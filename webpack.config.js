var webpack = require('webpack');
var path = require('path');
var version = require('./package.json')['version'];

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.tsx'),
        vendors: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'jquery'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/js/')
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(t|j)sx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                include: [path.resolve(__dirname, './src')],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            $src: path.resolve(__dirname, './src')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        })
    ],
    devtool: 'source-map'
};
