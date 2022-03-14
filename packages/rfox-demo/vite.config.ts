import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgSprites from 'rollup-plugin-svg-sprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSprites({
      exclude: ['node_modules/**']
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('../rfox/src')
      }
    ]
  },
  base: './',
  server: {
    fs: {
      // 可以为项目根目录的上一级提供服务
      allow: ['../']
    }
  }
})
