<template>
  <h2 class="font-bold text-black-russian text-lg dark:text-alice-blue">
    <button
      class="flex flex-row justify-start items-center gap-2 sm:hidden"
      @click="handleBoardModal"
    >
      <span>{{ kanbanStore.getSelectedBoard?.name }}</span>
      <span
        class="sm:hidden transition-transform duration-100 ease-in"
        :class="isOpen ? '-rotate-180' : ''"
      >
        <svg
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-150"
        >
          <path stroke="#635FC7" stroke-width="2" fill="none" d="m1 1 4 4 4-4"></path>
        </svg>
      </span>
    </button>
    <span class="hidden sm:block">{{ kanbanStore.getSelectedBoard?.name }}</span>
  </h2>
  <Modal v-if="selectedModal == 'boards'" :isOpen="isOpen" :close="closeModal" variant="boards">
    <BoardsModal :openCreateBoardFormModal="handleCreateBoardButtonClicked" />
  </Modal>
  <Modal v-if="selectedModal == 'create-board'" :isOpen="isOpen" :close="closeModal">
    <CreateBoardForm :close="closeModal" />
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '../../ui/Modal'
import useModal from '../../../composables/useModal'
import { default as BoardsModal } from '../../Modals/Boards'
import CreateBoardForm from '../../Modals/Boards/CreateBoardForm'
import { useKanbanStore } from '../../../stores/kanbanStore'

const kanbanStore = useKanbanStore()

const selectedModal = ref('')

const { isOpen, toggleModal, closeModal } = useModal()

function handleBoardModal() {
  selectedModal.value = 'boards'
  console.log('BoardHeading Clicked')
  toggleModal()
}
function handleCreateBoardButtonClicked() {
  selectedModal.value = 'create-board'
  console.log('Create Board Clicked')
}
</script>
