import { defineConfig } from 'vitepress'
// import { version } from '../../package.json'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'

const { resolve } = require('path')

export default defineConfig({
  title: 'Hazel plus',
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
      { text: '文档', link: '/guide' },
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
        link: 'https://github.com/hongaah/hazel-plus',
      },
    ],
    search: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present',
    },
  },
  vite: {
    plugins: [
      process.env.NODE_ENV === 'production' ? null : genTemp(),
      DefineOptions(),
    ],
    resolve: {
      alias: {
        '/^~/': resolve(''),
        '@': resolve('/packages'),
        '@hazel-plus': resolve('./packages'),
        'hazel-plus': resolve('./packages/hazel-plus'),
      },
    },
  },
  markdown: {
    config: md => {
      if (process.env.NODE_ENV === 'production') return
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
      text: 'components',
      collapsible: true,
      items: [
        {
          text: 'DialogConfirm 确认弹框',
          link: '/components/DialogConfirm/',
        },
        {
          text: 'DropdownSelect 下拉框',
          link: '/components/DropdownSelect/',
        },
        {
          text: 'PopupBottom 底部弹框',
          link: '/components/PopupBottom/',
        },
      ],
    },
    {
      text: 'hooks',
      collapsible: true,
      items: [
        {
          text: 'useRequest',
          link: '/hooks/useRequest/',
        },
      ],
    },
  ]
}
