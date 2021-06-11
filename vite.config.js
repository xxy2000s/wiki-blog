// const path = require('path')

// module.exports = {
//   alias: {
//       '/@/': path.resolve(__dirname, './src')
//   },
//   hostname: '127.0.0.1', // 默认是 localhost
//   port: '3000', // 默认是 3000 端口
//   open: false, // 浏览器自动打开
//   https: false, // 是否开启 https
//   ssr: false, // 服务端渲染
//   base: './', // 生产环境下的公共路径
//   outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
//   proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
//   '/api': {
//     target: 'http://127.0.0.1:8082', // 后端服务实际地址
//     changeOrigin: true,
//     rewrite: path => path.replace(/^\/api/, '')
//   }
// }
// }

import { defineConfig } from 'vite'
import path from "path";  

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // "components": path.resolve(__dirname, "src/components"),
      // "styles": path.resolve(__dirname, "src/styles"),
      // "plugins": path.resolve(__dirname, "src/plugins"),
      // "views": path.resolve(__dirname, "src/views"),
      // "layouts": path.resolve(__dirname, "src/layouts"),
      // "utils": path.resolve(__dirname, "src/utils"),
      // "apis": path.resolve(__dirname, "src/apis"),
      // "dirs": path.resolve(__dirname, "src/directives"),
    },
  },
  plugins: [vue()],
  server: {
    cors: true,
    proxy: {
      // 字符串简写写法
      // '/api': 'http://localhost:8080/api',
    //   // 选项写法
      '/api': {
        target: 'http://127.0.0.1:8082/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    //   // 正则表达式写法
    //   '^/fallback/.*': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/fallback/, '')
    //   }
    }
  }
}
