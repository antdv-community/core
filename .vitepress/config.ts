import { defineConfig } from 'vitepress'

import { getNav } from './configs/nav'
import { getRewrites } from './configs/rewrites'
import { getSideBar } from './configs/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Antdv Plugins Core',
  description: 'A Antdv Plugin Extra',
  themeConfig: {
    nav: getNav(),
    sidebar: getSideBar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/antdv-plugins/core' }
    ]
  },
  rewrites: getRewrites(),
  ignoreDeadLinks: false
})
