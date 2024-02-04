<template>
  <div class="h-full border-r border-r-solitude dark:border-ship-cove/25">
    <aside
      class="hidden sm:block bg-white min-w-[289px] h-[calc(100%_-_47px)] pt-8 dark:bg-black-rock"
      v-if="showSidebar"
    >
      <h3 class="hidden">SideBar</h3>
      <div class="flex flex-col justify-between items-center h-full">
        <div class="w-full">
          <Boards :boards="boards" :openCreateBoardFormModal="handleCreateBoardButtonClicked" />
        </div>
        <div class="px-6 w-full flex flex-col justify-center items-center gap-3 mb-2">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>

    <div
      class="w-full pr-6 hidden sm:block"
      :class="
        !showSidebar ? 'sm:fixed bottom-10 left-0 dark:bg-transparent' : 'dark:sm:bg-black-rock'
      "
    >
      <SidebarToggler :onClick="handleShowSidebar" :showSidebar="showSidebar" />
    </div>
  </div>
  <Modal v-if="isOpen" :isOpen="isOpen" :close="closeModal">
    <CreateBoardForm :close="closeModal" />
  </Modal>
</template>

<script setup lang="ts">
import { useKanbanStore } from '../../../stores/kanbanStore'

import Boards from '../../ui/Boards'
import ThemeSwitcher from '../../ui/ThemeSwitcher'
import Modal from '../../ui/Modal'
import SidebarToggler from './SidebarToggler'
import useModal from '../../../composables/useModal'
import CreateBoardForm from '../../Modals/Boards/CreateBoardForm'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const kanbanStore = useKanbanStore()
const { boards } = storeToRefs(kanbanStore)

const { isOpen, toggleModal, closeModal } = useModal()

const showSidebar = ref(true)

function handleCreateBoardButtonClicked() {
  toggleModal()
  console.log('Create Board Clicked')
}

function handleShowSidebar() {
  showSidebar.value = !showSidebar.value
  console.log('sidebar toggler clicked')
}
</script>
