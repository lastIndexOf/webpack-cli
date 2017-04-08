const webpack = require('webpack')
    , webpackConfig = require('../build/webpack.dev.config.js')

const Koa = require('koa')
    , koaWebpack = require('koa-webpack')
    , devConfig = require('../config/dev.js')
    , proxyMiddleware = require('koa-proxies')

const proxyTable = devConfig.proxyTable
const compiler = webpack(webpackConfig)

let app = new Koa()
let middleware = koaWebpack({ 
  compiler, 
  dev: { noInfo: true, publicPath: '/' },
  hot: { noInfo: true }  
})


Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})
app
  .use(middleware)

app.listen(devConfig.port, () => {
  console.log(`server running at http://localhost:${ devConfig.port }`)
})
