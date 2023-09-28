import type { DefaultTheme } from 'vitepress'
export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '指引',
      link: '/guide/introduce'
    },
    {
      text: '组件',
      link: '/components/'
    }
  ]
}
