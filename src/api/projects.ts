import type { Project, Projects } from '../types'

export const fetchProjects = async (): Promise<Projects> => {
  try {
    const res = await fetch(
      'https://api.github.com/users/nunogois/repos?per_page=100'
    )

    const projects: Project[] = await res.json()

    return {
      popular: projects
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6),
      recent: projects
        .sort((a, b) => +new Date(b.pushed_at) - +new Date(a.pushed_at))
        .slice(0, 6)
    }
  } catch {
    return {
      popular: [],
      recent: []
    }
  }
}
