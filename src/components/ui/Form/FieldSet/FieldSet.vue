<template>
  <fieldset class="w-full mt-6">
    <legend class="text-xs text-ship-cove font-bold mb-4">{{ props.name }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String
})
</script>
