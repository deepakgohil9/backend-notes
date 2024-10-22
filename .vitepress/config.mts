import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Backend Notes",
  description: "Collection of notes on backend development",
  srcDir: 'src',
  base: '/backend-notes/', // if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    aside: 'left',
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Best Practices',
        items: [
          { text: 'REST API Design Best Practices', link: '/best-practices/rest-api-design' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/deepakgohil9/backend-notes' }
    ],

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    editLink: {
      pattern: 'https://github.com/deepakgohil9/backend-notes/edit/main/:path'
    }
  }
})
