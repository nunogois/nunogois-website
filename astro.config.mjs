import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nunogois.com',
  integrations: [tailwind(), icon({
    include: {
      'fa6-solid': ['*'],
      'fa6-brands': ['*']
    }
  }), sitemap(), robotsTxt()]
});