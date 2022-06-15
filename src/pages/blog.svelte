<script lang="ts">
	import Section from '$components/section.svelte'

	import Icon from '@iconify/svelte'

	export let blog
	let filter = ''

	$: filteredBlog = blog.filter(
		(post) =>
			post.title.toLowerCase().includes(filter.toLowerCase()) ||
			post.description?.toLowerCase().includes(filter.toLowerCase()) ||
			post.tag_list.filter((tag) => `#${tag.toLowerCase()}`.includes(filter.toLowerCase())).length
	)
</script>

<Section title="blog">
	<input
		bind:value={filter}
		class="bg-transparent outline-none border-none w-full my-5"
		placeholder="Type here to filter..."
	/>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
		{#each filteredBlog as { slug, title, description, readable_publish_date, cover_image, tag_list, positive_reactions_count, comments_count, reading_time_minutes }}
			<div class="border border-light-gray rounded-xl">
				<a sveltekit:prefetch href={`/blog/${slug}`} class="flex flex-col h-full">
					<img src={cover_image} alt={title} class="w-full rounded-t-xl object-cover" />
					<h4 class="flex justify-center items-center text-lg font-medium p-2 border-light-gray">
						{title}
					</h4>
					<span class="text-xs text-gray-300 mb-1"
						>{readable_publish_date} - {reading_time_minutes} min read</span
					>
					<span class="text-xs text-gray-300">{tag_list.map((tag) => `#${tag}`).join(' ')}</span>
					<div class="text-xs my-3 mx-5 text-justify">
						{description}
					</div>
					<div class="flex-1 grid grid-cols-2 text-sm content-end">
						<div class="flex justify-center items-center border-t border-light-gray border-r p-1">
							<Icon icon="fa:heart" width="16px" class="inline-block mr-1" />
							{positive_reactions_count}
						</div>
						<div class="flex justify-center items-center border-t border-light-gray border-r p-1">
							<Icon icon="fa:comment" width="16px" class="inline-block mr-1" />
							{comments_count}
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
	{#if !filteredBlog.length}
		<div class="flex justify-center items-center w-full">
			<span class="text-lg font-medium">No results found.</span>
		</div>
	{/if}
</Section>
