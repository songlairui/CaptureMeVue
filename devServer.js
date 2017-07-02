const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const baseConfig = require('./webpack.config.js')

var compiler = webpack(baseConfig)

var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'dist'),
  hot: true,
  historyApiFallback: false,
  compress: true,
  proxy: {
    // "**": "http://localhost:9090"
  },
  setup: app => {
    app.use((p, q, n) => {
      console.info(p, q)
      n()
    })
  },
  staticOptions: {
    redirect: false
  },
  clientLogLevel: "info",
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: '/assets/',
  headers: {
    "X-Custom-Header": 'yes'
  },
  stats: {
    color: true
  }
})

server.listen(8080, function() {
  console.info('listening')
})