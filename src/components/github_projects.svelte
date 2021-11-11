<script lang="ts">
	import Icon from '@iconify/svelte'
	export let projects, skills
</script>

<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
	{#each projects as { html_url, name, language, pushed_at, description, stargazers_count, forks }}
		<div class="card rounded-xl flex flex-col overflow-hidden">
			<a href={html_url} target="_blank" class="flex flex-col h-full">
				<h1 class="flex justify-center items-center text-lg font-medium mb-2 p-2">
					{name}
				</h1>
				<div class="flex justify-between mx-5 mb-2 text-gray-300">
					<div class="flex items-center">
						<img
							src={skills.find((s) => s.name === language).image}
							alt={language}
							class="inline-block mr-1"
							title={language}
							style="width:20px;height:20px;object-fit:cover;object-position: -2px"
						/>
						<h2 class="text-xs">
							{language}
						</h2>
					</div>
					<span class="text-xs">{pushed_at.split('T')[0]}</span>
				</div>
				<div class="text-xs mb-3 mx-5 text-justify">
					{description ?? ''}
				</div>
				<div class="flex-1 grid grid-cols-2 text-sm content-end">
					<div class="mini-card">
						<Icon icon="fa:star" width="16px" class="inline-block mr-1" />
						{stargazers_count}
					</div>
					<div class="mini-card">
						<Icon icon="eos-icons:fork-outlined" width="16px" class="inline-block mr-1" />
						{forks}
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<style>
	.mini-card {
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid #333;
		padding: 5px;
	}
	.mini-card:nth-of-type(1) {
		border-right: 1px solid #333;
	}

	h1 {
		border-bottom: 1px solid #333;
	}
</style>
