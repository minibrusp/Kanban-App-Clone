import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type Board from '@/types/Board'
import type Task from '@/types/Task'

export const useKanbanStore = defineStore('kanbanStore', () => {
  const boards = ref<Board[]>([])
  const selectedBoard = ref('0')
  const error = ref('')
  const loading = ref(false)

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

  function createNewBoard(board: object) {
    loading.value = true
    const id = boards.value.length.toString()
    const newBoard = { id, ...board } as Board
    boards.value = [...boards.value, newBoard]
    loading.value = false
  }

  function editBoard(newBoard: Board) {
    loading.value = true

    boards.value = boards.value.map((board) => {
      if (board.id !== newBoard.id) return board
      else return newBoard
    })

    loading.value = false
  }

  function deleteBoard() {
    const id = getSelectedBoard.value.id
    boards.value = boards.value.filter((board) => board.id !== id)
    setSelectedBoard('0')
  }

  // Tasks

  function addNewTask(task: Task) {
    const selectedBoardId = getSelectedBoard.value.id

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== task.status) return column
          return {
            ...column,
            tasks: [...column.tasks, task]
          }
        })
      }
    })
  }

  return {
    boards,
    getBoards,
    error,
    selectedBoard,
    setSelectedBoard,
    getSelectedBoard,
    getSelectedBoardColumns,
    createNewBoard,
    editBoard,
    deleteBoard,
    addNewTask
  }
})
