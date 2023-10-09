import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueJsxProps from 'unplugin-vue-tsx-auto-props/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueJsxProps(),
    dts({
      entryRoot: 'src',
      outDir: ['es', 'lib'],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['ant-design-vue', 'vue', '@ant-design/icons-vue'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'esm',
          entryFileNames: '[name].js',
          dir: 'es',
        },
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'lib',
          exports: 'named',
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
    },
  },
})
