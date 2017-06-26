const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          preserveWhitespace: false,
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?minimize',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function(module) {
        // a module is extracted into the vendor chunk if...
        return (
          // it's inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file (due to extract-text-webpack-plugin limitation)
          !/\.css$/.test(module.request)
        )
      },
      filename: 'vendor.js'
    }),
    new ExtractTextPlugin({
      filename: 'common.css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './popup.html',
      chunks: ['client'],
      filename: 'popup.html'
    })
  ]
}

module.exports = config