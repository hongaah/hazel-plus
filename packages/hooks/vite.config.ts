import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    DefineOptions(),
  ],
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'hazel_hooks',
      formats: ['cjs', 'es', 'umd'],
      fileName: format => {
        return `index.${format}.js`
      },
    },
  },
})
