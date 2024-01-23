<template>
  <div class="relative" v-on-click-outside="closeMenu">
    <button class="p-2" @click="toggleMenu">
      <slot name="icon" />
    </button>
    <ul
      v-if="isOpen"
      class="bg-white absolute block mt-5 right-2 top-8 p-4 shadow-md rounded-lg cursor-default w-[192px] z-50"
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

function toggleMenu() {
  isOpen.value = !isOpen.value
  console.log('menu toggled')
}

function closeMenu() {
  if (!isOpen.value) return
  isOpen.value = false
  console.log('menu closed')
}

function handleClick(event) {
  event.stopPropagation()
  closeMenu()
}
</script>
