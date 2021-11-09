<script lang="ts">
	import Section from '../components/section.svelte'

	const birthDate = new Date('1989-12-27')
	const today = new Date()
	let age = new Date().getFullYear() - birthDate.getFullYear()
	if (
		today.getMonth() < birthDate.getMonth() ||
		(today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate())
	) {
		age--
	}
</script>

<Section title="about">
	<div>
		<img
			src="https://raw.githubusercontent.com/nunogois/nunogois/main/resources/thumbnail_carbon.png"
			alt="About me"
			class="mx-auto hidden md:block"
		/>
	</div>
	<p class="py-5 text-justify">
		<span class="font-bold">Hello World!</span><br />I am an experienced and driven {age} years old Full-Stack
		Developer from Portugal. Passionate for the job, love putting skills to the test, facing challenges
		in a creative and perfectionist way. Experienced with every step of developing and delivering cross-platform,
		modern and responsive software. Worked with several different technologies across the stack, always
		willing to learn more and improve skills. Biggest strenghts lie in bringing a focused, creative and
		out-of-the-box approach to challenges, leveraging hard-working and quick learning traits.
	</p>
	<div class="p-10 lg:flex lg:p-0 rounded-xl overflow-hidden card">
		<img
			class="w-32 h-32 mx-auto rounded-full lg:mx-0 lg:rounded-none lg:w-52 lg:h-auto"
			src="https://media-exp1.licdn.com/dms/image/C4E03AQEx8jzEnc6rlg/profile-displayphoto-shrink_800_800/0/1597077879197?e=1642032000&v=beta&t=KP9AgEFcMSduK7dOLnTMK9unYxzMT5iSu4WX7xaSQ_M"
			alt=""
			width="384"
			height="512"
		/>
		<div class="flex pt-6 lg:p-8 items-center">
			<p class="text-justify">
				<span class="font-bold"
					>My goal in life is to be the best version of myself that I can, trying to improve every
					day.</span
				><br />
				I love coding, it's super fun and gratifying. As an INTJ, I am focused, rational, introvert and
				a bit of a loner. I'm a better listener than talker. I am a college dropout and self-taught.
				I have Crohn's so I have a limited diet and don't drink or smoke. I love videogames, music, movies,
				TV series, reading, writing, running, hiking...
			</p>
		</div>
	</div>
	<p class="pt-5 text-justify">
		What makes me unique is my creativity and adaptability. More than a developer, I like to think
		of myself as an inventor and creator. I love challenges, thinking of solutions and coming up
		with ideas. I'm generally at my best when I'm in a smaller-sized team, free to learn and think,
		and working on a challenging and fun project that I'm passionate about.
	</p>
</Section>

<style>
	.card {
		border: 1px solid #333;
	}
</style>
