import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // 代理
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://yourBaseUrl',
        changeOrigin: true,
        cookieDomainRewrite: '',
        secure: false,
      },
    },
  },
})
