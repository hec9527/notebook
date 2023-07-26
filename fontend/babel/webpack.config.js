/**
 *  使用babel转代码需要使用 preset-env 以及babel-loader
 */

/** @type {import("webpack").Configuration} */
const config = {
  mode: 'production',

  output: {
    environment: {
      module: false,
      dynamicImport: false,
      destructuring: true,
      const: true,
      forOf: false,
      arrowFunction: false,
      bigIntLiteral: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
      },
    ],
  },
};

module.exports = config;
