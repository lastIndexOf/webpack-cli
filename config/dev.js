
module.exports = {
  port: 8080,
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