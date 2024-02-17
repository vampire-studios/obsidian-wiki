import { PageData, TransformPageContext } from 'vitepress'

import ObsidianSidebar from './sidebars/obsidian'
import BedrockSidebar from "./sidebars/bedrock"

import snippetPlugin from 'markdown-it-vuepress-code-snippet-enhanced'

import { defineConfig } from 'vitepress'
import { applySEO } from './seo'
import { loadLocales, generateTranslatedSidebars } from './i18n'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Obsidian Wiki",
  description: "A wiki for the Obsidian mod",
  cleanUrls: true,
  transformPageData(pageData: PageData, ctx: TransformPageContext) {
    applySEO(pageData);
  },
  lastUpdated: true,
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
    hostname: "https://docs.fabricmc.net/"
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: 'https://modrinth.com/project/obsidian' },
      { text: 'Obsidian Format', link: '/obsidian' },
      { text: 'Bedrock Format', link: '/bedrock' }
    ],
    outline: "deep",
    search: {
      provider: 'local'
    },
    sidebar: generateTranslatedSidebars(__dirname, {
      '/obsidian/': ObsidianSidebar,
      '/bedrock/': BedrockSidebar,
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vampire-studios/Obsidian' },
      { icon: 'discord', link: 'https://discord.gg/63hmSTxyDA' }
    ]
  }
})
