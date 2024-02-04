<template>
  <header class="bg-white px-3 flex flex-row justify-start items-center dark:bg-black-rock">
    <div
      class="max-w-[40px] overflow-x-hidden pl-[3px] py-4 border-b border-b-transparent sm:min-w-[277px] sm:py-[22px]"
    >
      <h1 class="hidden">Kanban</h1>
      <Logo />
    </div>
    <div
      class="py-4 flex flex-row justify-between items-center w-full sm:border-b sm:border-l sm:border-solitude dark:sm:border-ship-cove/25 sm:pl-6 sm:py-[22px]"
    >
      <BoardHeading />

      <div class="flex flex-row justify-start items-center gap-1 sm:gap-4">
        <AddTask />
        <BoardMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '../ui/Logo'

// components
import BoardHeading from './BoardHeading'
import AddTask from './AddTask'
import BoardMenu from './BoardMenu'
</script>
