import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,woff,woff2}'],
        navigateFallback: 'index.html',
        maximumFileSizeToCacheInBytes: 5000000
      },
      manifest: {
        name: 'McLaren F1 Store',
        short_name: 'McLaren Store',
        description: 'McLaren Mastercard F1 E-Commerce Store',
        start_url: '/',
        scope: '/',
        theme_color: '#ff8700',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/images/MCLAREN-FULL-LOGO.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/images/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
