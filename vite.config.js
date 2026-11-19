import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// 资源使用相对路径，配合 index.html 中动态 <base>，
// 使同一份构建产物同时兼容 GitHub Pages 项目子路径与自定义域名根路径。
export default defineConfig({
  base: './',
  plugins: [vue()],
})
