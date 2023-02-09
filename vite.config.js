import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS(),],
  server: {
    port: 3000,
    proxy:{
      '/api': {
        target: 'http://ceshi13.dishait.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // 设置别名
  resolve:{
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  }
})

