<template>
  <section class="p-6 h-full overflow-auto w-full">
    <h3 class="hidden">Main Board</h3>
    <div
      v-if="getSelectedBoard?.columns.length > 0"
      class="flex flex-row justify-start items-start gap-6 w-full h-full"
    >
      <BoardColumn
        v-for="(column, index) in getSelectedBoard?.columns"
        :key="column.name"
        :column="column"
        :index="index"
      />
      <AddColumn />
    </div>
    <div
      v-else-if="isBoardsEmpty"
      class="flex flex-col justify-center items-center gap-6 w-full h-full"
    >
      <NoBoards />
    </div>
    <div v-else class="flex flex-col justify-center items-center gap-6 w-full h-full">
      <EmptyBoard />
    </div>
  </section>
</template>

<script setup lang="ts">
import BoardColumn from '../../ui/MainBoard/BoardColumn'
import AddColumn from '../../ui/MainBoard/AddColumn'
import EmptyBoard from '../../ui/MainBoard/EmptyBoard'
import NoBoards from '../../ui/MainBoard/NoBoards'
import { useKanbanStore } from '../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoard, isBoardsEmpty } = storeToRefs(kanbanStore)
</script>
