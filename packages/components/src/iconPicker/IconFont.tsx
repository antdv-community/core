import type { FunctionalComponent } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import type { IconProps } from './Icon'

export interface IconFontProps extends IconProps{
  scriptUrl?: string
}

export const IconFont: FunctionalComponent<IconFontProps> = (props) => {
  const { name, scriptUrl = '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js' } = props  
  const IconFontComponent = createFromIconfontCN({
    scriptUrl,
  });
  return <IconFontComponent type={`icon-${name}`}></IconFontComponent>
}
