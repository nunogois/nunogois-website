<script lang="ts">
	export let fontSize = 'text-4xl sm:text-7xl md:text-8xl lg:text-9xl'
</script>

<h1 class={`uppercase font-light tracking-widest ${fontSize}`}>Nuno Góis</h1>

<style lang="postcss">
	h1 {
		background: linear-gradient(to right, #5cd68f, #d65c5e);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: hue 10s infinite linear;
	}
	@-webkit-keyframes hue {
		from {
			-webkit-filter: hue-rotate(-360deg);
		}
		to {
			-webkit-filter: hue-rotate(0deg);
		}
	}
</style>
