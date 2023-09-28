import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueJsxProps from 'unplugin-vue-tsx-auto-props/vite'
const _dir = dirname(fileURLToPath(new URL(import.meta.url)))
const pkg = resolve(_dir, 'packages')
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue']
    }),
    vueJsx(),
    vueJsxProps()
  ],
  resolve: {
    alias: {
      '@antdv-plugins/core': resolve(pkg, 'components/src'),
      '@antdv-plugins/use': resolve(pkg, 'use/src')
    }
  }
})
