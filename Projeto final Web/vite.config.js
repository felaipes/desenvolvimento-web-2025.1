import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/brasilapi': {
        target: 'https://brasilapi.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/brasilapi/, ''),
      }
    }
  }
})
