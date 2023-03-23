<script lang="ts">
	import { scrollTo } from '$utils/scrollTo'
</script>

<div
	class="grid grid-flow-col text-xs md:text-base fixed w-full justify-center p-2 gap-3 md:gap-7 bg-background z-10"
>
	<a href={'javascript:;'} on:click={() => scrollTo('home')} class="hidden md:block">HOME</a>
	<a href={'javascript:;'} on:click={() => scrollTo('about')}>ABOUT</a>
	<a href={'javascript:;'} on:click={() => scrollTo('skills')}>SKILLS</a>
	<a href={'javascript:;'} on:click={() => scrollTo('experience')}>EXPERIENCE</a>
	<a href={'javascript:;'} on:click={() => scrollTo('blog')}>BLOG</a>
	<a href={'javascript:;'} on:click={() => scrollTo('cv')}>CV</a>
	<a href={'javascript:;'} on:click={() => scrollTo('contact')}>CONTACT</a>
</div>
