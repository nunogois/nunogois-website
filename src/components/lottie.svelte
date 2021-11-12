<script lang="ts">
	import { onMount } from 'svelte'

	export let src = ''
	let LottiePlayer

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player')
		LottiePlayer = module.LottiePlayer
	})
</script>

{#if LottiePlayer}
	<svelte:component
		this={LottiePlayer}
		{src}
		autoplay={true}
		loop={true}
		renderer="svg"
		background="transparent"
		controls={false}
		controlsLayout="none"
		height="100%"
		width="100%"
	/>
{/if}
