<script setup lang="ts">
import { onMounted } from 'vue'

// store
import { useKanbanStore } from './stores/kanbanStore'

// components
import Header from './components/Header'

const kanbanStore = useKanbanStore()

onMounted(() => {
  kanbanStore.getBoards()
})

console.log(kanbanStore.boards)
</script>

<template>
  <div class="font-plus-jakarta-sans min-h-screen bg-alice-blue">
    <Header />
  </div>
</template>
