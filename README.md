# webpack-cli

一个简单的webpack开发脚手架

```
目录结构
    -dist 
        --js
        --styles
    -src
        --styles
        --components
        --index.html
        --main.js
    -node_modules
    postcss.config.js // postcss配置文件
    webpack.config.js // webpack配置文件
    package.json
```

支持koa服务器热重载

```
命令脚本:

    npm start
    // 开启热加载服务器
    // localhost:8080

    npm run build
    // 打包
```