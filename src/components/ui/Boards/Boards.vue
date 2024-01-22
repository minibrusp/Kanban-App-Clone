<template>
  <h3 class="text-ship-cove uppercase pl-6 text-xs font-bold leading-[15px] tracking-[2.4px]">
    All Boards (4)
  </h3>
  <ul class="mt-5 flex flex-col justify-start items-start w-full pr-6">
    <Board name="Platform Launch" />
    <Board name="Marketing Plan" />
    <Board name="Roadmap" />
    <Board name="Japan" />
    <ButtonBoard name="&plus; Create New Board" :onClick="handleClick" />
  </ul>
</template>

<script setup lang="ts">
import Board from './Board'
import ButtonBoard from './ButtonBoard'

const props = defineProps({
  openCreateBoardFormModal: Function
})

function handleClick() {
  console.log('Create new Board Clicked')
  props.openCreateBoardFormModal()
}
</script>
