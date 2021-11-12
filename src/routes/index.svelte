<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api')

		if (res.ok) {
			return {
				props: await res.json()
			}
		}
	}
</script>

<script lang="ts">
	import Home from '$pages/home.svelte'
	import About from '$pages/about.svelte'
	import Skills from '$pages/skills.svelte'
	import Projects from '$pages/projects.svelte'
	import Blog from '$pages/blog.svelte'
	import Contact from '$pages/contact.svelte'

	export let skills, projects, blog

	const website = {
		lang: 'en',
		title: 'Nuno Góis - Full-Stack Developer',
		description:
			'Nuno Góis - Full-Stack Developer from Portugal. Experienced in .NET, TypeScript, Vue, Go, Python, SQL and many other technologies of the development tech stack.',
		url: 'https://www.nunogois.com',
		twitter: '@nunogois_dev'
	}
</script>

<svelte:head>
	<html lang={website.lang} />
	<title>{website.title}</title>
	<meta name="description" content={website.description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		property="og:type"
		prefix="http://ogp.me/ns# website: http://ogp.me/ns/website#"
		content="website"
	/>
	<meta property="og:title" prefix="og: http://ogp.me/ns#" content={website.title} />
	<meta property="og:description" prefix="og: http://ogp.me/ns#" content={website.description} />
	<meta
		property="og:image"
		prefix="og: http://ogp.me/ns#"
		content={website.url + 'thumbnail.png'}
	/>
	<meta property="og:url" prefix="og: http://ogp.me/ns#" content={website.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={website.title} />
	<meta name="twitter:description" content={website.description} />
	<meta name="twitter:image" content={website.url + '/thumbnail.png'} />
	<meta name="twitter:url" content={website.url} />
	<meta name="twitter:site" content={website.twitter} />
	<meta name="twitter:creator" content={website.twitter} />
</svelte:head>

<Home />
<About />
<Skills {skills} />
<Projects {projects} {skills} />
<Blog {blog} />
<Contact />
