
module.exports = {
  port: 8000,
  proxyTable: {
  	'/yora': {
  		target: 'http://localhost',
  		pathRewrite: {
  			'^/src': '/yora/src'
  		},
  		changeOrigin: true,
  		headers: {}
  	}
  }
}
