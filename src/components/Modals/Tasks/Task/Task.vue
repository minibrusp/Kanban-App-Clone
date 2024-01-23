<template>
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-lg font-bold text-black-russian">Build UI for onboarding flow</h3>
    <TaskMenu />
  </div>

  <FieldSet name="Subtasks (1 of 3)">
    <div class="flex flex-col justify-start items-center gap-2">
      <Checkbox name="Search page" />
      <Checkbox name="Sign in page" />
      <Checkbox name="Welcome page" />
    </div>
  </FieldSet>

  <FieldSet name="Current Status">
    <Select name="status" id="">
      <option value="todo">Todo</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </Select>
  </FieldSet>
</template>

<script setup lang="ts">
import TaskMenu from './TaskMenu'
import FieldSet from '../../../ui/Form/FieldSet'
import Checkbox from '../../../ui/Form/Checkbox'
import Select from '../../../ui/Select'
</script>
