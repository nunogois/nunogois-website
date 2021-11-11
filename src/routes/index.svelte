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
</script>

<svelte:head>
	<title>Nuno Góis - Full-Stack Developer</title>
</svelte:head>

<Home />
<About />
<Skills {skills} />
<Projects {projects} {skills} />
<Blog {blog} />
<Contact />
