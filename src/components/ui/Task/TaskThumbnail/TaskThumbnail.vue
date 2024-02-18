<template>
  <div
    class="group bg-white w-full py-6 px-4 shadow-lg rounded-lg cursor-pointer dark:bg-black-rock"
    @click="handleClick"
    tabindex="0"
  >
    <h5
      class="text-black-russian text-[15px] font-bold leading-[19px] mb-2 group-hover:text-slate-blue dark:text-alice-blue"
    >
      {{ props.task!.title }}
    </h5>
    <p class="text-ship-cove text-xs font-bold leading-[15px]">
      <span v-if="props.task!.subtasks">
        {{ completedSubtasks }} of {{ props.task!.subtasks.length }} subtasks
      </span>
      <span v-else> 0 of 0 subtasks </span>
    </p>
  </div>
  <Modal :isOpen="isOpen" :close="closeModal">
    <TaskComponent :task="task" :completedSubtasks="completedSubtasks" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modal'
import useModal from '../../../../composables/useModal'
import { default as TaskComponent } from '../../../Modals/Tasks/Task'
import { type PropType, computed } from 'vue'
import type Task from '../../../../types/Task'

const props = defineProps({
  task: {
    type: Object as PropType<Task>
  }
})

const completedSubtasks = computed(() => {
  let completed = props.task!.subtasks.filter((task) => task.isCompleted)
  return completed.length
})

const { isOpen, toggleModal, closeModal } = useModal()

function handleClick() {
  console.log('Task clicked:' + props.task!.title)
  toggleModal()
}
</script>
