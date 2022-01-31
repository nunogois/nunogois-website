<script lang="ts">
	import Section from '$components/section.svelte'
	import aboutImg from '$assets/about.jpg'
	import carbonImg from '$assets/carbon.png'
	import { years, DATE } from '$data/dates'
</script>

<Section title="about">
	<div>
		<img src={carbonImg} alt="About me" class="mx-auto hidden md:block" />
	</div>
	<p class="py-5 text-justify">
		<span class="font-bold">Hello World!</span><br />My name is Nuno Góis. I am an experienced and
		driven {years(DATE.BIRTHDAY)} years old Full-Stack Developer from Portugal. Passionate for the job,
		love putting skills to the test, facing challenges in a creative and perfectionist way. Experienced
		with every step of developing and delivering cross-platform, modern and responsive software. Worked
		with several different technologies across the stack, always willing to learn more and improve skills.
		Biggest strengths lie in bringing a focused, creative and out-of-the-box approach to challenges,
		leveraging hard-working and quick learning traits.
	</p>
	<div class="border border-light-gray p-10 lg:flex lg:p-0 rounded-xl overflow-hidden">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto object-cover"
			src={aboutImg}
			alt="about"
		/>
		<div class="pt-6 lg:p-8 items-center">
			<p class="text-justify font-bold">
				My goal in life is to be the best version of myself that I can, trying to improve every day.
			</p>
			<p class="text-justify pt-5">
				I love coding, it's super fun and gratifying. As an INTJ, I am focused, rational, introvert
				and a bit of a loner. I'm a better listener than talker. I am a college dropout and
				self-taught. I have Crohn's so I have a limited diet and don't drink or smoke. I try my best
				to stay healthy.<br />I love videogames, tech, music, movies, TV series, reading, writing,
				running, hiking and many other things.<br />
				Feel free to ask me anything!
			</p>
		</div>
	</div>
	<p class="pt-5 text-justify">
		What makes me unique is my creativity and adaptability. More than a developer, I like to think
		of myself as an inventor and creator. I love tackling unique challenges, thinking of solutions
		and coming up with ideas. I'm generally at my best when I'm in a smaller-sized team, free to
		learn and think, and working on a challenging and fun project that I'm passionate about.
	</p>
</Section>
