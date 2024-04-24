import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Docs",
  description: "LiuQinyu's all project docs",
  rewrites: {
    'source/:page': 'destination/:page'
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/#' }
    ],

    sidebar: [
      {
        text: '项目',
        items: [
          { text:'主页' , link: '/project/'},
          { text: 'SMSboom-HXCZ', link: '/project/smsboom-hxcz' }
        ]
      },
      {
        text: 'LLQQNT',
        items: [
          { text: '主页', link: '/LLQQNT/' },
          { text: '插件列表', link: '/LLQQNT/plugin' }
        ]
      },
    ],

    socialLinks: [
       { icon: 'github', link: 'https://github.com/1a20932' }
    ]
  }
})
