import { ref, computed } from 'vue'

export default function useModal() {
  const modal = ref(false)

  const toggleModal = () => {
    modal.value = !modal.value
  }
  const closeModal = () => {
    modal.value = false
  }

  const isOpen = computed(() => modal.value)

  return { isOpen, toggleModal, closeModal }
}
