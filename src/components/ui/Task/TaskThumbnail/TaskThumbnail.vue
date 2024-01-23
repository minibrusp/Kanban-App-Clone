<template>
  <div
    class="group bg-white w-full py-6 px-4 shadow-lg rounded-lg cursor-pointer"
    @click="handleClick"
    tabindex="0"
  >
    <h5
      class="text-black-russian text-[15px] font-bold leading-[19px] mb-2 group-hover:text-slate-blue"
    >
      {{ props.title }}
    </h5>
    <p class="text-ship-cove text-xs font-bold leading-[15px]">
      <span v-if="subtasks"> {{ props.completedSubtasks }} of {{ subtasks }} subtasks </span>
      <span v-else> 0 of 0 subtasks </span>
    </p>
  </div>
  <Modal :isOpen="isOpen" :close="closeModal">
    <Task />
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../Modal'
import useModal from '../../../../composables/useModal'
import Task from '../../../Modals/Tasks/Task'

const props = defineProps({
  title: String,
  subtasks: Number,
  completedSubtasks: Number
})

const { isOpen, toggleModal, closeModal } = useModal()

function handleClick() {
  console.log('Task clicked:' + props.title)
  toggleModal()
}
</script>
