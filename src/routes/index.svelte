<script context="module">
	import Navbar from '$components/navbar.svelte'

	export async function load({ page, fetch }) {
		console.log('page', page)
		// if (page.host === 'cv.nunogois.com') {
		// 	return {
		// 		url: '/cv',
		// 		status: 301
		// 	}
		// }

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
	import Cv from '$pages/cv.svelte'
	import Contact from '$pages/contact.svelte'

	export let skills, projects, blog
</script>

<Navbar />

<Home />
<About />
<Skills {skills} />
<Projects {projects} {skills} />
<Blog {blog} />
<Cv />
<Contact />
