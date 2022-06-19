<script context="module" lang="ts">
	import Nunogois from '$components/nunogois.svelte'

	import Icon from '@iconify/svelte'

	export async function load({ page, fetch }) {
		const url = `https://dev.to/api/articles/nunogois/${page.params.slug}`
		const response = await fetch(url)

		return {
			status: response.status,
			props: {
				post: response.ok && (await response.json())
			}
		}
	}
</script>

<script lang="ts">
	import '$css/blog.scss'

	export let post
</script>

<div class="fixed w-full p-2 text-center bg-background z-10">
	<a href="/">
		<Nunogois fontSize="text-4xl" />
	</a>
</div>

<div class="flex justify-center">
	<div class="flex flex-col w-full px-4 md:px-24 max-w-screen-lg text-justify pt-16">
		<div class="border-b border-light-gray md:border md:rounded-xl">
			<img src={post.cover_image} alt={post.title} class="w-full rounded-t-xl object-cover mb-4" />
			<div class="md:px-4">
				<div class="flex">
					<h3 class="w-full text-left text-2xl md:text-3xl font-medium">
						{post.title}
					</h3>
					<a href={post.url} class="w-8"
						><Icon icon="fa-brands:dev" width="32px" class="inline-block" /></a
					>
				</div>
				<div class="flex flex-col pt-2 pb-6 gap-1 text-xs text-gray-300">
					<span>{post.readable_publish_date}</span>
					<span>{post.tags.map((tag) => `#${tag}`).join(' ')}</span>
				</div>
				<div class="blog-post">
					{@html post.body_html}
				</div>
			</div>
		</div>
		<a href={post.url} class="mt-5 text-center">React to this blog post on DEV Community 👩‍💻👨‍💻</a>
		<a href="/" class="my-5 text-center text-sm">www.nunogois.com</a>
	</div>
</div>
