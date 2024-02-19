<template>
  <h3 class="text-lg font-bold text-black-russian dark:text-alice-blue">Add New Column</h3>
  <form @submit.prevent="submit" class="mt-6 flex flex-col justify-start items-start gap-6">
    <Label title="Name">
      <input
        class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light dark:bg-black-rock dark:text-alice-blue"
        type="text"
        name="name"
        placeholder="e.g. Take coffee break"
        v-model="board.name"
        required
      />
    </Label>

    <Label title="Columns">
      <div
        v-for="(column, index) in board.columns"
        :key="index"
        class="flex flex-row justify-start items-center gap-4 w-full"
      >
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light dark:bg-black-rock dark:text-alice-blue"
          type="text"
          :placeholder="
            columnsPlaceholders[index] ? columnsPlaceholders[index] : 'Your Column name'
          "
          v-model="column.name"
          :name="column.name"
          required
        />
        <button type="button" @click="handleDeleteColumn(index)">
          <svg width="15" height="15" fill="#828FA3" xmlns="http://www.w3.org/2000/svg" class="">
            <g fill-rule="evenodd">
              <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
              <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
            </g>
          </svg>
        </button>
      </div>

      <div class="mt-3 w-full">
        <Button variant="secondary" size="medium" :onClick="handleAddColumn">
          <span class="text-slate-blue font-bold text-[13px]">&plus; Add New Column</span>
        </Button>
      </div>
    </Label>

    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button type="submit" variant="primary" size="medium">
        <span class="text-alice-blue font-bold text-[13px]">Save Changes</span>
      </Button>
      <Button variant="secondary" size="medium" :onClick="handleCancelForm">
        <span class="text-slate-blue font-bold text-[13px]">Cancel</span>
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useKanbanStore } from '../../../../stores/kanbanStore'

import Button from '../../../ui/Button'
import Label from '../../../ui/Form/Label'

import type Board from '../../../../types/Board'

import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoard } = storeToRefs(kanbanStore)

const props = defineProps({
  close: Function
})

const board: Board = reactive({
  id: JSON.parse(JSON.stringify(getSelectedBoard.value.id)),
  name: JSON.parse(JSON.stringify(getSelectedBoard.value.name)),
  columns: JSON.parse(JSON.stringify(getSelectedBoard.value.columns))
})

const columnsPlaceholders = ['e.g. Todo...', 'e.g. Doing...', 'e.g. Done...']

function handleAddColumn() {
  console.log('Add new column clicked')
  board.columns.push({ id: board.columns.length.toString(), name: '', tasks: [] })
}

function handleDeleteColumn(index: number) {
  console.log('Delete column clicked')
  board.columns.splice(index, 1)
  board.columns = board.columns.map((column, index) => {
    return {
      ...column,
      id: index.toString()
    }
  })
}

function handleCancelForm() {
  props.close!()
}

function submit() {
  console.log('Add new Column Board form Submit clicked')
  kanbanStore.editBoard(board)
  props.close!()
}
</script>
