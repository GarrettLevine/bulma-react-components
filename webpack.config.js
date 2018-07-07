const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    devServer: {
        stats: {
            chunkModules: false,
            colors: true,
            path: path.resolve(__dirname, 'public'),
        },
        contentBase: `${__dirname}/public`,
        historyApiFallback: true,
        publicPath: 'http://localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/': {
                target: 'http://localhost:3000',
            },
        },
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loaders: [ 'babel-loader', 'ts-loader' ],
                include: path.resolve('src')
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
}