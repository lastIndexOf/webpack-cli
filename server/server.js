const webpack = require('webpack')
    , webpackConfig = require('../build/webpack.dev.config.js')

const Koa = require('koa')
    , koaWebpack = require('koa-webpack')
    , devConfig = require('../config/dev.js')

const compiler = webpack(webpackConfig)

let app = new Koa()
let middleware = koaWebpack({ 
  compiler, 
  dev: { noInfo: true, publicPath: '/' },
  hot: { noInfo: true, reload: true }  
})

app
  .use(middleware)

app.listen(devConfig.port, () => {
  console.log(`server running at http://localhost:${ devConfig.port }`)
})
