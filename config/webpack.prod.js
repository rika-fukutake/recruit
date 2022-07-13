const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackCommon = require('./webpack.common');

module.exports = merge(WebpackCommon, {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ],
  },
})
