<script lang="ts">
  import { fly } from 'svelte/transition'

  export let isReply = false
</script>

<div
  class={`flex items-end gap-1 ${isReply ? 'justify-start' : 'justify-end'}`}
>
  {#if isReply}
    <slot name="ai-icon" />
  {/if}
  <div
    class={`relative p-2 rounded-md before:absolute before:bottom-0 before:content-[""] before:w-0 before:h-0 before:border-b-8 ${
      isReply
        ? 'bg-neutral-800 rounded-bl-none before:border-neutral-800 before:border-l-4 before:border-l-transparent before:right-full'
        : 'bg-neutral-700 rounded-br-none before:border-neutral-700 before:border-r-4 before:border-r-transparent before:left-full'
    }`}
    transition:fly={{ duration: 200, y: 20 }}
  >
    <p class="break-words whitespace-pre-wrap"><slot /></p>
  </div>
  {#if !isReply}
    <slot name="user-icon" />
  {/if}
</div>
