<script lang="ts">
	import '$css/app.css'

	const website = {
		lang: 'en',
		title: 'Nuno Góis - Full-Stack Developer',
		description:
			'Full-Stack Developer from Portugal. Experienced with every step of developing and delivering software projects using .NET C#, JavaScript, Go, Python, and more.',
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
		content={website.url + '/thumbnail.png'}
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

<slot />
