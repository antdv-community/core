import type { DefineComponent, Plugin } from 'vue'

export const _withInstall = <
  Props extends Record<string, any> = {},
  T extends Record<string, any> = {},
  C = any
>(
  comp: C,
  opt?: T
): DefineComponent<Props> & Plugin & T => {
  const Comp = comp as C & Plugin & T
  Comp.install = (app) => {
    app.component((comp as any).name, comp as any)
  }
  if (opt) {
    for (const optKey in opt) {
      // @ts-expect-error this is ok
      Comp[optKey] = opt[optKey]
    }
  }

  return Comp as DefineComponent<Props> & Plugin & T
}
