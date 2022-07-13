const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const env = require('./env');

const srcPath = env.srcPath;
const distPath = env.distPath;

module.exports = {
  entry: {
    script: `${srcPath}/assets/js/index.js`
  },
  output: {
    filename: '[name].bundle.js',
    path: `${distPath}/assets/js`,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [ require('autoprefixer')({ grid: true }) ]
              }
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.bundle.css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${srcPath}/assets/img/`,
          to: `${distPath}/assets/img/`
        },
        {
          from: `${srcPath}/assets/font/`,
          to: `${distPath}/assets/font/`
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@assets': `${srcPath}/assets/`
    }
  }
}
