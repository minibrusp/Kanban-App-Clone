<template>
  <button
    :type="buttonType"
    class="group w-full rounded-full"
    :class="variantClass + sizeClass"
    @click="props.onClick"
    :disabled="props.isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  onClick: Function,
  variant: String,
  size: String,
  type: String,
  isDisabled: Boolean
})

const buttonType = computed(() => {
  if (props.type === 'submit') return 'submit'
  else return 'button'
})

const variantClass = computed(() => {
  let result = ''
  switch (props.variant) {
    case 'primary':
      result =
        'bg-slate-blue hover:bg-perano dark:hover:bg-slate-blue disabled:bg-slate-blue/25 disabled:cursor-not-allowed dark:hover:disabled:bg-slate-blue/25 '
      break
    case 'secondary':
      result = 'bg-slate-blue/10 hover:bg-slate-blue/25 dark:bg-alice-blue '
      break
    case 'danger':
      result = 'bg-flamingo hover:bg-flamingo/75 '
      break
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
