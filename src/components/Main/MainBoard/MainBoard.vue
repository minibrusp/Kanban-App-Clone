<template>
  <section class="p-6 h-full overflow-scroll w-full">
    <h3 class="hidden">Main Board</h3>
    <div class="flex flex-row justify-start items-start gap-6 w-full h-full">
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <AddColumn />
    </div>
  </section>
</template>

<script setup lang="ts">
import BoardColumn from '../../ui/MainBoard/BoardColumn'
import AddColumn from '../../ui/MainBoard/AddColumn'
</script>
