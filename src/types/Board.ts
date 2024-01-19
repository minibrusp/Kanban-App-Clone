import type Column from './Column'

export default interface Board {
  id: string
  name: string
  columns: Column[]
}
