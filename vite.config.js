import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' giúp chạy được cả trên GitHub Pages (/repo/) lẫn tên miền riêng sau này
export default defineConfig({
  plugins: [react()],
  base: './',
})
