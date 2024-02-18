import { PageData, TransformPageContext } from 'vitepress'

import ObsidianSidebar from './sidebars/obsidian'

import snippetPlugin from 'markdown-it-vuepress-code-snippet-enhanced'

import { defineConfig } from 'vitepress'
import { applySEO } from './seo'
import { loadLocales, generateTranslatedSidebars } from './i18n'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vampire Studios Wiki",
  description: "A wiki for all of the mods made by Vampire Studios",

  cleanUrls: true,

  transformPageData(pageData: PageData, ctx: TransformPageContext) {
    applySEO(pageData);
  },

  lastUpdated: true,
  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
    math: true,
    config(md) {
      md.use(snippetPlugin);
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ...loadLocales(__dirname)
  },

  sitemap: {
    hostname: "https://docs.vampirestudios.net/"
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Our Mods', link: 'https://modrinth.com/organization/vampire-studios' },
      { text: 'Obsidian Documentation', link: '/obsidian' }
    ],

    outline: "deep",

    search: {
      provider: 'local'
    },

    sidebar: generateTranslatedSidebars(__dirname, {
      '/obsidian/': ObsidianSidebar
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vampire-studios/Obsidian' },
      { icon: 'discord', link: 'https://discord.gg/63hmSTxyDA' }
    ]
  }
})
