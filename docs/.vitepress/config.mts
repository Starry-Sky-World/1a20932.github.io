import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarryFun",
  description: "星趣",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '公告', link: '/notice/index.md' }
    ],

    sidebar: {
      "/notice":[
        {text: "公告",items:[
          {text: "Index", link:'/notice/index.md'}
        ]}
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starry-Sky-World' }
    ]
  }
})
