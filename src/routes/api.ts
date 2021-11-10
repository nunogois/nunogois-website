import type { EndpointOutput } from '@sveltejs/kit'
import Parser from 'rss-parser'
const parser = new Parser()

export async function get(): Promise<EndpointOutput> {
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
	return []
}

const loadBlog = async () => {
	const data = await parser.parseURL('https://medium.com/feed/@nunogois-dev')

	return data.items.map((article) => {
		let content = article.content
		content =
			content.substring(0, content.indexOf('Continue reading on Medium »') - 1) +
			'' +
			content.split('Continue reading on Medium »')[1]
		return {
			guid: article.guid,
			title: article.title,
			color: colors[article.guid] ?? randomColor(),
			categories: article.categories,
			link: article.link,
			date: article.isoDate.split('T')[0],
			content
		}
	})
}

const colors = {
	'https://medium.com/p/cdc7c93785f5': '#ffbc73',
	'https://medium.com/p/d17dd28fc651': '#ff5870',
	'https://medium.com/p/eb1383714144': '#4ed5e8',
	'https://medium.com/p/36b860ccd0e2': '#ff9afa',
	'https://medium.com/p/4a7bbbef28ac': '#e6d93c'
}

const randomColor = () => {
	const palette = [
		'#d65cad',
		'#ced65c',
		'#d65c95',
		'#5cd69f',
		'#8dd65c',
		'#d6a75c',
		'#5cd685',
		'#60d65c',
		'#5cd68f',
		'#d65c5e',
		'#b6d65c',
		'#5cd6c0',
		'#d6b45c',
		'#5ca9d6',
		'#5c89d6',
		'#995cd6',
		'#68d65c',
		'#d6935c',
		'#bcd65c',
		'#d6785c',
		'#b8d65c'
	]

	return palette[Math.floor(Math.random() * palette.length)]
}
