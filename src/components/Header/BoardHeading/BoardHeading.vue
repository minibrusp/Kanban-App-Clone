<template>
  <button class="flex flex-row justify-start items-center gap-2" @click="handleClick">
    <h2 class="font-bold text-black-russian text-lg">Platform Launch</h2>
    <span
      class="sm:hidden transition-transform duration-100 ease-in"
      :class="isOpen ? '-rotate-180' : ''"
    >
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg" class="transition duration-150">
        <path stroke="#635FC7" stroke-width="2" fill="none" d="m1 1 4 4 4-4"></path>
      </svg>
    </span>
  </button>
  <Modal :isOpen="isOpen" :close="closeModal">
    <span>BoardHeading Modal</span>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../ui/Modal'
import useModal from '../../../composables/useModal'

const { isOpen, toggleModal, closeModal } = useModal()

function handleClick() {
  console.log('BoardHeading Clicked')
  toggleModal()
}
</script>
