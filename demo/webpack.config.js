var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/app.scss',
  output: {
    filename: './build/app.styles.js'
  },
  resolve: {
    extensions: ['', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./build/app.css")
  ]
};
