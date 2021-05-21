// import vue from '@vitejs/plugin-vue'
// export default {
//   plugins: [vue()],
//   server: {
//     cors: true,
//     proxy: {
//       // 字符串简写写法
//       // '/api': 'http://localhost:8080/api',
//     //   // 选项写法
//       '/api': {
//         target: 'http://127.0.0.1:8080/',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       },
//     //   // 正则表达式写法
//     //   '^/fallback/.*': {
//     //     target: 'http://jsonplaceholder.typicode.com',
//     //     changeOrigin: true,
//     //     rewrite: (path) => path.replace(/^\/fallback/, '')
//     //   }
//     }
//   }
// }