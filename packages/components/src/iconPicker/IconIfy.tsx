import type { CSSProperties, FunctionalComponent } from 'vue'
import { Icon } from '@iconify/vue'
import type { IconProps } from './Icon'

export interface IconIfyProps extends IconProps{
  icon?: string
}

export const IconIfy: FunctionalComponent<IconIfyProps> = (props) => {
  const style: CSSProperties = {
    display: 'inline-block',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  }
  return (
    <span style={style}>
      <Icon icon={props.name} />
    </span>
  )
}
