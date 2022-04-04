<script context="module">
	import Navbar from '$components/navbar.svelte'

	export async function load({ page, fetch }) {
		if (page.host === 'cv.nunogois.com') {
			return {
				redirect: 'https://www.nunogois.com/cv',
				status: 301
			}
		} else {
			const res = await fetch('/api')

			if (res.ok) {
				return {
					props: await res.json()
				}
			}
		}
	}
</script>

<script lang="ts">
	import Home from '$pages/home.svelte'
	import About from '$pages/about.svelte'
	import Skills from '$pages/skills.svelte'
	import Projects from '$pages/projects.svelte'
	import Cv from '$pages/cv.svelte'
	import Contact from '$pages/contact.svelte'

	export let skills, projects
</script>

<Navbar />

<Home />
<About />
<Skills {skills} />
<Projects {projects} {skills} />
<Cv />
<Contact />
