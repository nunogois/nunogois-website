import {
  type Event,
  EventAction,
  isPullRequestEvent,
  isWatchEvent,
  isCreateEvent,
  isPushEvent,
  isPullRequestReviewEvent
} from '../types'

const MAIN = 'refs/heads/main'

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch(
      'https://api.github.com/users/nunogois/events?per_page=100'
    )

    const events: Event[] = await res.json()

    const eventMap = new Map<string, Event>()

    events.forEach(event => {
      if (isWatchEvent(event) && event.payload.action === EventAction.Started) {
        const key = `${event.type}-${event.repo.name}`
        if (!eventMap.has(key)) eventMap.set(key, event)
      } else if (
        isCreateEvent(event) &&
        event.payload.ref_type === 'repository'
      ) {
        const key = `${event.type}-${event.repo.name}`
        if (!eventMap.has(key)) eventMap.set(key, event)
      } else if (
        isPullRequestEvent(event) &&
        (event.payload.action === EventAction.Opened ||
          event.payload.action === EventAction.Closed)
      ) {
        const key = `${event.repo.name}-${event.payload.pull_request.number}`
        if (!eventMap.has(key)) eventMap.set(key, event)
      } else if (isPushEvent(event) && event.payload.ref === MAIN) {
        const commitMessage =
          event.payload.commits[event.payload.commits.length - 1].message
        const key = commitMessage.includes('(#')
          ? `${event.repo.name}-${commitMessage.split(')\n')[0].split('#')[1]}`
          : `${event.repo.name}-${commitMessage.split('\n')[0]}`
        if (!eventMap.has(key)) eventMap.set(key, event)
      } else if (
        isPullRequestReviewEvent(event) &&
        event.payload.pull_request.user.login !== 'nunogois'
      ) {
        const key = `${event.repo.name}-${event.payload.pull_request.number}`
        if (!eventMap.has(key)) eventMap.set(key, event)
      }
    })

    return Array.from(eventMap.values())
      .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at))
      .slice(0, 20)
  } catch {
    return []
  }
}
