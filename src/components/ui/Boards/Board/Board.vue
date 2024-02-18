<template>
  <li class="group w-full">
    <label class="cursor-pointer" tabIndex="0">
      <div
        class="group/div bg-white text-ship-cove w-full flex flex-row justify-start items-center gap-3 pl-6 py-[14px] rounded-r-full text-[15px] font-bold leading-[19px] group-hover:bg-alice-blue group-hover:text-slate-blue group-hover:bg-slate-blue/10 has-[:checked]:bg-slate-blue has-[:checked]:text-alice-blue has-[:checked]:hover:bg-slate-blue has-[:checked]:hover:text-alice-blue dark:bg-black-rock dark:group-hover:bg-alice-blue dark:has-[:checked]:bg-slate-blue dark:has-[:checked]:hover:bg-slate-blue"
      >
        <input
          class="peer hidden"
          type="radio"
          name="boards"
          :value="props.name"
          :checked="id === selectedBoard ? true : false"
          @change="handleChange"
        />
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-ship-cove group-hover:fill-slate-blue peer-checked:fill-alice-blue"
        >
          <path
            d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
          ></path>
        </svg>
        <span>{{ props.name }}</span>
      </div>
    </label>
  </li>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKanbanStore } from '../../../../stores/kanbanStore'

const kanbanStore = useKanbanStore()
const { selectedBoard } = storeToRefs(kanbanStore)

const props = defineProps({
  id: String,
  name: String
})

function handleChange() {
  if (!props.id) return
  kanbanStore.setSelectedBoard(props.id)
}
</script>
