export enum EventAction {
  Opened = 'opened',
  Closed = 'closed',
  Started = 'started'
}

enum EventType {
  WatchEvent = 'WatchEvent',
  CreateEvent = 'CreateEvent',
  PullRequestEvent = 'PullRequestEvent',
  PullRequestReviewEvent = 'PullRequestReviewEvent',
  PushEvent = 'PushEvent'
}

export enum EventReviewState {
  Commented = 'commented',
  Approved = 'approved',
  ChangesRequested = 'changes_requested'
}

interface EventRepo {
  name: string
}

interface EventPullRequest {
  html_url: string
  title: string
  body: string
  draft: boolean
  merged: boolean
  number: number
  user: {
    login: string
  }
}

interface EventReview {
  state: EventReviewState
}

interface EventPayload {
  action: EventAction
}

interface CreateEventPayload {
  ref_type: string
}

interface PullRequestEventPayload extends EventPayload {
  pull_request: EventPullRequest
}

interface PushEventPayload {
  ref: string
  commits: {
    sha: string
    message: string
  }[]
}

interface PullRequestReviewEventPayload {
  pull_request: EventPullRequest
  review: EventReview
}

export interface Event {
  type: EventType
  repo: EventRepo
  created_at: string
}

interface WatchEvent extends Event {
  payload: EventPayload
}

interface CreateEvent extends Event {
  payload: CreateEventPayload
}

interface PullRequestEvent extends Event {
  payload: PullRequestEventPayload
}

interface PushEvent extends Event {
  payload: PushEventPayload
}

interface PullRequestReviewEvent extends Event {
  payload: PullRequestReviewEventPayload
}

export const isWatchEvent = (event: Event): event is WatchEvent =>
  event.type === EventType.WatchEvent

export const isCreateEvent = (event: Event): event is CreateEvent =>
  event.type === EventType.CreateEvent

export const isPullRequestEvent = (event: Event): event is PullRequestEvent =>
  event.type === EventType.PullRequestEvent

export const isPushEvent = (event: Event): event is PushEvent =>
  event.type === EventType.PushEvent

export const isPullRequestReviewEvent = (
  event: Event
): event is PullRequestReviewEvent =>
  event.type === EventType.PullRequestReviewEvent
