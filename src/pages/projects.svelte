<script lang="ts">
	import Section from '$components/section.svelte'
	import GitHubProjects from '$components/github_projects.svelte'
	import projectsImg from '$assets/projects.jpg'
	import zoiImg from '$assets/ext/zoi.jpg'
	import iqaImg from '$assets/ext/iqa.jpg'
	import { years, DATE } from './utils'

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

	const experience = [
		{
			name: 'Zoi',
			image: zoiImg,
			role: 'Full-Stack Developer assigned to Digital Innovations.',
			date: '06/2021 - Current',
			description: `Worked close to partners as a developer in exploratory projects using innovative cloud
				solutions. Contributed to a React Native app project by developing features and fixes for
				the app. Developed a mock package used internally for testing and debugging purposes.
				Followed best-practices and guidelines, including writing Unit and E2E tests. Worked on a
				dynamic multicultural team that follows an Agile / Scrum methodology. Shared knowledge and
				learned with teammates through pair programming.`
		},
		{
			name: 'IQA',
			image: iqaImg,
			role: 'Full-Stack Developer of multiple projects using many different technologies.',
			date: '03/2011 - 05/2021',
			description: `Developed AGIR ®, a Quality Management Software (QMS), Process Management (BPM) and Document
				control software. Worked on the platform since 2011: From ASP.NET, SQL Server, Web API, .NET
				WinForms or Java to Windows Services and Office Add-Ins, (...). One of the main features of
				the platform is its flexibility - features like an intuitive Form Designer, a custom
				JavaScript framework and a business logic assistant mean that it is able to do adapt to
				every customer need. Worked close to the project manager and customers to ensure that every
				product meets requirements in a versatile, modern and performant way. Helped the customer on
				every step when needed - Configuration, deployment, troubleshooting, etc. Developed and
				provided APIs, tools and other custom mechanisms in order to adapt and integrate with
				existing solutions and products. Developed a solid foundation for the company's next
				project, Wisibi, using Quasar Framework (Vue.js) and .NET Core Web API, following all the
				best practices. Helped setup and manage the team's Trello, TFS, GitHub, Jenkins and other
				services. Shared knowledge with teammates through training.`
		}
	]
</script>

<Section title="projects">
	<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden mt-5">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto object-cover"
			src={projectsImg}
			alt="projects"
		/>
		<div class="pt-6 lg:p-8 items-center">
			<p class="text-justify font-bold">
				With over {years(DATE.PROFESSIONAL)} years of professional experience, I have been extremely
				fortunate to have worked in exciting projects with very talented people.
			</p>
			<p class="text-justify pt-5">
				I had a lot of fun solving the problems that I have faced in my career and I can't wait to
				see what's next.<br />
				Besides professional projects, I'm always thinking of new personal projects to tackle. They are
				fantastic opportunities to learn more and add to my experience.
			</p>
		</div>
	</div>
	<div class="flex mt-5">
		<Icon icon="fa:briefcase" width="30px" class="inline-block" />
		<h2 class="text-left text-xl ml-2">Work Experience</h2>
	</div>
	{#each experience as { name, image, role, date, description }}
		<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden mt-5">
			<img class="w-16 h-16 lg:mt-5 lg:ml-5" src={image} alt={name} />
			<div class="pt-6 lg:p-5 items-center">
				<p class="text-left font-bold">{name}</p>
				<p class="text-left font-bold">{role}</p>
				<p class="text-left text-xs text-gray-300">{date}</p>
				<p class="text-justify pt-5">
					{description}
				</p>
			</div>
		</div>
	{/each}
	<div class="flex mt-5">
		<Icon icon="fa-brands:github-alt" width="30px" class="inline-block" />
		<h2 class="text-left text-xl ml-2">GitHub Projects</h2>
	</div>
	<input
		bind:value={filter}
		class="bg-transparent outline-none border-none w-full my-5"
		placeholder="Type here to filter..."
	/>
	{#if popular.length}
		<div class="flex mb-5 place-content-center">
			<Icon icon="fa:star" width="26px" class="inline-block" />
			<h2 class="text-lg ml-2">Popular</h2>
		</div>
		<GitHubProjects projects={popular} {skills} />
	{/if}
	{#if recent.length}
		<div class="flex mt-10 mb-5 place-content-center">
			<Icon icon="emojione-monotone:new-button" width="26px" class="inline-block" />
			<h2 class="text-lg ml-2">Recent Updates</h2>
		</div>
		<GitHubProjects projects={recent} {skills} />
	{/if}
	{#if !popular.length && !recent.length}
		<div class="flex justify-center items-center w-full">
			<h1 class="text-lg font-medium">No results found.</h1>
		</div>
	{/if}
</Section>
