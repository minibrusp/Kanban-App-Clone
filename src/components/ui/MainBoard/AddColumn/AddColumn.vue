<template>
  <div class="group max-w-[280px] min-w-[280px] mt-[39px] h-[calc(100%_-_39px)] last:pr-6">
    <button
      class="bg-solitude flex justify-center items-center h-full w-full rounded-lg dark:bg-black-rock/25"
      @click="handleClick"
    >
      <span class="text-ship-cove text-2xl font-bold leading-[30px] group-hover:text-slate-blue"
        >&plus; New Column</span
      >
    </button>
  </div>
  <Modal :isOpen="isOpen" :close="closeModal">
    <AddColumnBoardForm :board="getSelectedBoard" :close="closeModal" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modal'
import AddColumnBoardForm from '../../../Modals/Boards/AddColumnBoardForm'

import useModal from '../../../../composables/useModal'

import { useKanbanStore } from '../../../../stores/kanbanStore'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { getSelectedBoard } = storeToRefs(kanbanStore)

const { isOpen, toggleModal, closeModal } = useModal()

function handleClick() {
  console.log('Add Column button clicked')
  toggleModal()
}
</script>
