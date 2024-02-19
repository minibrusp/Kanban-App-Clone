<template>
  <h3 class="text-lg font-bold text-black-russian dark:text-alice-blue">Edit Task</h3>
  <form @submit.prevent="handleSubmit" class="mt-6 flex flex-col justify-start items-start gap-6">
    <Label title="Title">
      <input
        class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light dark:bg-black-rock dark:text-alice-blue"
        type="text"
        name="title"
        placeholder="e.g. Take coffee break"
        v-model="localTask.title"
        required
      />
    </Label>

    <Label title="Description">
      <textarea
        class="w-full border border-ship-cove/30 py-2 px-4 h-28 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded resize-none overflow-y-hidden placeholder:text-ship-cove/50 placeholder:font-light dark:bg-black-rock dark:text-alice-blue"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        name="description"
        v-model="localTask.description"
        required
      />
    </Label>

    <Label title="Subtasks">
      <div
        v-for="(subtask, index) in localTask.subtasks"
        :key="index"
        class="flex flex-row justify-start items-center gap-4 w-full"
      >
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light dark:bg-black-rock dark:text-alice-blue"
          type="text"
          :placeholder="
            subtasksPlaceholders[index] ? subtasksPlaceholders[index] : 'Your Column name'
          "
          v-model="subtask.title"
          :name="subtask.title"
          required
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
        <Button type="button" variant="secondary" size="medium" :onClick="handleAddSubtask">
          <span class="text-slate-blue font-bold text-[13px]">&plus; Add New Subtask</span>
        </Button>
      </div>
    </Label>

    <Label title="Status">
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
    </Label>

    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button type="submit" variant="primary" size="medium">
        <span class="text-alice-blue font-bold text-[13px]">Save Changes</span>
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { type PropType, reactive } from 'vue'
import type Task from '../../../../types/Task'
import Button from '../../../ui/Button'
import Label from '../../../ui/Form/Label'
import Select from '../../../ui/Select'

import { useKanbanStore } from '../../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoardColumns } = storeToRefs(kanbanStore)

const props = defineProps({
  task: {
    type: Object as PropType<Task>
  },
  close: Function
})

const localTask: Task = reactive({
  id: JSON.parse(JSON.stringify(props.task!.id)),
  title: JSON.parse(JSON.stringify(props.task!.title)),
  description: JSON.parse(JSON.stringify(props.task!.description)),
  status: JSON.parse(JSON.stringify(props.task!.status)),
  subtasks: JSON.parse(JSON.stringify(props.task!.subtasks))
})

const subtasksPlaceholders = ['e.g. Todo...', 'e.g. Doing...', 'e.g. Done...']

function handleAddSubtask() {
  console.log('Add new column clicked')
  localTask.subtasks.push({ title: '', isCompleted: false })
}

function handleDeleteSubtask(index: number) {
  console.log('Delete column clicked')
  localTask.subtasks.splice(index, 1)
}

function handleStatusChange(value: string) {
  console.log('Status changed')
  console.log(value)
  localTask.status = value
}

function handleSubmit() {
  console.log('Create Task clicked')
  kanbanStore.editTask(localTask, props.task!)
  props.close!()
}
</script>
