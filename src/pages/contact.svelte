<script lang="ts">
	import Section from '$components/section.svelte'
	import Lottie from '$components/lottie.svelte'

	import Icon from '@iconify/svelte'
</script>

<Section title="contact">
	<div class="pt-4 grid grid-cols-4 justify-items-center">
		<a href="https://github.com/nunogois" target="_blank" title="GitHub" class="w-8 sm:w-20 md:w-28"
			><Icon icon="fa-brands:github-alt" width="100%" /></a
		>
		<a
			href="https://twitter.com/nunogois_dev"
			target="_blank"
			title="Twitter"
			class="w-8 sm:w-20 md:w-28"><Icon icon="fa-brands:twitter" width="100%" color="#38a1f3" /></a
		>
		<a
			href="https://dev.to/nunogois"
			target="_blank"
			title="DEV Community"
			class="w-8 sm:w-20 md:w-28"><Icon icon="fa-brands:dev" width="100%" /></a
		>
		<a
			href="https://www.linkedin.com/in/nuno-gois"
			target="_blank"
			title="LinkedIn"
			class="w-8 sm:w-20 md:w-28"><Icon icon="fa-brands:linkedin" width="100%" color="#0077b5" /></a
		>
	</div>
	<div class="max-w-md mx-auto pb-2">
		<Lottie src="/ng_dev.json" />
	</div>
	Thank you for checking out my website!
	<h2>© {new Date().getFullYear()} - Nuno Góis</h2>
</Section>
