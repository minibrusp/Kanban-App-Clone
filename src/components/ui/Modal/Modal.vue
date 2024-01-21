<template>
  <teleport to="#modals">
    <div
      class="backdrop font-plus-jakarta-sans bg-black-rock/50 fixed top-0 left-0 flex justify-center items-center w-full h-screen"
      @click="props.close"
      v-if="props.isOpen"
    >
      <div
        class="modal bg-white p-6 rounded-xl shadow-lg max-w-[345px] w-full"
        @click="(event) => event.stopPropagation()"
      >
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
  close: Function
})
</script>
