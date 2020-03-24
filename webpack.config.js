const process = require('process');
const path = require('path');

module.exports = {
    mode: process.node.env,
    entry: './bin/wwww',
    output: {
        filename: 'bundle.[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['js', 'json', 'jade'],
        alias: {
            '@': path.resolve(__dirname)
        }
    }
};
