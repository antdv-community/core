import type { FunctionalComponent } from 'vue'
import * as icons from '@ant-design/icons-vue'

export interface IconProps {
  name: string
  color?: string
  size?: string
  spin?: boolean
  prefix?: string
}

export const Icon: FunctionalComponent<IconProps> = (props) => {
  const toCamelCase = (str: string) => {
    const words: string[] = str.split('-')
    const camelCaseWords = words.map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return camelCaseWords.join('')
  }
  const { name } = props
  const iconName = toCamelCase(name)
  const icon = icons[`${iconName}`]
  return <icon></icon>
}
