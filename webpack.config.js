var webpack = require('webpack');
const path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
var APP_DIR = path.resolve(__dirname, 'src/frontend/app');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js'
  },
  devtool: 'source-map', 
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include : APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loaders: ['jsx-loader', 'babel-loader']
      },
      {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
