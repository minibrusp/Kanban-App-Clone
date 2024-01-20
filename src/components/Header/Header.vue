<template>
  <header class="bg-white px-3 flex flex-row justify-start items-center">
    <div class="pl-[3px] min-w-[277px] py-[22px] border-b border-b-transparent">
      <h1 class="hidden">Kanban</h1>
      <Logo />
    </div>
    <div
      class="border-b border-l border-solitude py-[22px] pl-6 flex flex-row justify-between items-center w-full"
    >
      <h2 class="font-bold text-black-russian text-lg">Platform Launch</h2>
      <div class="flex flex-row justify-start items-center gap-4">
        <Button :onClick="handleClickButton" variant="primary" size="large">
          <span class="text-white text-sm font-bold">&plus; Add New Task</span>
        </Button>

        <Popover>
          <template #icon>
            <MenuIcon />
          </template>
          <template #popmenu>
            <div class="flex flex-col justify-start items-start gap-4">
              <MenuItem variant="primary" text="Edit Board" :onClick="handleEditBoard" />
              <MenuItem variant="danger" text="Delete Board" :onClick="handleDeleteBoard" />
            </div>
          </template>
        </Popover>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '../ui/Logo'
import MenuIcon from '../ui/MenuIcon'
import Button from '../ui/Button'
import Popover from '../ui/Popover'
import MenuItem from '../ui/MenuItem'

function handleClickButton() {
  console.log('Button Add New Task Clicked')
}

function handleEditBoard() {
  console.log('Edit Board Clicked')
}
function handleDeleteBoard() {
  console.log('Delete Board Clicked')
}
</script>
../ui/MenuIcon
