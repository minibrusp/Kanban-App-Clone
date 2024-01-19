import { defineStore } from 'pinia'
import { ref } from 'vue'
import type Board from '@/types/Board'

export const useKanbanStore = defineStore('kanbanStore', () => {
  const boards = ref<Board[]>([])
  const error = ref('')

  async function getBoards() {
    try {
      const res = await fetch('http://localhost:3000/boards')
      const data = await res.json()

      if (res.ok) boards.value = data
    } catch (error) {
      console.log(error)
      // error.value = error
    }
  }

  return { boards, getBoards, error }
})
