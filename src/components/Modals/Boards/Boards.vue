<template>
  <div>
    <Boards :openCreateBoardFormModal="props.openCreateBoardFormModal" />
    <div class="mx-4 mb-0 mt-4">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import Boards from '../../ui/Boards'
import ThemeSwitcher from '../../ui/ThemeSwitcher'

const props = defineProps({
  openCreateBoardFormModal: Function
})
</script>
