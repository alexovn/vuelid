---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vuelid"
  text: "A tiny validation library for Vue based on Zod"
  tagline: Validate your forms conveniently
  image:
    src: /logo.svg
    alt: Vuelid
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: Examples
      link: /examples

features:
  -
    icon:
      src: /logos/vue.svg
      alt: Vue Logo
      width: '28px'
      height: '28px'
      wrap: true
    title: Native Vue Support
    details: Compatible with Vue 3.x
  - icon:
      src: /logos/zod.png
      alt: Zod Logo
      width: '28px'
      height: '28px'
      wrap: true
    title: Schema Support
    details: Zod validation schema support
  - icon:
      src: /logos/ts.svg
      alt: 'TypeScript logo'
      width: '28px'
      height: '28px'
      wrap: true
    title: Type Safe
    details: Full TypeScript support
  - icon: 🪶
    title: Lightweight
    details: ~8.69 kB install size
---
