import { atom } from 'nanostores'
import { UnleashClient } from 'unleash-proxy-client'

interface Message {
  role: 'ai' | 'user'
  message: string
}

export const enabled = atom(false)
export const open = atom(false)
export const loaded = atom(false)
export const chatHistory = atom<Message[]>([
  { role: 'ai', message: `Hi! My name is Nuno, how may I help?` }
])
export const typing = atom(false)

export const sendMessage = async (query: string) => {
  typing.set(true)

  let reply = `Sorry, I'm a bit tired for today. Let's try again tomorrow?`

  try {
    const response = await fetch(import.meta.env.PUBLIC_AI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        chat_history: chatHistory.get().slice(0, -1)
      })
    })

    reply = await response.text()
  } catch (e) {}

  typing.set(false)

  setTimeout(
    () =>
      chatHistory.set([...chatHistory.get(), { role: 'ai', message: reply }]),
    200
  )
}

if (
  import.meta.env.PUBLIC_UNLEASH_URL &&
  import.meta.env.PUBLIC_UNLEASH_TOKEN
) {
  const unleash = new UnleashClient({
    url: import.meta.env.PUBLIC_UNLEASH_URL,
    clientKey: import.meta.env.PUBLIC_UNLEASH_TOKEN,
    refreshInterval: 15,
    appName: 'nunogois-website'
  })

  unleash.start()

  unleash.on('update', () => enabled.set(unleash.isEnabled('nunogois-ai-bun')))
}
