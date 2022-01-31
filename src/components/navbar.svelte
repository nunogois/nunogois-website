<script lang="ts">
	function scrollTo(element: string) {
		window.scrollTo({
			top: element === 'home' ? 0 : document.getElementById(element).offsetTop - 50,
			behavior: 'smooth'
		})
	}
</script>

<div
	class="grid grid-flow-col text-xs md:text-base fixed w-full justify-center p-2 gap-3 md:gap-7 bg-background"
>
	<a href={'javascript:;'} on:click={() => scrollTo('home')} class="hidden md:block">HOME</a>
	<a href={'javascript:;'} on:click={() => scrollTo('about')}>ABOUT</a>
	<a href={'javascript:;'} on:click={() => scrollTo('skills')}>SKILLS</a>
	<a href={'javascript:;'} on:click={() => scrollTo('projects')}>PROJECTS</a>
	<a href={'javascript:;'} on:click={() => scrollTo('blog')}>BLOG</a>
	<a href={'javascript:;'} on:click={() => scrollTo('cv')}>CV</a>
	<a href={'javascript:;'} on:click={() => scrollTo('contact')}>CONTACT</a>
</div>
