<template>
  <Popover>
    <template #icon>
      <MenuIcon />

      <Modal :isOpen="isOpen" :close="closeModal">
        <EditTaskForm v-if="selected == 'edit'" :task="props.task" :close="closeModal" />
        <DeleteTask v-if="selected == 'delete'" :task="props.task" :close="closeModal" />
      </Modal>
    </template>
    <template #popmenu>
      <div class="flex flex-col justify-start items-start gap-4">
        <MenuItem variant="primary" text="Edit Task" :onClick="handleEditTask" />
        <MenuItem variant="danger" text="Delete Task" :onClick="handleDeleteTask" />
      </div>
    </template>
  </Popover>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import type Task from '../../../../../types/Task'
import MenuIcon from '../../../../ui/MenuIcon'
import Popover from '../../../../ui/Popover'
import MenuItem from '../../../../ui/MenuItem'
import Modal from '../../../../ui/Modal'
import useModal from '../../../../../composables/useModal'
import EditTaskForm from '../../EditTaskForm'
import DeleteTask from '../../../Tasks/DeleteTask'

const props = defineProps({
  task: {
    type: Object as PropType<Task>
  }
})

const { isOpen, toggleModal, closeModal } = useModal()

const selected = ref('')

function handleEditTask() {
  selected.value = 'edit'
  console.log('Edit Task Clicked')
  toggleModal()
}
function handleDeleteTask() {
  selected.value = 'delete'
  console.log('Delete Task Clicked')
  toggleModal()
}
</script>
