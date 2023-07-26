const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import("webpack").Configuration} */
const config = {
  mode: 'development',

  entry: './index.tsx',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ['babel-loader'],
      },
    ],
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      title: 'mobx测试',
      template: './index.html',
    }),
  ],
};

module.exports = config;
