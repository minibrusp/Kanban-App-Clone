import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type Board from '@/types/Board'
import type Task from '@/types/Task'

const BOARDS_LOCAL_STORAGE_KEY = 'boards'
const THEME_LOCAL_STORAGE_KEY = 'theme'

export const useKanbanStore = defineStore('kanbanStore', () => {
  const boards = ref<Board[] | []>([])
  const selectedBoard = ref<string | null>(null)
  const error = ref('')
  const loading = ref(false)
  const isDarkTheme = ref(false)

  // Getters
  // Boards
  const getSelectedBoard = computed(() => {
    const result = boards.value.filter((board) => board.id === selectedBoard.value)
    return result[0]
  })

  const getSelectedBoardColumns = computed(() => {
    return getSelectedBoard.value?.columns
  })

  const isSelectedBoardEmpty = computed(() => {
    return getSelectedBoard.value?.columns.length <= 0 ? true : false
  })

  const isBoardsEmpty = computed(() => {
    return boards.value.length <= 0 ? true : false
  })

  // Mutations
  // Boards

  async function getBoards() {
    const localStorageBoard = localStorage.getItem(BOARDS_LOCAL_STORAGE_KEY)

    if (localStorageBoard) {
      boards.value = JSON.parse(localStorageBoard)
      selectedBoard.value = boards.value.length ? `${boards.value[0].id}` : null
      return
    }

    try {
      // const res = await fetch('http://localhost:3000/boards')

      const headers = {
        'X-Master-Key': '$2a$10$VCATkMaDj7LDlb91HqUn0.Df9UIi.z41OI2Em7do7yDbHz.F.qVje',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }

      const res = await fetch(`https://api.jsonbin.io/v3/b/65d26d96266cfc3fde8c12af`, {
        method: 'GET',
        headers: headers
      })

      const data = await res.json()

      if (res.ok) {
        // boards.value = data
        boards.value = data.record.boards
        selectedBoard.value = boards.value.length ? `${boards.value[0].id}` : null
        saveBoardToLocalStorage()
      }
    } catch (error) {
      console.log(error)
      // error.value = error
    }
  }

  function setSelectedBoard(id: string | null) {
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
    if (boards.value.length > 0) setSelectedBoard(boards.value[0].id)
    else {
      setSelectedBoard(null)
      boards.value = []
    }
    boards.value = boards.value.filter((board) => board.id !== id)

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

  function sortTask(columnName: string, targetTask: Task) {
    const selectedBoardId = getSelectedBoard.value.id

    boards.value = boards.value.map((board) => {
      if (board.id !== selectedBoardId) return board
      return {
        ...board,
        columns: board.columns.map((column) => {
          if (column.name !== columnName) return column
          return {
            ...column,
            tasks: column.tasks.map((task) => {
              if (task.id !== targetTask.id) return task
              return {
                ...task,
                status: columnName
              }
            })
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
                    if (subtask.title.toLowerCase() !== subtaskTitle) return subtask
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

  // color theme

  function checkThemeInLocalStorage() {
    const localStorageTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

    if (localStorageTheme) {
      isDarkTheme.value = JSON.parse(localStorageTheme)

      isDarkTheme.value == true ? toggleDarkClassToBody() : (isDarkTheme.value = false)
    }
    saveThemeToLocalStorage()
  }

  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value
    toggleDarkClassToBody()
  }

  function toggleDarkClassToBody() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
    saveThemeToLocalStorage()
  }

  function saveThemeToLocalStorage() {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, JSON.stringify(isDarkTheme.value))
  }

  return {
    boards,
    getBoards,
    error,
    selectedBoard,
    setSelectedBoard,
    getSelectedBoard,
    getSelectedBoardColumns,
    isSelectedBoardEmpty,
    isBoardsEmpty,
    isDarkTheme,
    createNewBoard,
    editBoard,
    deleteBoard,
    addNewTask,
    editTask,
    deleteTask,
    setTaskStatus,
    sortTask,
    toggleSubtaskIsCompleted,
    saveBoardToLocalStorage,
    checkThemeInLocalStorage,
    toggleTheme
  }
})
