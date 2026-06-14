import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const base = process.env.VITEPRESS_BASE ?? '/vuelid/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  base,
  lang: 'en-US',
  title: "Vuelid",
  description: "Vuelid is a tiny validation library for Vue based on Zod. Fully typed. Dual modes. Errors highlight. And more",
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }]
  ],
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'API', link: '/api' },
          { text: 'Examples', link: '/examples', activeMatch: '/examples' },
          { text: 'Credits', link: '/credits' }
        ]
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' },
        ],
        collapsed: false,
      },
      {
        text: 'Core concepts',
        items: [
          { text: 'API', link: '/api' },
        ],
        collapsed: false,
      },
      {
        text: 'Examples',
        link: '/examples',
        items: [
          { text: 'Simple Form', link: '/examples/simple-form' },
        ],
        collapsed: false,
      },
      {
        text: 'Credits',
        link: '/credits'
      }
    ],

    footer: {
      message: 'Released under the MIT License. Logo designed by <a href="https://openmoji.org/" target="_blank">OpenMoji</a>',
      copyright: 'Copyright © 2026-present <a href="https://github.com/alexovn" target="_blank">Nikita Aleksov (alexovn)</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexovn/vuelid' }
    ]
  },
})
