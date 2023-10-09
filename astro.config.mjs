import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nunogois.com',
  integrations: [
    tailwind(),
    icon({
      include: {
        'fa6-solid': [
          'at',
          'briefcase',
          'check',
          'code-fork',
          'code-merge',
          'code-pull-request',
          'comment',
          'globe',
          'lightbulb',
          'newspaper',
          'star',
          'xmark'
        ],
        'fa6-brands': ['dev', 'github', 'linkedin', 'x-twitter']
      }
    }),
    sitemap(),
    robotsTxt()
  ]
})
