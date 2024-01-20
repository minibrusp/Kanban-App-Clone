<template>
  <li class="text-sm hover:underline cursor-pointer" :class="variant" @click="props.onClick">
    {{ props.text }}
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: String,
  onClick: Function,
  variant: String
})

const variant = computed(() => {
  let result = ''
  switch (props.variant) {
    case 'primary':
      result = 'text-ship-cove'
      break
    case 'danger':
      result = 'text-flamingo'
      break
  }
  return result
})
</script>
