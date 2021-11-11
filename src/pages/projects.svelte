<script lang="ts">
	import Section from '$components/section.svelte'
	import projectsImg from '$assets/projects.jpg'
	import { years, DATE } from './utils'

	export let projects

	console.log('projects', projects)
</script>

<Section title="projects">
	<div class="p-10 lg:flex lg:p-0 rounded-xl overflow-hidden card mt-5">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto"
			src={projectsImg}
			alt="projects"
		/>
		<div class="pt-6 lg:p-8 items-center">
			<p class="text-justify font-bold">
				With over {years(DATE.PROFESSIONAL)} years of professional experience, I have been extremely
				fortunate to have worked with extremely diverse and talented people.
			</p>
			<p class="text-justify pt-5">
				I had a lot of fun solving the problems that I have faced in my career and I can't wait to
				see what's next.
			</p>
			<p class="text-justify pt-5">
				Besides professional projects, I'm always thinking of new personal projects to tackle. They
				are fantastic opportunities to learn more and add to my experience.
			</p>
		</div>
	</div>
	TODO: Add professional history here like in the CV...<br />TODO: Load GitHub projects here... {projects}</Section
>
