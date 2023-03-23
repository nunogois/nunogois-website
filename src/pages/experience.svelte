<script lang="ts">
	import Section from '$components/section.svelte'
	import GitHubProjects from '$components/github_projects.svelte'
	import projectsImg from '$assets/projects.jpg'
	import { years, DATE } from '$data/dates'
	import { experience, interestingProject } from '$data/projects'

	import Icon from '@iconify/svelte'

	export let projects, skills
	let filter = ''
	let filterFn

	$: filterFn = (project) =>
		project.name.toLowerCase().includes(filter.toLowerCase()) ||
		project.description?.toLowerCase().includes(filter.toLowerCase()) ||
		project.topics.filter((c) => c.toLowerCase().includes(filter.toLowerCase())).length

	$: popular = projects.popular.filter(filterFn)
	$: recent = projects.recent.filter(filterFn)
</script>

<Section title="experience">
	<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden mt-5">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto object-cover"
			src={projectsImg}
			alt="experience"
		/>
		<div class="pt-6 lg:p-8 items-center">
			<p class="text-justify font-bold">
				With over {years(DATE.PROFESSIONAL)} years of professional experience, I was extremely fortunate
				to have had the opportunity to work on exciting projects with very talented people.
			</p>
			<p class="text-justify pt-5">
				I'm very proud of all that I have accomplished so far. It brings me joy to know that I have
				had a real impact, not only on the end result but also on the people I have collaborated
				with and end-users. Whether developing small or large projects, improving the experience of
				my colleagues and end-users, or solving complex problems, I always strive to give my best
				and have fun doing it.
				<br />
				In addition to my professional work, I constantly challenge myself with personal projects to
				continue learning and growing my skills.
				<br /><br />I can't wait to see what comes next!
			</p>
		</div>
	</div>
	<div class="flex mt-5">
		<Icon icon="fa:briefcase" width="30px" class="inline-block" />
		<h3 class="text-left text-xl ml-2">Work Experience</h3>
	</div>
	{#each experience as { name, image, role, date, description }}
		<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden mt-5">
			<img class="w-16 h-16 lg:mt-5 lg:ml-5" src={image} alt={name} />
			<div class="pt-6 lg:p-5 items-center">
				<p class="text-left font-bold">{name}</p>
				<p class="text-left font-bold">{role}</p>
				<p class="text-left text-xs text-gray-300">{date}</p>
				{#if description}
					<ul class="text-justify pt-5 list-disc">
						{#each description.split('\n') as desc}
							<li class="text-left text-sm">{desc}</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
	<div class="flex mt-5">
		<Icon icon="fa-solid:lightbulb" height="30px" class="inline-block" />
		<h3 class="text-left text-xl ml-2">Interesting Projects</h3>
	</div>
	<p class="text-justify pt-5">
		Over the years, I have been approached with a variety of unique challenges and ideas, as well as
		coming up with my own. Through these experiences, I have had the opportunity to work on some
		truly interesting projects, even with limited resources such as time. These experiences have
		helped shape me into the versatile and creative developer I am today.
	</p>
	{#each interestingProject as { name, description }}
		<details>
			<summary class="text-left text-sm font-bold pt-2 cursor-pointer">{name}</summary>
			<p class="text-sm text-justify ml-1 pl-3 mt-1 mb-2 border-l">
				{description}
			</p>
		</details>
	{/each}
	<div class="flex mt-5">
		<Icon icon="fa-brands:github-alt" width="30px" class="inline-block" />
		<h3 class="text-left text-xl ml-2">GitHub Projects</h3>
	</div>
	<input
		bind:value={filter}
		class="bg-transparent outline-none border-none w-full my-5"
		placeholder="Type here to filter..."
	/>
	{#if popular.length}
		<div class="flex mb-5 place-content-center">
			<Icon icon="fa:star" width="26px" class="inline-block" />
			<h4 class="text-lg ml-2">Popular</h4>
		</div>
		<GitHubProjects projects={popular} {skills} />
	{/if}
	{#if recent.length}
		<div class="flex mt-10 mb-5 place-content-center">
			<Icon icon="emojione-monotone:new-button" width="26px" class="inline-block" />
			<h4 class="text-lg ml-2">Recent Updates</h4>
		</div>
		<GitHubProjects projects={recent} {skills} />
	{/if}
	{#if !popular.length && !recent.length}
		<div class="flex justify-center items-center w-full">
			<span class="text-lg font-medium">No results found.</span>
		</div>
	{/if}
</Section>
