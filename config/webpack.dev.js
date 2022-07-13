const { merge } = require('webpack-merge');
const WebpackCommon = require('./webpack.common');
const env = require('./env');

const distPath = env.distPath;

module.exports = merge(WebpackCommon, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: distPath
    },
    open: true,
    watchFiles: ['../src/**/*'],
    devMiddleware: {
      writeToDisk: true
    }
  }
})
