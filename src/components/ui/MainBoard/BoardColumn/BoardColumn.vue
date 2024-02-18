<template>
  <section class="max-w-[280px] min-w-[280px] h-full">
    <div class="flex flex-row justify-start items-center gap-3 mb-6">
      <div class="w-[15px] h-[15px] rounded-full block" :class="mapColor()" />
      <h4 class="text-xs text-ship-cove font-bold leading-[15px] tracking-[2.4px] uppercase">
        {{ props.column!.name }} ({{ props.column!.tasks.length }})
      </h4>
    </div>
    <ul class="flex flex-col justify-start items-center gap-5 pb-6">
      <li v-for="task in props.column!.tasks" :key="task.id" class="w-full">
        <TaskThumbnail :task="task" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import TaskThumbnail from '../../Task/TaskThumbnail'
import type Column from '../../../../types/Column'

const props = defineProps({
  column: {
    type: Object as PropType<Column>
  },
  index: Number
})

function mapColor() {
  let remainder = props.index! % 3
  let colors = ['bg-summer-sky', 'bg-slate-blue', 'bg-medium-aquamarine']
  return colors[remainder]
}
</script>
