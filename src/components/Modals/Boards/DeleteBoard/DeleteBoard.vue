<template>
  <h3 class="text-flamingo text-lg font-bold">Delete this board?</h3>

  <p class="text-ship-cove text-[13px] my-6 leading-[23px] font-medium">
    Are you sure you want to delete the ‘Roadmap’ board? This action will remove all columns and
    tasks and cannot be reversed.
  </p>

  <div class="mt-6 flex flex-col justify-start items-start gap-6">
    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button variant="danger" size="medium" :onClick="handleDelete">
        <span class="text-alice-blue font-bold text-[13px]">Delete</span>
      </Button>
      <Button variant="secondary" size="medium" :onClick="props.close">
        <span class="text-slate-blue font-bold text-[13px]">Cancel</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../ui/Button'

import { useKanbanStore } from '../../../../stores/kanbanStore'

const kanbanStore = useKanbanStore()

const props = defineProps({
  close: Function
})

function handleDelete() {
  props.close!()
  kanbanStore.deleteBoard()
}
</script>
