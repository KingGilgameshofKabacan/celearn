import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'manifest.json',
          'icons/celearn-apple-touch-icon-v2.png',
          'icons/celearn-icon-192-v2.png',
          'icons/celearn-icon-192-maskable-v2.png',
          'icons/celearn-icon-512-v2.png',
          'icons/celearn-icon-512-maskable-v2.png',
          'assets/aistudio/1794750470931_ee9565f2.jpg',
          'assets/aistudio/120_CELE_Motivational_Quotes_8ac569fa.txt'
        ],
        manifest: {
          id: '/',
          name: 'CELEARN — Civil Engineering Board Exam Reviewer',
          short_name: 'CELEARN',
          description: 'Comprehensive Civil Engineering Licensure Exam reviewer with 3D flashcards, formula KaTeX equations, and offline mock assessments.',
          start_url: '/',
          scope: '/',
          display: 'standalone',
          orientation: 'any',
          theme_color: '#080E1E',
          background_color: '#121F39',
          icons: [
            {
              src: '/icons/celearn-icon-192-v2.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/icons/celearn-icon-192-maskable-v2.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: '/icons/celearn-icon-512-v2.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/icons/celearn-icon-512-maskable-v2.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        },
        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ['**/*.{js,css,html,ico,png,webp,jpg,svg,txt,woff,woff2,mjs}'],
          maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6MB to cache bundled libraries & questions
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-stylesheets',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'cdn-assets',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24 * 90 // 90 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        },
        devOptions: {
          enabled: false,
          type: 'module'
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
