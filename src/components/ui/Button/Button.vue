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
  }
  return result
})

const sizeClass = computed(() => {
  let result = ''
  switch (props.size) {
    case 'large':
      result = 'py-3.5 px-6'
  }
  return result
})
</script>
