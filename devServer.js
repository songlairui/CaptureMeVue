const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const os = require('os')
const baseConfig = require('./webpack.config.js')

const getip = function() {
  let interfaces = os.networkInterfaces()
  let result = []
  for (key in interfaces) {
    if (!/^e/.test(key)) continue
    let ip = interfaces[key].filter(v => v.family === 'IPv4').map(v => v.address)
    result.push(...ip)
  }
  return result.length ? result : ['0.0.0.0']
}
var ip = getip()[0]
let host = "http://" + ip + ":8080"

baseConfig.entry.client.unshift(`webpack-dev-server/client?${host}/`, "webpack/hot/dev-server");
baseConfig.output.publicPath = host + baseConfig.output.publicPath;

var compiler = webpack(baseConfig)
var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: host,
  public: ip,
  hot: true,
  historyApiFallback: false,
  compress: true,
  proxy: {
    // "**": "http://localhost:9090"
  },
  setup: app => {
    app.use((p, q, n) => {
      console.info(p.url)
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
  headers: {
    "X-Custom-Header": 'yes'
  },
  stats: {
    color: true
  },
})

var server1 = new WebpackDevServer(compiler, {})

server.listen(8080, function() {
  console.info('listening at ', ip)
})