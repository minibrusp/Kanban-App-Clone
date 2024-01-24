export default interface Task {
  id: string
  title: string
  description: string
  status: string
  subtasks: subtask[]
}

export interface subtask {
  title: string
  isCompleted: boolean
}
