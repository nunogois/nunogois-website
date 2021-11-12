# nunogois-website

![Nuno Góis](https://github.com/nunogois/nunogois/blob/main/static/thumbnail.png?raw=true)

Personal website: [www.nunogois.com](https://www.nunogois.com).

Built with [Svelte](https://svelte.dev/) ([SvelteKit](https://kit.svelte.dev/)) and [Tailwind CSS](https://tailwindcss.com/).
Hosted in [CloudFlare Pages](https://pages.cloudflare.com/).

Old website built with Nuxt in 2018: [nunogois-website-nuxt-2018](https://github.com/nunogois/nunogois-website-nuxt-2018).

## Lighthouse scores 2021-11-12 (Blog disabled)

![Lighthouse](https://github.com/nunogois/nunogois/blob/main/lighthouse.png?raw=true)

## TODO

- [x] Add Tailwind CSS (https://github.com/svelte-add/tailwindcss)
- [x] Single index page with:
  - [x] Home
  - [x] About
  - [x] Skills (dynamically loaded from GitHub profile)
  - [x] Projects (dynamically loaded from GitHub, popular and latest)
  - [x] Blog (dynamically loaded from Medium, order by date descending)
  - [x] CV (external link to cv.nunogois.com)
  - [x] Contact
- [x] Properly handle some of the assets instead of linking to external URLs
- [x] Responsiveness check and optimizations
- [x] Cleanup
- [x] SEO optimizations
- [x] Publish to www.nunogois.com
- [ ] Announce: Twitter, LinkedIn, Instagram
- [ ] Figure out the best way of triggering builds (daily cron from CloudFlare worker, maybe)

### BONUS

- [x] Publish to new.nunogois.com while in development
- [x] Add Lottie
- [x] Make repo public
- [ ] Improve Lighthouse scores as much as possible
- [ ] Add contact form
- [ ] Add recruit page
- [ ] Improve README.md

### MAYBE?

- [ ] i18n with PT
- [ ] Add animations
