<template>
  <h3 class="text-ship-cove uppercase pl-6 text-xs font-bold leading-[15px] tracking-[2.4px]">
    All Boards ({{ props.boards!.length || '0' }})
  </h3>
  <ul class="mt-5 flex flex-col justify-start items-start w-full pr-6">
    <BoardComponent v-for="board in boards" :key="board.id" :name="board.name" :id="board.id" />
    <!-- <Board name="Platform Launch" />
    <Board name="Marketing Plan" />
    <Board name="Roadmap" />
    <Board name="Japan" /> -->
    <ButtonBoard name="&plus; Create New Board" :onClick="handleClick" />
  </ul>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { default as BoardComponent } from './Board'
import ButtonBoard from './ButtonBoard'
import type Board from '../../../types/Board'

const props = defineProps({
  openCreateBoardFormModal: Function,
  boards: {
    type: Array as PropType<Board[]>
  }
})

function handleClick() {
  console.log('Create new Board Clicked')
  if (props.openCreateBoardFormModal) props.openCreateBoardFormModal()
}
</script>
