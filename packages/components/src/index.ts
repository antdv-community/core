import type { Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components.ts'

export * from './components.ts'
export default {
  install(app) {
    for (const componentsKey in components) {
      const comp = (components as Record<string, any>)[componentsKey]
      if (comp.install)
        app.use(comp)
    }
  },
  version: pkg.version,
} as Plugin
