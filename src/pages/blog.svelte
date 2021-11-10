<script lang="ts">
	import Section from '../components/section.svelte'
	export let blog
	let filter = ''
	$: filteredBlog = blog.filter(
		(s) =>
			s.title.toLowerCase().includes(filter.toLowerCase()) ||
			s.content.toLowerCase().includes(filter.toLowerCase()) ||
			s.categories.filter((c) => c.toLowerCase().includes(filter.toLowerCase())).length
	)
</script>

<Section title="blog">
	<input bind:value={filter} class="filter w-full my-5" placeholder="Type here to filter..." />
	<div class="grid grid-cols-3 gap-10">
		{#each filteredBlog as { guid, title, color, date, content }}
			<div class="card rounded-xl flex flex-col">
				<a href={guid} target="_blank" class="flex flex-col h-full">
					<h1
						class="flex justify-center items-center text-lg font-medium p-5"
						style="color:{color}"
					>
						{title}
					</h1>
					<span class="mb-2 text-xs text-gray-300 ">{date}</span>
					<div class="h-full">
						{@html content}
					</div>
				</a>
			</div>
		{/each}
	</div>
	{#if !filteredBlog.length}
		<div class="flex justify-center items-center w-full">
			<h1 class="text-lg font-medium">No results found.</h1>
		</div>
	{/if}
</Section>

<style>
	.card h1 {
		min-height: 80px;
		max-height: 80px;
	}
</style>
