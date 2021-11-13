<script lang="ts">
	import Icon from '@iconify/svelte'

	export let projects, skills
</script>

<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
	{#each projects as { html_url, name, language, pushed_at, description, stargazers_count, forks }}
		<div class="border border-light-gray rounded-xl flex flex-col overflow-hidden">
			<a href={html_url} target="_blank" class="flex flex-col h-full">
				<h5
					class="flex justify-center items-center text-lg font-medium mb-2 p-2 border-b border-light-gray"
				>
					{name}
				</h5>
				<div class="flex justify-between mx-5 mb-2 text-gray-300">
					<div class="flex items-center">
						<img
							src={skills.find((s) => s.name === language).image}
							alt={language}
							class="inline-block mr-1 object-cover skill"
							title={language}
						/>
						<h6 class="text-xs">
							{language}
						</h6>
					</div>
					<span class="text-xs">{pushed_at.split('T')[0]}</span>
				</div>
				<div class="text-xs mb-3 mx-5 text-justify">
					{description ?? ''}
				</div>
				<div class="flex-1 grid grid-cols-2 text-sm content-end">
					<div class="flex justify-center items-center border-t border-light-gray border-r p-1">
						<Icon icon="fa:star" width="16px" class="inline-block mr-1" />
						{stargazers_count}
					</div>
					<div class="flex justify-center items-center border-t border-light-gray p-1">
						<Icon icon="eos-icons:fork-outlined" width="16px" class="inline-block mr-1" />
						{forks}
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<style>
	.skill {
		width: 20px;
		height: 20px;
		object-position: -2px;
	}
</style>
