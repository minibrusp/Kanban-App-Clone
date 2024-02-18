<template>
  <div
    class="w-full relative after:content-arrowDownIcon after:absolute after:right-3 after:top-[7px]"
  >
    <select
      :name="props.name"
      class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded appearance-none dark:bg-black-rock dark:text-alice-blue"
      :title="props.title"
      @change="handleChange"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  title: String,
  changeHandler: Function
})

function handleChange(e: Event) {
  let target = e.target as HTMLSelectElement
  props.changeHandler!(target.value)
}
</script>
