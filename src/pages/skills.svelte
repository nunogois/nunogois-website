<script lang="ts">
	import Section from '../components/section.svelte'
	export let skills
	let filter = ''
	$: filteredSkills = skills.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()))
</script>

<Section title="skills">
	<input bind:value={filter} class="filter w-full my-5" placeholder="Type here to filter..." />
	<div class="flex flex-wrap gap-2 md:gap-y-2 md:gap-3">
		{#each filteredSkills as { name, image }}
			<div>
				<img src={image} alt={name} class="h-5 md:h-6" />
			</div>
		{/each}
	</div>
	{#if !filteredSkills.length}
		<div class="flex justify-center items-center w-full">
			<h1 class="text-lg font-medium">No results found.</h1>
		</div>
	{/if}
</Section>

<style>
	.filter {
		background-color: transparent;
		border: none;
		outline: none;
	}
</style>
