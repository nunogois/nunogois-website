export type Event =
  | {
      type: 'star'
      repo: string
      url: string
      createdAt: string
      key: string
    }
  | {
      type: 'repo_created'
      repo: string
      url: string
      createdAt: string
      key: string
    }
  | {
      type: 'pr'
      repo: string
      url: string
      title: string
      number: number
      action: 'opened' | 'closed'
      createdAt: string
      key: string
    }
  | {
      type: 'review'
      repo: string
      url: string
      title: string
      number: number
      state: 'APPROVED' | 'CHANGES_REQUESTED' | 'COMMENTED'
      createdAt: string
      key: string
    }
  | {
      type: 'merge'
      repo: string
      url: string
      title: string
      createdAt: string
      key: string
      pr?: {
        number: number
        url: string
      }
    }
