// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import type { Theme as ThemeType } from 'vitepress'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ...
    if (!import.meta.env.SSR) {
      app.component('Demo', AntdTheme)
    }
  }
} as ThemeType
