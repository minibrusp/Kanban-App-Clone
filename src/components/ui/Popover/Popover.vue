<template>
  <div class="relative" v-on-click-outside="closeMenu">
    <button
      class="p-2 disabled:cursor-not-allowed disabled:opacity-50"
      @click="toggleMenu"
      :disabled="props.isDisabled ? true : false"
    >
      <slot name="icon" />
    </button>
    <ul
      v-if="isOpen"
      class="bg-white absolute block mt-5 right-2 top-8 p-4 shadow-md rounded-lg cursor-default w-[192px] z-50 dark:bg-black-rock dark:text-alice-blue"
      @click="handleClick"
    >
      <slot name="popmenu" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const isOpen = ref(false)

const props = defineProps({
  isDisabled: Boolean
})

function toggleMenu() {
  isOpen.value = !isOpen.value
  console.log('menu toggled')
}

function closeMenu() {
  if (!isOpen.value) return
  isOpen.value = false
  console.log('menu closed')
}

function handleClick(event: Event) {
  event.stopPropagation()
  closeMenu()
}
</script>
