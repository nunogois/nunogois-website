<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api')

		if (res.ok) {
			return {
				props: await res.json()
			}
		}
	}
</script>

<script lang="ts">
	import Icon from '@iconify/svelte'

	import { years, DATE } from '$data/dates'
	import { experience } from '$data/projects'

	import aboutImg from '$assets/about.jpg'
	import ccpImg from '$assets/aws-ccp.png'

	export let skills

	const signature = `Thank you for your time.
© ${new Date().getFullYear()} - Nuno Góis`
</script>

<div
	class="max-w-screen-md mx-auto my-5 px-5 print:my-0 print:h-screen print:bg-white print:text-black"
>
	<div class="flex flex-col md:flex-row print:flex-row gap-4 items-center">
		<div class="min-w-[6rem] max-w-[6rem]">
			<img src={aboutImg} alt="Nuno Góis" class="object-cover rounded-full" />
		</div>
		<div class="flex flex-col justify-center">
			<div class="flex flex-row justify-between">
				<div>
					<h1 class="text-xl">Nuno Góis</h1>
					<h2 class="text-sm">Full-Stack Developer</h2>
				</div>
				<div class="flex flex-col gap-1 justify-center">
					<a href="https://www.nunogois.com" target="_blank" class="text-xs"
						><Icon icon="fa-solid:globe" class="inline-block" /> www.nunogois.com</a
					>
					<a href="mailto:me@nunogois.com" target="_blank" class="text-xs"
						><Icon icon="fa-solid:at" class="inline-block" /> me@nunogois.com</a
					>
				</div>
			</div>
			<p class="text-justify text-xs mt-2">
				Driven {years(DATE.BIRTHDAY)} years old from Portugal with over {years(DATE.PROFESSIONAL)} years
				of professional experience. Passionate for the job, love putting skills to the test, facing challenges
				in a creative and perfectionist way. Experienced with every step of developing and delivering
				cross-platform, modern and responsive software.
			</p>
		</div>
	</div>

	<p class="text-justify text-xs mt-2">
		Biggest strengths lie in bringing a focused, creative and out-of-the-box approach to challenges,
		leveraging hard-working and quick learning traits. Worked with several different technologies
		across the stack, always willing to learn more and improve skills. Some of those include, but
		are not limited to:
	</p>

	<div class="text-justify text-xs mt-2">
		{`${skills.map((s) => s.name).join(', ')}.`}
	</div>

	<div class="flex mt-2">
		<a
			href="https://www.credly.com/badges/d69215a7-cf01-4f20-b959-4feef5bed505/public_url"
			target="_blank"
			class="flex items-center gap-2 font-bold text-xs"
			><img src={ccpImg} alt="AWS Certified Cloud Practitioner" class="w-11 h-11" /> AWS Certified Cloud
			Practitioner</a
		>
	</div>

	{#each experience as { name, image, role, date, description }}
		<div class="flex p-0 mt-6">
			<img class="w-11 h-11 mt-1" src={image} alt={name} />
			<div class="pl-5 items-center">
				<p class="text-left font-bold text-sm">{name}</p>
				<p class="text-left font-bold text-xs">{role}</p>
				<p class="text-left text-xs text-gray-300 print:text-black">{date}</p>
				<ul class="text-justify pt-3 list-disc">
					{#each description.split('\n') as desc}
						<li class="text-justify text-xs">{desc}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}

	<div class="underline text-xs text-center mt-10 print:hidden">
		<a href="/Nuno Góis - Full-Stack Developer.pdf" target="_blank">Download PDF</a>
	</div>
	<div class="whitespace-pre-line text-xs text-center print:mt-10">
		{signature}
	</div>
</div>
