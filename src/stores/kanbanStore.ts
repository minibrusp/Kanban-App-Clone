import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type Board from '@/types/Board'

export const useKanbanStore = defineStore('kanbanStore', () => {
  const boards = ref<Board[]>([])
  const selectedBoard = ref('0')
  const error = ref('')

  // Getters
  // Boards
  const getSelectedBoard = computed(() => {
    const result = boards.value.filter((board) => board.id === selectedBoard.value)
    return result[0]
  })

  const getSelectedBoardColumns = computed(() => {
    return getSelectedBoard.value.columns
  })

  // Mutations
  // Boards

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

  function setSelectedBoard(id: string) {
    selectedBoard.value = id
  }

  return {
    boards,
    getBoards,
    error,
    selectedBoard,
    setSelectedBoard,
    getSelectedBoard,
    getSelectedBoardColumns
  }
})
