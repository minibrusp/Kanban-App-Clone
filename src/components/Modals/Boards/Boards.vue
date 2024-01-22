<template>
  <div>
    <Boards :openCreateBoardFormModal="props.openCreateBoardFormModal" />
    <ThemeSwitcher />
  </div>
</template>

<script setup lang="ts">
import Boards from '../../ui/Boards'
import ThemeSwitcher from '../../ui/ThemeSwitcher'

const props = defineProps({
  openCreateBoardFormModal: Function
})
</script>
