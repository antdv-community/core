import type { Plugin } from 'vue'

export const _withInstall = <T = Record<string, any>, C = any>(
  comp: C,
  opt: T = {}
): C & Plugin & T => {
  const Comp = comp as C & Plugin & T
  Comp.install = (app) => {
    app.component((comp as any).name, comp as any)
  }
  for (const optKey in opt) {
    // @ts-expect-error this is a hack
    Comp[optKey] = opt[optKey]
  }
  return Comp as C & Plugin & T
}
