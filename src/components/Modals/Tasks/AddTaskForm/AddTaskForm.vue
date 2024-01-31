<template>
  <h3 class="text-lg font-bold">Add New Task</h3>
  <form @submit.prevent="handleSubmit" class="mt-6 flex flex-col justify-start items-start gap-6">
    <Label title="Title">
      <input
        class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
        type="text"
        name="title"
        placeholder="e.g. Take coffee break"
        v-model="task.title"
      />
    </Label>

    <Label title="Description">
      <textarea
        class="w-full border border-ship-cove/30 py-2 px-4 h-28 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded resize-none overflow-y-hidden placeholder:text-ship-cove/50 placeholder:font-light"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        name="description"
        v-model="task.description"
      />
    </Label>

    <Label title="Subtasks">
      <div
        v-for="(subtask, index) in task.subtasks"
        :key="index"
        class="flex flex-row justify-start items-center gap-4 w-full"
      >
        <input
          v-if="task.subtasks.length >= 0"
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
          type="text"
          :placeholder="
            subtasksPlaceholders[index] ? subtasksPlaceholders[index] : 'Your Column name'
          "
          :name="subtask.title"
          v-model="subtask.title"
        />
        <button type="button" @click="handleDeleteSubtask(index)">
          <svg width="15" height="15" fill="#828FA3" xmlns="http://www.w3.org/2000/svg" class="">
            <g fill-rule="evenodd">
              <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
              <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div class="mt-3 w-full">
        <Button variant="secondary" size="medium" :onClick="handleAddSubtask">
          <span class="text-slate-blue font-bold text-[13px]">&plus; Add New Subtask</span>
        </Button>
      </div>
    </Label>

    <Label title="Status">
      <Select name="status" :changeHandler="handleStatusChange">
        <option v-for="column in getSelectedBoard.columns" :key="column.name" :value="column.name">
          {{ column.name }}
        </option>
      </Select>
    </Label>

    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button type="submit" variant="primary" size="medium">
        <span class="text-alice-blue font-bold text-[13px]">Create Task</span>
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '../../../ui/Button'
import Select from '../../../ui/Select'
import Label from '../../../ui/Form/Label'

import { reactive } from 'vue'
import { useKanbanStore } from '../../../../stores/kanbanStore'

import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoard } = storeToRefs(kanbanStore)

const props = defineProps({
  close: Function
})

const task = reactive({
  id: '',
  title: '',
  description: '',
  status: JSON.parse(JSON.stringify(getSelectedBoard.value.columns[0].name)),
  subtasks: []
})

const subtasksPlaceholders = {
  0: 'e.g. Todo...',
  1: 'e.g. Doing...',
  2: 'e.g. Done...'
}

function handleAddSubtask() {
  console.log('Add new column clicked')
  task.subtasks.push({ title: '', isCompleted: false })
}

function handleDeleteSubtask(index: number) {
  console.log('Delete column clicked')
  task.subtasks.splice(index, 1)
}

function handleStatusChange(value: string) {
  console.log('Status changed')
  console.log(value)
  task.status = value
}

function handleSubmit() {
  console.log('Create Task clicked')
  console.log(task)

  kanbanStore.addNewTask(task)
  props.close()
}
</script>
