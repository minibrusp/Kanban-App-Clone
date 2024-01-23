<template>
  <section class="max-w-[280px] min-w-[280px] h-full">
    <div class="flex flex-row justify-start items-center gap-3 mb-6">
      <div class="bg-summer-sky w-[15px] h-[15px] rounded-full block" />
      <h4 class="text-xs text-ship-cove font-bold leading-[15px] tracking-[2.4px] uppercase">
        Todo (2)
      </h4>
    </div>
    <ul class="flex flex-col justify-start items-center gap-5 pb-6">
      <li class="w-full">
        <TaskThumbnail title="Build UI for onboarding flow" :subtasks="2" :completedSubtasks="1" />
      </li>
      <li class="w-full">
        <TaskThumbnail title="Build UI for search" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import TaskThumbnail from '../../Task/TaskThumbnail'
</script>
