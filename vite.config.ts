import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    dts({
      outputDir: './dist/types',
    }),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: '/packages' },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/hooks'),
      name: 'hazel',
      formats: ['cjs', 'es'],
      fileName: format => {
        return `hooks/index.${format}.js`
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
