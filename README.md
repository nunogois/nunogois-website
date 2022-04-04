# nunogois-website

<p align="center">
  <img src="https://github.com/nunogois/nunogois-website/blob/main/static/thumbnail.png?raw=true" alt="Nuno Góis"/>
</p>

Personal website: [www.nunogois.com](https://www.nunogois.com).

Built with [SvelteKit](https://kit.svelte.dev//) ([Svelte](https://svelte.dev/)) and [Tailwind CSS](https://tailwindcss.com/).

Hosted in [Cloudflare Pages](https://pages.cloudflare.com/).

## Lighthouse scores 2021-11-12 (Blog disabled)

<p align="center">
  <img src="https://github.com/nunogois/nunogois-website/blob/main/lighthouse.png?raw=true" alt="Lighthouse scores"/>
</p>

## Development

I wasn't very satisfied with my website lately. It was lacking in content, performance and SEO.

[SvelteKit](https://kit.svelte.dev//) ([Svelte](https://svelte.dev/)) and [Tailwind CSS](https://tailwindcss.com/) were things I wanted to try out for a while now, so it made perfect sense to use them to build my new website.

### SvelteKit

[SvelteKit](https://kit.svelte.dev//) and [Svelte](https://svelte.dev/) make so much sense to me in this modern era of front-end that I can't imagine building websites like this one with anything else right now. That's how much I enjoyed them.

For (sort-of static) websites like this, having everything happen at build time and then saving all that time for the end-user once deployed is the perfect choice. SvelteKit [endpoints](https://kit.svelte.dev/docs#routing-endpoints) are a stroke of genius. It also includes TypeScript support out-of-the-box and Vite.

Overall it was an amazing developer experience and I assume it's only going to get better in time.

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is something I haven't tried before this but was already aware of its pros and cons. For something like a personal website, where I want to make as many little adjustments as possible, for a really personalized experience, I think it's a good choice.

I even went the extra mile and deleted some CSS classes I created earlier, just so I use Tailwind's utility classes instead, to really get into it.

Should have probably modularize more into components for a DRY-er approach, but it is what it is.

### Cloudflare

A friend mentioned I should give [Cloudflare Pages](https://pages.cloudflare.com/) a try for my next Jamstack project, and I did. It was a nice developer experience and, as you can see, the website is super fast.

Due to the way Svelte works, if I create content like a new repo or Medium story for example, the website doesn't update to reflect that new content - It needs a rebuild. For that, I created a build webhook and then a Cloudflare worker with a CRON job to rebuild the site, assuring that it's always up to date:

```JavaScript
addEventListener("scheduled", (event) => {
  event.waitUntil(handleScheduled(event.scheduledTime));
});

async function handleScheduled(request) {
  return fetch("https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/MY_WEBHOOK", {
    method: 'POST'
  });
}
```

The only thing I didn't appreciate that much was that I needed to create a page rule (only 3 free) to redirect non-www to www. Hopefully that's something they will integrate into Pages soon.

Still, being able to do all of this in such a nice way and for free would blow my younger self's mind.

### Other

Surprisingly I didn't add many other things to my website:

- [@sveltejs/adapter-static](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site#sveltekit-configuration)
- [Iconify](https://docs.iconify.design/icon-components/svelte/)
- [Svelte Lottie Player](https://github.com/LottieFiles/svelte-lottie-player)
- [rss-parser](https://github.com/rbren/rss-parser)

Only thing required for my setup was **adapter-static**.

### Old website

If you're curious about the previous website, you can check the repo here: [nunogois-website-nuxt-2018](https://github.com/nunogois/nunogois-website-nuxt-2018).

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
- [x] Announce: Twitter, LinkedIn, Instagram
- [x] Figure out the best way of triggering builds (daily cron from Cloudflare worker, maybe)

### BONUS

- [x] Publish to new.nunogois.com while in development
- [x] Add Lottie
- [x] Make repo public
- [x] Improve README.md
- [x] Further SEO optimizations - Headers are apparently a big thing in SEO
- [x] Even more SEO optimizations - Convert my name component into a simpler h1
- [ ] Add contact form
- [ ] Add recruit page
- [x] Medium blog is ruining Lighthouse scores - fix it (maybe migrate to dev.to in the near future)
- [ ] Improve Lighthouse scores as much as possible

### MAYBE?

- [ ] i18n with PT
- [ ] Add animations
