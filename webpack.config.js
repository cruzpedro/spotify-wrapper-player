const path = require('path');
const webpack = require('webpack');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
    mode: nodeENV,
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './main.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './example'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, './example'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    }
};