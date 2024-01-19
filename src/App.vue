<script setup lang="ts">
import { onMounted } from 'vue'
import { useKanbanStore } from './stores/kanbanStore'

const kanbanStore = useKanbanStore()

onMounted(() => {
  kanbanStore.getBoards()
})

console.log(kanbanStore.boards)
</script>

<template>
  <div class="font-plus-jakarta-sans">
    <h1 class="text-3xl font-bold underline text-sky-500">Hello</h1>
  </div>
</template>
