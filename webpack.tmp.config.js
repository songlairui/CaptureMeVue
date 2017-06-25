const path = require('path')
  // const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config')
const merge = require('webpack-merge')

const config = {
  output: {
    // path: path.resolve(__dirname, 'extension', 'dist'),
    path: path.resolve('/tmp', 'extension', 'dist'),
    filename: '[name].[hash].js'
  }
}

module.exports = merge(baseConfig, config)