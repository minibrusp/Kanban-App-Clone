<template>
  <h3 class="text-lg font-bold">Add New Column</h3>
  <form @submit.prevent="" class="mt-6 flex flex-col justify-start items-start gap-6">
    <Label title="Name">
      <input
        class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
        type="text"
        name="name"
        placeholder="e.g. Take coffee break"
        value="test board"
      />
    </Label>

    <Label title="Columns">
      <div class="flex flex-row justify-start items-center gap-4 w-full">
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
          type="text"
          placeholder="column name"
          value="Todo"
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

      <div class="flex flex-row justify-start items-center gap-4 w-full">
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
          type="text"
          placeholder="column name"
          value="Doing"
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

      <div class="flex flex-row justify-start items-center gap-4 w-full">
        <input
          class="w-full border border-ship-cove/30 py-2 px-4 text-[13px] font-medium leading-[23px] focus-visible:border-slate-blue outline-none rounded placeholder:text-ship-cove/50 placeholder:font-light"
          type="text"
          placeholder="column name"
          value="Done"
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
          <span class="text-slate-blue font-bold text-[13px]">&plus; Add New Column</span>
        </Button>
      </div>
    </Label>

    <div class="w-full flex flex-row justify-start items-center gap-4">
      <Button variant="primary" size="medium">
        <span class="text-alice-blue font-bold text-[13px]">Save Changes</span>
      </Button>
      <Button variant="secondary" size="medium">
        <span class="text-slate-blue font-bold text-[13px]">Cancel</span>
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from '../../../ui/Button'
import Label from '../../../ui/Form/Label'
</script>
