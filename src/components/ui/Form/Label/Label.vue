<template>
  <label
    class="flex flex-col justify-start items-start gap-2 w-full"
    :id="'#' + title?.toLowerCase()"
  >
    <span class="text-xs text-ship-cove font-bold dark:text-alice-blue">{{ props.title }}</span>
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>
