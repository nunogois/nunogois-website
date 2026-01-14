import type { Event } from '../types'

const USER = 'nunogois'
const MAIN = 'refs/heads/main'

type GhEvent = {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload?: any
}

const ghHeaders = (token?: string): HeadersInit => ({
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
})

const parseRepo = (full: string) => {
  const [owner, name] = full.split('/')
  return { owner, name }
}

const aliasSafe = (s: string) => s.replace(/[^A-Za-z0-9_]/g, '_')

const fetchGraphQL = async <T>(
  query: string,
  token: string
): Promise<T | null> => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { ...ghHeaders(token), 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })

  if (!res.ok) return null

  const json = (await res.json()) as { data?: T }
  return json.data ?? null
}

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const token = import.meta.env.GITHUB_TOKEN as string | undefined

    const res = await fetch(
      `https://api.github.com/users/${USER}/events?per_page=100`,
      {
        headers: ghHeaders(token)
      }
    )

    if (!res.ok) return []

    const events = (await res.json()) as GhEvent[]

    const prTargets = new Map<string, Set<number>>()
    const commitTargets = new Map<string, Set<string>>()

    const addPrTarget = (repo: string, n: number) => {
      if (!prTargets.has(repo)) prTargets.set(repo, new Set())
      prTargets.get(repo)!.add(n)
    }

    const addCommitTarget = (repo: string, oid: string) => {
      if (!commitTargets.has(repo)) commitTargets.set(repo, new Set())
      commitTargets.get(repo)!.add(oid)
    }

    for (const e of events) {
      const repo = e.repo.name

      if (e.type === 'PullRequestEvent') {
        const action = e.payload?.action
        const n = e.payload?.pull_request?.number ?? e.payload?.number
        if (
          typeof n === 'number' &&
          (action === 'opened' || action === 'closed')
        ) {
          addPrTarget(repo, n)
        }
      }

      if (e.type === 'PullRequestReviewEvent') {
        const n = e.payload?.pull_request?.number
        if (typeof n === 'number') addPrTarget(repo, n)
      }

      if (e.type === 'PushEvent' && e.payload?.ref === MAIN) {
        const head: string | undefined = e.payload?.head
        if (head) addCommitTarget(repo, head)
      }
    }

    type PrInfo = {
      number: number
      title: string
      url: string
      author: { login: string } | null
    }

    type CommitInfo = {
      oid: string
      messageHeadline: string
      url: string
      pr: { number: number; title: string; url: string } | null
    }

    const prInfo = new Map<string, PrInfo>()
    const commitInfo = new Map<string, CommitInfo>()

    if (token && (prTargets.size > 0 || commitTargets.size > 0)) {
      const blocks: string[] = []

      const addRepoBlock = (repoFull: string) => {
        const { owner, name } = parseRepo(repoFull)
        const repoAlias = `repo_${aliasSafe(owner)}_${aliasSafe(name)}`

        const prNums = prTargets.get(repoFull)
        const heads = commitTargets.get(repoFull)

        const prs = prNums
          ? Array.from(prNums)
              .map(
                n =>
                  `pr_${n}: pullRequest(number:${n}) { number title url author { login } }`
              )
              .join('\n')
          : ''

        const commits = heads
          ? Array.from(heads)
              .map(oid => {
                const a = `c_${aliasSafe(oid.slice(0, 12))}`
                return `${a}: object(oid:"${oid}") {
                  ... on Commit {
                    oid
                    messageHeadline
                    url
                    associatedPullRequests(first: 1) {
                      nodes { number title url }
                    }
                  }
                }`
              })
              .join('\n')
          : ''

        if (!prs && !commits) return

        blocks.push(`
          ${repoAlias}: repository(owner:"${owner}", name:"${name}") {
            ${prs}
            ${commits}
          }
        `)
      }

      for (const repo of new Set([
        ...prTargets.keys(),
        ...commitTargets.keys()
      ]))
        addRepoBlock(repo)

      const data = await fetchGraphQL<Record<string, any>>(
        `query { ${blocks.join('\n')} }`,
        token
      )

      if (data) {
        for (const repoFull of new Set([
          ...prTargets.keys(),
          ...commitTargets.keys()
        ])) {
          const { owner, name } = parseRepo(repoFull)
          const repoAlias = `repo_${aliasSafe(owner)}_${aliasSafe(name)}`
          const repoData = data[repoAlias]
          if (!repoData) continue

          const prNums = prTargets.get(repoFull)
          if (prNums) {
            for (const n of prNums) {
              const v = repoData[`pr_${n}`]
              if (v) prInfo.set(`${repoFull}#${n}`, v as PrInfo)
            }
          }

          const heads = commitTargets.get(repoFull)
          if (heads) {
            for (const oid of heads) {
              const v = repoData[`c_${aliasSafe(oid.slice(0, 12))}`]
              if (!v) continue

              const node = v as {
                oid: string
                messageHeadline?: string
                url?: string
                associatedPullRequests?: {
                  nodes?: Array<{ number: number; title: string; url: string }>
                }
              }

              const prNode = node.associatedPullRequests?.nodes?.[0] ?? null

              commitInfo.set(`${repoFull}@${oid}`, {
                oid,
                messageHeadline: node.messageHeadline ?? oid.slice(0, 7),
                url: node.url ?? `https://github.com/${repoFull}/commit/${oid}`,
                pr: prNode
                  ? {
                      number: prNode.number,
                      title: prNode.title,
                      url: prNode.url
                    }
                  : null
              })
            }
          }
        }
      }
    }

    const picked = new Map<string, Event>()
    const pickOnce = (key: string, item: Event) => {
      if (!picked.has(key)) picked.set(key, item)
    }

    for (const e of events) {
      const createdAt = e.created_at
      const repo = e.repo.name

      if (e.type === 'WatchEvent' && e.payload?.action === 'started') {
        pickOnce(`star-${repo}`, {
          type: 'star',
          repo,
          url: `https://github.com/${repo}`,
          createdAt,
          key: `star-${repo}`
        })
        continue
      }

      if (e.type === 'CreateEvent' && e.payload?.ref_type === 'repository') {
        pickOnce(`repo_created-${repo}`, {
          type: 'repo_created',
          repo,
          url: `https://github.com/${repo}`,
          createdAt,
          key: `repo_created-${repo}`
        })
        continue
      }

      if (e.type === 'PullRequestEvent') {
        const action = e.payload?.action
        const n = e.payload?.pull_request?.number ?? e.payload?.number

        if (
          typeof n === 'number' &&
          (action === 'opened' || action === 'closed')
        ) {
          const d = prInfo.get(`${repo}#${n}`)
          pickOnce(`${repo}-${n}`, {
            type: 'pr',
            repo,
            number: n,
            action,
            title: d?.title ?? `PR #${n}`,
            url: d?.url ?? `https://github.com/${repo}/pull/${n}`,
            createdAt,
            key: `${repo}-${n}`
          })
        }
        continue
      }

      if (e.type === 'PushEvent' && e.payload?.ref === MAIN) {
        const head: string | undefined = e.payload?.head
        if (!head) continue

        const d = commitInfo.get(`${repo}@${head}`)
        const headline = d?.messageHeadline ?? head.slice(0, 7)

        if (d?.pr) {
          const key = `${repo}-${d.pr.number}`
          pickOnce(key, {
            type: 'merge',
            repo,
            title: `${d.pr.title} (#${d.pr.number})`,
            url: d.pr.url,
            pr: { number: d.pr.number, url: d.pr.url },
            createdAt,
            key
          })
        } else {
          const key = `${repo}-${headline}`
          pickOnce(key, {
            type: 'merge',
            repo,
            title: headline,
            url: d?.url ?? `https://github.com/${repo}/commit/${head}`,
            createdAt,
            key
          })
        }

        continue
      }

      if (e.type === 'PullRequestReviewEvent') {
        const n = e.payload?.pull_request?.number
        if (typeof n !== 'number') continue

        const d = prInfo.get(`${repo}#${n}`)
        if (d?.author?.login === USER) continue

        const stateRaw = String(
          e.payload?.review?.state ?? 'COMMENTED'
        ).toUpperCase()

        const state =
          stateRaw === 'APPROVED'
            ? 'APPROVED'
            : stateRaw === 'CHANGES_REQUESTED'
            ? 'CHANGES_REQUESTED'
            : 'COMMENTED'

        pickOnce(`${repo}-${n}`, {
          type: 'review',
          repo,
          number: n,
          state,
          title: d?.title ?? `PR #${n}`,
          url: d?.url ?? `https://github.com/${repo}/pull/${n}`,
          createdAt,
          key: `${repo}-${n}`
        })
      }
    }

    return Array.from(picked.values())
      .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      .slice(0, 20)
  } catch {
    return []
  }
}
