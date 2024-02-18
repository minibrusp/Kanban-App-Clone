<template>
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-lg font-bold text-black-russian dark:text-alice-blue">
      {{ props.task!.title }}
    </h3>
    <TaskMenu :task="task" />
  </div>

  <div class="mt-6">
    <p class="text-[13px] font-medium leading-[23px] text-ship-cove">{{ task!.description }}</p>
  </div>

  <FieldSet
    :name="'Subtasks (' + props.completedSubtasks + ' of ' + props.task!.subtasks.length + ')'"
  >
    <div class="flex flex-col justify-start items-center gap-2">
      <Checkbox
        v-for="subtask in props.task!.subtasks"
        :key="subtask.title"
        :name="subtask.title"
        :isCompeleted="subtask.isCompleted"
        :onChange="handleSubtaskIsCompleted"
      />
    </div>
  </FieldSet>

  <FieldSet name="Current Status">
    <Select name="status" :changeHandler="handleStatusChange">
      <option
        v-for="status in getSelectedBoardColumns"
        :key="status.id"
        :value="status.name"
        :selected="props.task!.status === status.name ? true : false"
      >
        {{ status.name }}
      </option>
    </Select>
  </FieldSet>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type Task from '../../../../types/Task'
import TaskMenu from './TaskMenu'
import FieldSet from '../../../ui/Form/FieldSet'
import Checkbox from '../../../ui/Form/Checkbox'
import Select from '../../../ui/Select'

import { useKanbanStore } from '../../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoardColumns } = storeToRefs(kanbanStore)

const props = defineProps({
  task: {
    type: Object as PropType<Task>
  },
  completedSubtasks: Number
})

function handleStatusChange(newStatus: string) {
  console.log('status changed ' + newStatus)
  kanbanStore.setTaskStatus(props.task!, newStatus)
}

function handleSubtaskIsCompleted(subtaskTitle: string) {
  console.log('subtask isCompleted changed ')
  console.log(subtaskTitle)

  kanbanStore.toggleSubtaskIsCompleted(props.task!, subtaskTitle)
}
</script>
