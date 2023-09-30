import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import lottie from 'astro-integration-lottie'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        'fa6-solid': ['*'],
        'fa6-brands': ['*']
      }
    }),
    lottie()
  ]
})
