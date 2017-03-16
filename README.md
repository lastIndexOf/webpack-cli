# webpack-cli

一个简单的webpack开发脚手架

```
目录结构
    -dist 
        common.js
        --js
        --styles
    -src
        --styles
        --components
        --index.html
    -node_modules
    postcss.config.js // postcss配置文件
    webpack.config.js // webpack配置文件
    package.json
```

目前支持热加载，转化es6， react, stylus， css；并支持分离出出现两次以上的js

```
命令脚本:

    npm run dev
    // 开启热加载服务器
    // localhost:8080

    npm run build
    // 打包
```