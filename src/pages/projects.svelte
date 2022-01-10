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

	const interestingProject = [
		{
			name: 'Workflow Engine',
			description: `Created a custom workflow engine that allowed end-users with the right permissions to create custom workflows, 
      with several steps, permissions, routes, and more.`
		},
		{
			name: 'Form Designer (Absolute Position)',
			description: `Created a custom form designer, that works with the custom Workflow Engine, that allowed end-users 
      with the right permissions to create web forms, containing tabs and absolute positioned UI elements, by dragging and 
      dropping. Some of the elements were somewhat advanced, like tables, and would contain custom properties that could be configured.`
		},
		{
			name: 'Form Designer (Responsive Layout)',
			description: `Created a custom form designer that would replace the previous one, as a more modern and responsive option. 
      Users could still drag, drop and resize elements, but the layout would be responsive, following the typical "12 column" 
      grid layout.`
		},
		{
			name: 'Custom JavaScript Framework (jQuery abstraction)',
			description: `Created a custom JavaScript framework based / on top of jQuery to use along with the previous options. This added 
      infinite possibilities, along with customization and integration options. This framework was meant as a very easy-to-use 
      programming language for our own and also end-users with the right permissions, where most of what was needed could be accomplished using 
      its simple functions. The framework went through several iterations, and this also included maintaining its documentation accordingly.`
		},
		{
			name: 'Custom JavaScript Framework (Server-side / Scheduling)',
			description: `As an extension to the previous idea, we also wanted to run custom logic from a server / scheduled, cron-like, perspective.
      This used PhantomJS and Chrome headless along with a Windows Service to trigger our code based on configurable triggers.`
		},
		{
			name: 'Code / Logic Wizard',
			description: `Created a code / logic wizard, where end-users with no programming knowledge could easily configure their own logic.
      This included creating a very specific parser and code generator, and also included functions, conditions, and parameters.`
		},
		{
			name: 'PDF Text Extractor (OCR alternative)',
			description: `Created a PDF text extractor, where PDFs were converted to HTML in a specific way that allowed end-users to configure
      zones from where to grab text information. This could then be easily integrated with the previous projects, and proved a much faster
      and accessible alternative to OCR.`
		},
		{
			name: 'Legacy Custom File Format PDF Extraction',
			description: `Created a PDF extractor from a custom file format of a legacy app that was no longer maintained. It aggregated several files,
      including PDFs, which were required for our use-case. Had to evaluate bytes looking for file signatures without documentation as a guide,
      using the so-called "magic numbers" to identify when PDFs started and ended.`
		},
		{
			name: 'Data Matrix Code Scanner (Python Script)',
			description: `Created a data matrix code scanner script in Python. The codes were scanned from a very large volume of TIFF files, so it had
      to be extremely optimized. Besides managing the local files, it involved counting the percentage of yellow on the image (based on a configurable RGB range), 
      so that a correct amount of codes to be scanned could be calculated, in order to speed up the process significantly. Learned and used tools like 
      numpy, CV2, Wand, and more. It also involved querying data from a MySQL database and integrating everything with web-based APIs.`
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
		<h3 class="text-left text-xl ml-2">Work Experience</h3>
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
		<Icon icon="fa-solid:lightbulb" height="30px" class="inline-block" />
		<h3 class="text-left text-xl ml-2">Interesting Projects</h3>
	</div>
	<p class="text-justify pt-5">
		Since I'm used to people approaching me with unique challenges and ideas, and coming up with
		them myself, and then figuring out what it means to engineer those challenges and ideas to life,
		I had the chance to work on some very interesting projects. For some of them I also had to work
		with very limited resources, including time. They also help explain the developer I have become
		over time.
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
