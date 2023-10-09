import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  external: ['vue', '@vueuse/core'],
  entry: ['src/**/*.ts'],
  shims: true,
  splitting: true,
  dts: true,
})
