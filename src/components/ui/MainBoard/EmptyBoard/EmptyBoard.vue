<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <h3 class="text-ship-cove font-bold text-lg">
      This board is empty. Create a new column to get started.
    </h3>

    <div class="w-full px-40">
      <Button variant="primary" size="large" :onClick="handleClickButton">
        <span class="sm:hidden">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            ></path>
          </svg>
        </span>
        <span class="hidden sm:block text-white text-sm font-bold">&plus; Add New Column</span>
      </Button>

      <Modal :isOpen="isOpen" :close="closeModal">
        <AddColumnBoardForm :close="closeModal" />
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../Button'
import Modal from '../../Modal'
import useModal from '../../../../composables/useModal'
import AddColumnBoardForm from '../../../Modals/Boards/AddColumnBoardForm'

const { isOpen, toggleModal, closeModal } = useModal()

function handleClickButton() {
  console.log('Button Add New Task Clicked')
  toggleModal()
}
</script>
