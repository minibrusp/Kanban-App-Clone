<template>
  <Popover :isDisabled="isBoardsEmpty">
    <template #icon>
      <MenuIcon />

      <Modal :isOpen="isOpen" :close="closeModal">
        <EditBoardForm v-if="selected == 'edit'" :close="closeModal" />
        <DeleteBoard v-if="selected == 'delete'" :close="closeModal" />
      </Modal>
    </template>
    <template #popmenu>
      <div class="flex flex-col justify-start items-start gap-4">
        <MenuItem variant="primary" text="Edit Board" :onClick="handleEditBoard" />
        <MenuItem variant="danger" text="Delete Board" :onClick="handleDeleteBoard" />
      </div>
    </template>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuIcon from '../../ui/MenuIcon'
import Popover from '../../ui/Popover'
import MenuItem from '../../ui/MenuItem'
import Modal from '../../ui/Modal'
import useModal from '../../../composables/useModal'
import EditBoardForm from '../../Modals/Boards/EditBoardForm'
import DeleteBoard from '../../Modals/Boards/DeleteBoard'

import { useKanbanStore } from '../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const { isOpen, toggleModal, closeModal } = useModal()

const selected = ref('')

const kanbanStore = useKanbanStore()
const { isBoardsEmpty } = storeToRefs(kanbanStore)

function handleEditBoard() {
  selected.value = 'edit'
  console.log('Edit Board Clicked')
  toggleModal()
}
function handleDeleteBoard() {
  selected.value = 'delete'
  console.log('Delete Board Clicked')
  toggleModal()
}
</script>
