<template>
  <button class="w-full rounded-full" :class="variantClass + sizeClass" @click="props.onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  onClick: Function,
  variant: String,
  size: String
})

const variantClass = computed(() => {
  let result = ''
  switch (props.variant) {
    case 'primary':
      result = 'bg-slate-blue hover:bg-perano '
      break
    case 'secondary':
      result = 'bg-slate-blue/10 hover:bg-slate-blue/25 '
  }
  return result
})

const sizeClass = computed(() => {
  let result = ''
  switch (props.size) {
    case 'large':
      result = 'py-2 px-[18px] sm:py-3.5 sm:px-6'
      break
    case 'medium':
      result = 'py-2'
  }
  return result
})
</script>
