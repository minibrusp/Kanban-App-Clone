<template>
  <teleport to="#modals">
    <div
      class="backdrop font-plus-jakarta-sans bg-black-rock/50 fixed top-0 left-0 flex justify-center items-center w-full h-screen"
      @click="props.close"
      v-if="props.isOpen"
    >
      <div
        class="modal bg-white rounded-xl shadow-lg w-full max-h-[95vh] overflow-y-auto dark:bg-black-rock"
        :class="modalVariantClass "
        @click="(event) => event.stopPropagation()"
      >
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  close: Function,
  variant: String
})

const modalVariantClass = computed(() => {
  let result = ''
  switch (props.variant) {
    case 'boards':
      result = 'py-4 max-w-[264px]'
      break
    default:
      result = 'p-6 mx-4 sm:w-[480px]'
      break
  }
  return result
})
</script>

<style>
  .modal::-webkit-scrollbar-track {
    @apply rounded-r-xl;
  }

  .modal::-webkit-scrollbar-thumb {
    @apply bg-slate-blue rounded-l-lg rounded-r-xl;
  }
</style>
