import type { DefaultTheme } from 'vitepress'

export const getSideBar = (): DefaultTheme.Sidebar => {
  return {
    components: [
      {
        text: '介绍',
        link: '/components/introduce'
      },
      {
        text: '按钮',
        link: '/components/button/'
      },
      {
        text: '图标选择器',
        link: '/components/iconPicker/'
      }
    ]
  }
}
