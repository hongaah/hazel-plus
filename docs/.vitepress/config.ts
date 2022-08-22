import { defineConfig } from 'vitepress'
import { applyPlugins } from '@vue-hooks-plus/md-demo-plugins'
import { genTemp } from '@vue-hooks-plus/vite-plugin-gen-temp'

const { resolve } = require('path')

export default defineConfig({
  title: 'Hazel UI',
  description: 'A custom components and hooks Library based on Vue 3',
  lang: 'zh-cn',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'favicon.ico',
      },
    ],
  ],
  // srcIncludes: ['/'],
  // srcDir: '/',
  themeConfig: {
    logo: 'favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Hooks', link: '/useRequest' },
    ],
    sidebar: {
      '/': getSidebar(),
    },
    lastUpdatedText: '最近更新',
    // @ts-ignore
    prevLink: true,
    nextLink: true,
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hongaah/hazel-ui',
      },
    ],
  },
  vite: {
    // plugins: [genTemp()],
    resolve: {
      alias: {
        'hazel-ui': resolve('./packages'),
      },
    },
  },
  markdown: {
    // config: md => {
    //   applyPlugins(md)
    // },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})

function getSidebar() {
  return [
    {
      text: '介绍',
      items: [
        {
          text: '快速安装',
          link: '/guide',
        },
      ],
    },
    {
      text: 'useRequest',
      items: [
        {
          text: '快速使用',
          link: '/useRequest',
        },
      ],
    },
  ]
}
