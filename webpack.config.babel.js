const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';

const green = '\u001b[32m';
const reset = '\u001b[0m';

console.log(`[DEV] ==> ${green}${DEV}${reset}`);

const config = {
  entry: {
    app: DEV ? [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      './src/main.js',
    ] : [
      'babel-polyfill',
      './src/main.js',
    ],
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        use: ['babel-loader'],
      },
      {
        test: /\.jpg$|\.png$|\.gif$/,
        use: ['file-loader?name=dist/[path][name].[ext]'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: DEV ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ] : [
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: DEV ? 'inline-source-map' : '',
};

module.exports = config;
