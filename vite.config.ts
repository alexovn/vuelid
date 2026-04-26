import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'unplugin-dts/vite'

// https://vite.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      bundleTypes: true,
      insertTypesEntry: true,
      entryRoot: './lib',
      tsconfigPath: './tsconfig.lib.json',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'lib/main.ts'),
      name: 'vuelid',
      fileName: 'vuelid',
    },
    rolldownOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})
