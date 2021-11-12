<script lang="ts">
	import Section from '$components/section.svelte'
	import skillsImg from '$assets/skills.jpg'

	export let skills
	let filter = ''
	$: filteredSkills = skills.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()))

	const preferences = {
		OS: 'macOS, Pop!_OS',
		Shell: 'Zsh',
		Editor: 'VSCode',
		Keyboard: 'ISO, MX Brown',
		Linter: 'ESLint',
		Formatter: 'Prettier',
		General: 'TypeScript',
		Framework: 'Vue',
		App: 'Quasar Framework (Vue)',
		Website: 'Svelte',
		'Back-end': '.NET (C#)',
		API: 'TypeScript',
		Cloud: 'AWS, Cloudflare',
		Scripts: 'Go, Python',
		SQL: 'SQL Server',
		NoSQL: 'MongoDB',
		Browser: 'Chrome',
		Mobile: 'Android'
	}
</script>

<Section title="skills">
	<input
		bind:value={filter}
		class="bg-transparent outline-none border-none w-full my-5"
		placeholder="Type here to filter..."
	/>
	<div class="flex flex-wrap gap-2 md:gap-y-2 md:gap-3">
		{#each filteredSkills as { name, image }}
			<div class="flex flex-col">
				<img src={image} alt={name} class="rounded-xl skill object-cover" title={name} />
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
	<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto object-cover"
			src={skillsImg}
			alt="skills"
		/>
		<div class="flex pt-6 lg:p-8 w-full flex-col">
			<div class="grid md:grid-cols-2 w-full text-left">
				{#each Object.keys(preferences) as key}
					<div>
						<span class="font-bold">{key}:</span>
						{preferences[key]}
					</div>
				{/each}
			</div>
			<p class="text-left pt-5">
				<span class="font-bold">Looking forward to learn more about:</span> Rust, WebAssembly
			</p>
		</div>
	</div>
	<p class="text-justify mt-5">
		Despite my current preferences, I'm constantly looking for new things to learn and experiment
		with. One of the best parts of the tech landscape is that it's changing all the time, so it
		never gets boring.
	</p>
</Section>

<style>
	.skill {
		width: 50px;
		height: 50px;
		object-position: -5px;
	}
	@media (max-width: 768px) {
		.skill {
			width: 30px;
			height: 30px;
			object-position: -3px;
		}
	}
</style>
