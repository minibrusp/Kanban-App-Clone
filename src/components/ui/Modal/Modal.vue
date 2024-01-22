<template>
  <teleport to="#modals">
    <div
      class="backdrop font-plus-jakarta-sans bg-black-rock/50 fixed top-0 left-0 flex justify-center items-center w-full h-screen"
      @click="props.close"
      v-if="props.isOpen"
    >
      <div
        class="modal bg-white rounded-xl shadow-lg max-w-[345px] w-full"
        :class="modalVariantClass"
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
      result = 'py-4 '
      break
    default:
      result = 'p-6 '
      break
  }
  return result
})
</script>
