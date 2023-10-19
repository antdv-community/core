import type { App, Plugin } from 'vue'
import { Icon } from './Icon'
import IconPicker from './IconPicker'
import type { IconProps } from './Icon'
import type { IconPickerProps } from './IconPicker'

export { Icon }

IconPicker.install = (app: App) => {
  app.component(Icon.name, Icon)
  app.component(IconPicker.name, IconPicker)
  return app
}
export default IconPicker as typeof IconPicker &
  Plugin & {
    readonly Icon: typeof Icon
  }
export type { IconProps, IconPickerProps }
