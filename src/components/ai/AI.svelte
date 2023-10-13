<script lang="ts">
  import { onMount, tick } from 'svelte'
  import {
    open,
    loaded,
    enabled,
    chatHistory,
    typing,
    sendMessage,
    LANGUAGE_GREETINGS
  } from '../../stores/ai'
  import { fade, fly } from 'svelte/transition'
  import Message from './Message.svelte'

  let chat: HTMLDivElement
  let input: HTMLInputElement
  let message = ''

  onMount(async () => {
    await tick()
    if (!$chatHistory.length) {
      const greetingMessage = navigator
        ? LANGUAGE_GREETINGS[navigator.language] ||
          LANGUAGE_GREETINGS[navigator.language.split('-')[0]] ||
          LANGUAGE_GREETINGS['en']
        : LANGUAGE_GREETINGS['en']

      chatHistory.set([
        {
          role: 'ai',
          message: greetingMessage
        }
      ])
    }
    loaded.set(true)
  })

  const send = () => {
    if (!message || $typing) return

    chatHistory.set([
      ...$chatHistory,
      {
        role: 'user',
        message
      }
    ])

    setTimeout(() => {
      sendMessage(message)
      message = ''

      setTimeout(
        () =>
          chat.scroll({
            top: chat.scrollHeight,
            behavior: 'smooth'
          }),
        100
      )
    }, 200)
  }

  $: input && input.focus()
</script>

<div class="absolute inset-0 z-10 pointer-events-none">
  {#if $open && $enabled}
    <div
      class="flex flex-col pointer-events-auto fixed bottom-0 right-0 bg-neutral-800 p-2 rounded-lg shadow-lg w-[90vw] h-[80vh] m-4 md:w-80 md:max-h-[600px]"
      transition:fly={{ duration: 500, y: 100 }}
    >
      <div class="flex justify-between items-center mb-2">
        <div class="flex items-center gap-1">
          <slot name="image-small" />
          <h2 class="md:text-xl">Nuno Góis AI</h2>
        </div>
        <button
          class="bg-neutral-700 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center md:text-xl"
          on:click={() => open.set(false)}
        >
          <slot name="close-icon" />
        </button>
      </div>
      <div
        class="flex flex-col text-sm gap-2 bg-slate-900 flex-1 rounded-lg p-4 overflow-scroll scroll-smooth"
        bind:this={chat}
      >
        {#each $chatHistory as { role, message }}
          <Message isReply={role === 'ai'}>
            <slot name="ai-icon" slot="ai-icon" />
            <slot name="user-icon" slot="user-icon" />
            {message}
          </Message>
        {/each}
        {#if $typing}
          <p transition:fade>Nuno is typing...</p>
        {/if}
      </div>
      <form
        class="flex text-sm mt-2 p-2 bg-neutral-800 border border-neutral-400 rounded-md focus-within:border-neutral-50"
        on:submit|preventDefault={send}
      >
        <input
          class="bg-transparent w-full focus:outline-none"
          placeholder="Type your message here..."
          bind:value={message}
          bind:this={input}
        />
        <button
          class="bg-neutral-700 rounded-full flex items-center justify-center"
        >
          <slot name="send-icon" />
        </button>
      </form>
    </div>
  {:else if $loaded && $enabled}
    <div
      class="pointer-events-auto transition-all duration-500 fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-gradient-to-tr from-blue-800 via-green-800 to-yellow-800 hover:animate-textHue focus:animate-textHue rounded-full w-16 h-16"
      transition:fly={{ duration: 500, y: 100 }}
    >
      <button
        class="bg-neutral-800 shadow-button hover:bg-opacity-70 focus:bg-opacity-70 text-white rounded-full"
        on:click={() => open.set(true)}
      >
        <slot name="image" />
      </button>
    </div>
  {/if}
</div>
