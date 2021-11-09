<script lang="ts">
	export let title = ''
</script>

<section class="section">
	<div class="w-full px-10 md:px-24 my-10">
		<h1 id={title.toLowerCase()} class="w-full text-left text-lg md:text-3xl">
			// {title.toUpperCase()}
		</h1>
		<slot />
	</div>
</section>

<style>
	section div {
		max-width: 1200px;
	}
</style>
