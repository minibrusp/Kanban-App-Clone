<template>
  <section class="max-w-[280px] min-w-[280px] h-full">
    <div class="flex flex-row justify-start items-center gap-3 mb-6">
      <div class="w-[15px] h-[15px] rounded-full block" :class="mapColor()" />
      <h4 class="text-xs text-ship-cove font-bold leading-[15px] tracking-[2.4px] uppercase">
        {{ props.column!.name }} ({{ props.column!.tasks.length }})
      </h4>
    </div>
    <ul class="flex flex-col justify-start items-center gap-5 pb-6 min-h-[calc(100%_-_15px)]">
      <draggable
        class="list-group w-full min-h-[calc(75vh)] flex flex-col justify-start items-center gap-4"
        v-model="props.column!.tasks"
        group="columns"
        itemKey="id"
        ghost-class="ghost"
        @change="handleChange"
        :move="onMoveCallback"
        :id="props.column!.name"
      >
        <template #item="{ element }">
          <li class="list-group-item w-full" :key="element.id">
            <TaskThumbnail :task="element" />
          </li>
        </template>
      </draggable>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import draggable from 'vuedraggable'
import TaskThumbnail from '../../Task/TaskThumbnail'
import type Column from '../../../../types/Column'

import { useKanbanStore } from '../../../../stores/kanbanStore'
import Task from '../../../../types/Task'

const kanbanStore = useKanbanStore()

const props = defineProps({
  column: {
    type: Object as PropType<Column>
  },
  index: Number
})

const targetList = ref<string | null>(null)
const targetTask = ref<Task | null>(null)

function mapColor() {
  let remainder = props.index! % 3
  let colors = ['bg-summer-sky', 'bg-slate-blue', 'bg-medium-aquamarine']
  return colors[remainder]
}

function handleChange() {
  kanbanStore.sortTask(targetList.value, targetTask.value)
  targetTask.value = null
  targetList.value = null
}

function onMoveCallback(event) {
  targetList.value = event.to!.id
  targetTask.value = event.draggedContext.element
}
</script>

<style>
.ghost {
  opacity: 0.1;
}
</style>
