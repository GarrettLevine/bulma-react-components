
const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = {
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            // { 
            //     test: /\.(jsx?|js|ts)$/,
            //     loaders: 'babel-loader!ts-loader',
            //     exclude: /node_moduels/,
            //     include: path.resolve('src')
            // },
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
            { test: /\.tsx$/, loader: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new TSDocgenPlugin(),
    ],
}