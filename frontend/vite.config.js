import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": 'https://epicure-dashboard.onrender.com'
      // "/api": 'https://localhost:5000'
    }
  }
})
