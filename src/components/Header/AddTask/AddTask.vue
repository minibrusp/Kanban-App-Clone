<template>
  <Button :onClick="handleClickButton" variant="primary" size="large">
    <span class="sm:hidden">
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"></path>
      </svg>
    </span>
    <span class="hidden sm:block text-white text-sm font-bold">&plus; Add New Task</span>
  </Button>
  <Modal :isOpen="isOpen" :close="closeModal">
    <AddTaskForm :close="closeModal" />
  </Modal>
</template>

<script setup lang="ts">
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import useModal from '../../../composables/useModal'

import AddTaskForm from '../../Modals/Tasks/AddTaskForm'

const { isOpen, toggleModal, closeModal } = useModal()

function handleClickButton() {
  console.log('Button Add New Task Clicked')
  toggleModal()
}
</script>
