<template>
  <fieldset
    class="w-full"
    :class="props.variant ? 'flex flex-col justify-start items-start gap-2' : 'mt-6'"
  >
    <legend
      class="text-xs text-ship-cove font-bold dark:text-alice-blue"
      :class="props.variant ? 'mb-2' : 'mb-4'"
    >
      {{ props.name }}
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  variant: String
})
</script>
