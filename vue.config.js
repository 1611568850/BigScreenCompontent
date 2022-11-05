const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://47.92.199.181:7788',
        changeOrigin:true,
      }
    }
  }
})
