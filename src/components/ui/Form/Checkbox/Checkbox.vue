<template>
  <label
    class="flex flex-row justify-start items-center gap-3 w-full p-3 rounded cursor-pointer hover:bg-slate-blue/25 has-[:checked]:bg-slate-blue/25 dark:bg-black-russian dark:hover:bg-slate-blue/25"
    tabindex="0"
    @keydown.space="handleClick"
    @keydown.enter="handleClick"
  >
    <input
      class="peer appearance-none hidden"
      type="checkbox"
      placeholder="column name"
      :name="props.name?.toLowerCase()"
      @change="handleChange"
      :checked="$props.isCompeleted"
    />
    <div
      class="w-4 h-4 border flex justify-center items-center bg-white border-ship-cove/25 cursor-pointer peer-checked:bg-slate-blue"
    >
      <svg class="fill-alice-blue" width="10" height="8" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#FFF" stroke-width="2" fill="none" d="m1.276 3.066 2.756 2.756 5-5"></path>
      </svg>
    </div>
    <span
      class="text-xs text-black-russian font-bold leading-[15px] peer-checked:text-black-russian/50 peer-checked:line-through dark:text-alice-blue dark:peer-checked:text-ship-cove"
      >{{ props.name }}</span
    >
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  onChange: Function,
  isCompeleted: Boolean
})

function handleChange(e: Event) {
  let target = e.target as HTMLInputElement
  props.onChange!(target.name)
}

function handleClick(e: Event) {
  let target = e.target as HTMLLabelElement
  let checkbox = target.querySelector('input')
  checkbox!.checked = !checkbox!.checked
}
</script>
