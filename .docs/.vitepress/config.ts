import { defineConfig } from 'vitepress'
// import { version } from '../../package.json'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'

const { resolve } = require('path')

export default defineConfig({
  title: 'Hazel UI',
  description: 'A custom components and hooks Library based on Vue 3',
  lang: 'zh-CN',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
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

    // @ts-ignore
    lastUpdated: true,
    lastUpdatedText: '最近更新',
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
    search: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present',
    },
  },
  vite: {
    plugins: [genTemp()],
    resolve: {
      alias: {
        'hazel-ui': resolve('./packages'),
      },
    },
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      applyPlugins(md)
    },
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
      collapsible: true,
      items: [
        {
          text: '快速安装',
          link: '/guide',
        },
      ],
    },
    {
      text: 'useRequest',
      collapsible: true,
      items: [
        {
          text: '快速使用',
          link: '/useRequest',
        },
      ],
    },
  ]
}
