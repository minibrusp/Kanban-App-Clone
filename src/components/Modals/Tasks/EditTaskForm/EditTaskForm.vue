<template>
  <h3 class="text-lg font-bold">Edit Task</h3>
  <form @submit.prevent="" class="mt-6 flex flex-col justify-start items-start gap-6">
    <Label title="Title">
      <input
        class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
        type="text"
        name="title"
        placeholder="e.g. Take coffee break"
      />
    </Label>

    <Label title="Description">
      <textarea
        class="w-full border border-ship-cove/30 py-2 px-4 h-28 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded resize-none overflow-y-hidden placeholder:text-ship-cove/50 placeholder:font-light"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        name="description"
      />
    </Label>

    <Label title="Subtasks">
      <div class="flex flex-row justify-start items-center gap-4 w-full">
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
          type="text"
          placeholder="e.g. Make coffee"
        />
        <button>
          <svg width="15" height="15" fill="#828FA3" xmlns="http://www.w3.org/2000/svg" class="">
            <g fill-rule="evenodd">
              <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
              <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div class="mt-3 w-full">
        <Button variant="secondary" size="medium">
          <span class="text-slate-blue font-bold text-[13px]">&plus; Add New Subtask</span>
        </Button>
      </div>
    </Label>

    <Label title="Status">
      <Select name="status" id="">
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </Select>
    </Label>

    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button variant="primary" size="medium">
        <span class="text-alice-blue font-bold text-[13px]">Save Changes</span>
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '../../../ui/Button'
import Label from '../../../ui/Form/Label'
import Select from '../../../ui/Select'
</script>
