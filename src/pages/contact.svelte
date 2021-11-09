<script lang="ts">
	import Section from '../components/section.svelte'
	import Lottie from '../components/lottie.svelte'
	import FaGitHubAlt from 'svelte-icons/fa/FaGitHubAlt.svelte'
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
</script>

<Section title="contact">
	<div class="grid grid-flow-col grid-cols-3 justify-items-center">
		<a href="https://github.com/nunogois" target="_blank" class="w-32"><FaGitHubAlt /></a>
		<a href="https://twitter.com/nunogois_dev" target="_blank" class="w-32"><FaTwitter /></a>
		<a href="https://www.linkedin.com/in/nuno-gois" target="_blank" class="w-32"><FaLinkedin /></a>
	</div>
	<div class="max-w-md mx-auto">
		<Lottie
			src="https://raw.githubusercontent.com/nunogois/bestdit/master/public/lottie/ng_dev.json"
		/>
	</div>
	Thank you for checking out my website!
	<h2>© {new Date().getFullYear()} - Nuno Góis</h2>
</Section>
