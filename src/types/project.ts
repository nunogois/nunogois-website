export interface Project {
  html_url: string
  name: string
  language: string
  pushed_at: string
  description: string
  stargazers_count: number
  fork: boolean
  forks: number
}

export interface Projects {
  popular: Project[]
  recent: Project[]
}
