import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    // CSS minification (Vite defaults to esbuild which handles CSS too)
    cssMinify: true,

    // Generate sourcemaps for production debugging (optional — set to false to save KB)
    sourcemap: false,

    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // Vue core in its own chunk (cache-friendly — rarely changes)
          'vue-vendor': ['vue', 'vue-router'],
        },
      },
    },

    // Chunk size warning limit (Raise from default 500KB for a business app)
    chunkSizeWarningLimit: 600,
  },
})
