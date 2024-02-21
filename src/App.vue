<script setup lang="ts">
import { onMounted } from 'vue'

// store
import { useKanbanStore } from './stores/kanbanStore'

// components
import Header from './components/Header'
import Main from './components/Main'

const kanbanStore = useKanbanStore()

onMounted(() => {
  kanbanStore.getBoards()
  kanbanStore.checkThemeInLocalStorage()
})

console.log(kanbanStore.boards)
</script>

<template>
  <div
    class="font-plus-jakarta-sans min-h-screen flex flex-col bg-alice-blue dark:bg-black-russian"
  >
    <Header />
    <Main />
  </div>
</template>
