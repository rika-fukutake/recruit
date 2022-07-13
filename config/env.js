const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}.local`)
});

const rootPath = process.env.ROOT_PATH;

module.exports = {
  rootPath: rootPath,
  srcPath: path.resolve(__dirname, '../src'),
  distPath: path.resolve(__dirname, '../dist')
}
