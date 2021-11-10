<script lang="ts">
	import Section from '$components/section.svelte'
	import skillsImg from '$assets/skills.jpg'

	export let skills
	let filter = ''
	$: filteredSkills = skills.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()))
</script>

<Section title="skills">
	<input bind:value={filter} class="filter w-full my-5" placeholder="Type here to filter..." />
	<div class="flex flex-wrap gap-2 md:gap-y-2 md:gap-3">
		{#each filteredSkills as { name, image }}
			<div class="flex flex-col">
				<img
					src={image}
					alt={name}
					class="rounded-xl"
					title={name}
					style="width:50px;height:50px;object-fit:cover;object-position: -5px"
				/>
			</div>
		{/each}
	</div>
	{#if !filteredSkills.length}
		<div class="flex justify-center items-center w-full">
			<h1 class="text-lg font-medium">No results found.</h1>
		</div>
	{:else}
		<p class="text-justify mt-5">{filteredSkills.map((s) => s.name).join(', ') + '.'}</p>
	{/if}
	<p class="text-justify my-5">
		Besides this simplistic overview of my experience across the tech stack, these are my current
		preferences:
	</p>
	<div class="p-10 lg:flex lg:p-0 rounded-xl overflow-hidden card">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto"
			src={skillsImg}
			alt=""
			width="384"
			height="512"
		/>
		<div class="flex pt-6 lg:p-8 items-center">
			<p class="text-justify">
				TODO: Add some preferences and give some more thoughts: OS, Back-end, Front-end, want to
				learn, etc.
			</p>
		</div>
	</div>
</Section>
