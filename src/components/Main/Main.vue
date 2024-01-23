<template>
  <main
    class="relative h-[calc(100vh_-_85px)] sm:h-[calc((100vh_-_4rem)_-_44px)] flex flex-row justify-start items-start"
  >
    <SideBar />
    <MainBoard />
  </main>
</template>

<script setup lang="ts">
import MainBoard from './MainBoard'
import SideBar from './Sidebar/SideBar.vue'
</script>
