const webpack = require('webpack');
const path = require('path');
const { warn } = require('console');

const src = path.resolve(__dirname, 'src');

const config = {
    mode: 'production',
    entry: src + '/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        client: {
            overlay: {
                errors: false,
                warnings: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: src,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        })
    ],
    optimization: {
        minimize: true,
    },
};

module.exports = config;