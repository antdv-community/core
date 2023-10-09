import mist from '@mistjs/eslint-config'

export default mist({
  markdown: true,
  vue: false,
  vueJsx: true,
  ignores: [
    'packages/components/es',
    'packages/components/lib',
    'dist',
  ],
})
