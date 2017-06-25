const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
  devtool: '#source-map',
  entry: {
    main: './src/main.js',
    client: './src/entry-client.js',
  },
  output: {
    path: path.resolve(__dirname, 'extension', 'dist'),
    // path: path.resolve('/tmp', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        "presets": [
          ["env", { "modules": false }]
        ],
        "plugins": [
          "syntax-dynamic-import"
        ]
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function(module) {
        // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      filename: 'vendor.js'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './popup.html',
      chunks: ['client', 'main'],
      filename: 'popup.html'
    })
  ]
}

module.exports = config