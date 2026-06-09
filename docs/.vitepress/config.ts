import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuelid",
  description: "Vuelid is a tiny validation library for Vue based on Zod. Fully typed. Dual modes. Errors highlight. And more",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'API', link: '/api' },
          { text: 'Playground', link: '/playground' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quick Start', link: '/quick-start' },
        ]
      },
      {
        text: 'Core concepts',
        items: [
          { text: 'API', link: '/api' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Playground', link: '/playground' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexovn/vuelid' }
    ]
  }
})
