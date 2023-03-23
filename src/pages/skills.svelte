<script lang="ts">
	import Section from '$components/section.svelte'
	import skillsImg from '$assets/skills.jpg'

	export let skills
	let filter = ''
	$: filteredSkills = skills.filter((s) => s.name.toLowerCase().includes(filter.toLowerCase()))
</script>

<Section title="skills">
	<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden mt-5">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto object-cover"
			src={skillsImg}
			alt="skills"
		/>
		<div class="pt-6 lg:p-8 items-center">
			<p class="text-justify font-bold">
				You'll find me constantly looking for new technologies to learn, explore and experiment
				with. One of the best parts of the tech landscape is that it's changing all the time, so it
				never gets boring.
			</p>
			<p class="text-justify pt-5">
				As a Full-Stack Developer, I constantly seek out new technologies and techniques to learn
				and explore. I have experience in both front-end and back-end development, and I am always
				adapting and adding to my knowledge. Thanks to my experience, I am able to quickly adapt to
				new technologies and frameworks. It's generally easy for me to join a new project and learn
				the stack being used in a short amount of time, so only looking at the technologies I used
				in the past may prove somewhat limiting.
				<br /><br />
				Below are some of the technologies I've worked with or interacted with in the past.
			</p>
		</div>
	</div>

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
			<span class="text-lg font-medium">No results found.</span>
		</div>
	{:else}
		<p class="text-justify mt-5">{filteredSkills.map((s) => s.name).join(', ') + '.'}</p>
	{/if}
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
