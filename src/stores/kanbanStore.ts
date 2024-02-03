import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type Board from '@/types/Board'
import type Task from '@/types/Task'

const BOARDS_LOCAL_STORAGE_KEY = 'boards'

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
    const localStorageBoard = localStorage.getItem(BOARDS_LOCAL_STORAGE_KEY)

    if (localStorageBoard) {
      boards.value = JSON.parse(localStorageBoard)
      return
    }

    try {
      const res = await fetch('http://localhost:3000/boards')
      const data = await res.json()

      if (res.ok) {
        boards.value = data
        saveBoardToLocalStorage()
      }
    } catch (error) {
      console.log(error)
      // error.value = error
    }
  }

  function setSelectedBoard(id: string) {
    selectedBoard.value = id
  }

  function saveBoardToLocalStorage() {
    localStorage.setItem(BOARDS_LOCAL_STORAGE_KEY, JSON.stringify(boards.value))
  }

  function createNewBoard(board: object) {
    loading.value = true
    const id = uuidv4()
    const newBoard = { id, ...board } as Board
    boards.value = [...boards.value, newBoard]

    saveBoardToLocalStorage()

    setSelectedBoard(id)

    loading.value = false
  }

  function editBoard(newBoard: Board) {
    loading.value = true

    boards.value = boards.value.map((board) => {
      if (board.id !== newBoard.id) return board
      else return newBoard
    })

    saveBoardToLocalStorage()

    loading.value = false
  }

  function deleteBoard() {
    const id = getSelectedBoard.value.id
    boards.value = boards.value.filter((board) => board.id !== id)
    setSelectedBoard('0')

    saveBoardToLocalStorage()
  }

  // Tasks

  function addNewTask(task: Task) {
    const selectedBoardId = getSelectedBoard.value.id
    const taskId = uuidv4()

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== task.status) return column
          return {
            ...column,
            tasks: [...column.tasks, { ...task, id: taskId }]
          }
        })
      }
    })

    saveBoardToLocalStorage()
  }

  function deleteTask(currentTask: Task) {
    const selectedBoardId = getSelectedBoard.value.id

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== currentTask.status) return column
          return {
            ...column,
            tasks: column.tasks.filter((task) => {
              return task.id !== currentTask.id
            })
          }
        })
      }
    })

    saveBoardToLocalStorage()
  }

  function editTask(editedTask: Task, oldTask: Task) {
    const selectedBoardId = getSelectedBoard.value.id

    setTaskStatus(oldTask, editedTask.status)

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (editedTask.status !== column.name) return column
          return {
            ...column,
            tasks: column.tasks.map((task) => {
              if (column.tasks.length > 0) {
                if (task.id !== editedTask.id) return task
                return editedTask
              }
              return editedTask
            })
          }
        })
      }
    })

    saveBoardToLocalStorage()
  }

  function setTaskStatus(currentTask: Task, newStatus: string) {
    const selectedBoardId = getSelectedBoard.value.id

    deleteTask(currentTask)

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== newStatus) return column
          return {
            ...column,
            tasks: [...column.tasks, { ...currentTask, status: newStatus } as Task]
          }
        })
      }
    })

    saveBoardToLocalStorage()
  }

  // subtasks

  function toggleSubtaskIsCompleted(currentTask: Task, subtaskTitle: string) {
    const selectedBoardId = getSelectedBoard.value.id

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== currentTask.status) return column
          return {
            ...column,
            tasks: column.tasks.map((task) => {
              if (task.id !== currentTask.id) return task
              return {
                ...task,
                subtasks: [
                  ...task.subtasks.map((subtask) => {
                    if (subtask.title !== subtaskTitle) return subtask
                    return {
                      ...subtask,
                      isCompleted: !subtask.isCompleted
                    }
                  })
                ]
              }
            })
          }
        })
      }
    })

    saveBoardToLocalStorage()
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
    addNewTask,
    editTask,
    deleteTask,
    setTaskStatus,
    toggleSubtaskIsCompleted
  }
})
