export default interface Task {
  id: string
  title: string
  description: string
  status: string
  subtasks: subtask[]
}

interface subtask {
  title: string
  isCompleted: true
}
