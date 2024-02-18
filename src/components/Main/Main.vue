<template>
  <main
    class="relative h-[calc(100vh_-_68px)] sm:h-[calc((100vh_-_3rem)_-_37px)] min-[700px]:h-[calc((100vh_-_4rem)_-_29px)] flex flex-row justify-start items-start"
  >
    <SideBar />
    <MainBoard />
  </main>
</template>

<script setup lang="ts">
import MainBoard from './MainBoard'
import SideBar from './Sidebar/SideBar.vue'
</script>
