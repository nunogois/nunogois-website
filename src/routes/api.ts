import type { EndpointOutput } from '@sveltejs/kit'
import type { JSONString } from '@sveltejs/kit/types/helper'

export async function get(): Promise<EndpointOutput> {
	fetch('/sitemap.xml')
	fetch('/rss.xml')

	return {
		body: {
			skills: await loadSkills(),
			projects: await loadProjects(),
			blog: await loadBlog()
		}
	}
}

const loadSkills = async () => {
	const data = await fetch(
		'https://raw.githubusercontent.com/nunogois/nunogois/main/README.md'
	).then((res) => res.text())

	return data
		.substring(data.indexOf('![JavaScript]'))
		.split('###')[0]
		.trim()
		.split('\n')
		.map((skill) => ({
			name: skill.match(/\[([^)]+)\]/)[1],
			image: skill.match(/\(([^)]+)\)/)[1]
		}))
}

const loadProjects = async () => {
	try {
		const data = await fetch('https://api.github.com/users/nunogois/repos?per_page=100').then(
			(res) => res.json()
		)

		const ignoreRepos = ['nunogois', 'nunogois-cv']

		return {
			popular: data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6),
			recent: data
				.filter((p) => !p.fork && !ignoreRepos.includes(p.name) && !p.name.includes('-old'))
				.sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
				.slice(0, 6)
		}
	} catch (e) {
		return {
			popular: [],
			recent: []
		}
	}
}

export const loadBlog = async (): Promise<JSONString[]> =>
	await fetch('https://dev.to/api/articles/latest?username=nunogois').then((res) => res.json())
