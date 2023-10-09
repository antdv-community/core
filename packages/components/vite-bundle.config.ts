import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueJsxProps from 'unplugin-vue-tsx-auto-props/vite'

export default defineConfig({
  plugins: [vue(), vueJsx(), vueJsxProps()],
  build: {
    rollupOptions: {
      external: ['ant-design-vue', 'vue', '@ant-design/icons-vue'],
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'es', 'cjs'],
    },
  },
})
