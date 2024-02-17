// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import PageAuthorComponent from './components/PageAuthorComponent.vue'
import BannerComponent from './components/BannerComponent.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(PageAuthorComponent),
      'layout-top': () => h(BannerComponent)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
