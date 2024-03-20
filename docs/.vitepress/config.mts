import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-web-docs/',
  title: "我的web文档站点",
  // description: "记录自己学习的文档站点",
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/what-is-vitepress' },
      { text: '参考', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 页面右侧大纲
    outline: {
      label: '页面导航', // 显示在大纲上的标题，默认值是"On this page"
      level: [2, 6] // 设置显示在大纲上的标题的等级[h2-h6]，默认值是2
    },
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 VitePress？', link: '/' },
          { text: '快速开始', link: '/' },
          { text: '路由', link: '/' },
          { text: '部署', link: '/' },
        ]
      },
      {
        text: '写作',
        items: [
          { text: 'Markdown扩展', link: '/' },
          { text: '资源处理', link: '/' },
          { text: '国际化', link: '/' },
        ]
      }
    ],
    /* docFooter: {
      prev: '上一页',
      next: '下一页'
    } */
  }
})
