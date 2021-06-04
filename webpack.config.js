const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                exclude: "/node_modules/",
                test: /\.js$|jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // Note that postcss loader must come before sass-loader
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,

        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    mode: "development",
}