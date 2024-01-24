<template>
  <div>
    <Boards :boards="boards" :openCreateBoardFormModal="props.openCreateBoardFormModal" />
    <div class="mx-4 mb-0 mt-4">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import Boards from '../../ui/Boards'
import ThemeSwitcher from '../../ui/ThemeSwitcher'

import { useKanbanStore } from '../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { boards } = storeToRefs(kanbanStore)

const props = defineProps({
  openCreateBoardFormModal: Function
})
</script>
