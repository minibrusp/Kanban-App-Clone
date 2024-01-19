import type Task from './Task'

export default interface Column {
  id: string
  name: string
  tasks: Task[]
}
