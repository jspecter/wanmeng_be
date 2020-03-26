const path = require('path');

module.exports = {
    mode: 'development',
    entry: '@/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'public'),
                    path.resolve(__dirname, 'dist')
                ],
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
