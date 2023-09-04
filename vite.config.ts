import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
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
    DefineOptions(),
    dts({
      outputDir: './dist/types',
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: '/packages' },
      { find: '@hazel-plus', replacement: '/packages' },
      { find: 'hazel-plus', replacement: '/packages/hazel-plus/index.ts' },
    ],
  },
  build: {
    outDir:"packages/hazel-plus/dist",
    lib: {
      entry: resolve(__dirname, 'packages/hazel-plus/index.ts'),
      name: 'hazel',
      formats: ['cjs', 'es', 'umd'],
      fileName: format => {
        return `js/index.${format}.js`
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
