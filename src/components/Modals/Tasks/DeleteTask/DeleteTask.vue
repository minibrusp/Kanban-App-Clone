<template>
  <h3 class="text-flamingo text-lg font-bold">Delete this task?</h3>

  <p class="text-ship-cove text-[13px] my-6 leading-[23px] font-medium">
    Are you sure you want to delete the ‘Build UI for onboarding flow’ task and its subtasks? This
    action cannot be reversed.
  </p>

  <div class="mt-6 flex flex-col justify-start items-start gap-6">
    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button type="button" variant="danger" size="medium" :onClick="handleDeleteClick">
        <span class="text-alice-blue font-bold text-[13px]">Delete</span>
      </Button>
      <Button type="button" variant="secondary" size="medium" :onClick="handleCancelClick">
        <span class="text-slate-blue font-bold text-[13px]">Cancel</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import Button from '../../../ui/Button'
import type Task from '../../../../types/Task'

import { useKanbanStore } from '../../../../stores/kanbanStore'

const kanbanStore = useKanbanStore()

const props = defineProps({
  task: {
    type: Object as PropType<Task>
  },
  close: Function
})

function handleDeleteClick() {
  console.log('Delete Task Modal: delete button clicked')
  kanbanStore.deleteTask(props.task!)
  props.close!()
}

function handleCancelClick() {
  console.log('Delete Task Modal: cancel button clicked')
  props.close!()
}
</script>
