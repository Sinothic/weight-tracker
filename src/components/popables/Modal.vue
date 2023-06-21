<template>
  <div class="modal" v-if="modalProps.show">
    <div
      class="w-screen h-screen flex flex-row justify-center items-center bg-black bg-opacity-50"
    >
      <div
        class="relative flex flex-col max-w-[50%] shadow rounded-md p-7 bg-white"
      >
        <button class="absolute top-0 right-0 p-4" @click="modalProps.cancel()">
          <ph-x color="#000" size="20" />
        </button>

        <h1 class="text-xl text-gray-800">{{ modalProps.title }}</h1>
        <p class="py-3 text-gray-600">
          {{ modalProps.content }}
        </p>
        <div class="flex flex-row justify-between gap-4">
          <button
            class="rounded py-2 flex-1 bg-orange-400 text-white font-medium hover:bg-orange-500"
            @click="onConfirm()"
          >
            {{ modalProps.confirmText }}
          </button>
          <button
            class="rounded border border-gray-400 text-gray-500 py-2 flex-1 font-medium"
            @click="modalProps.cancel()"
          >
            {{ modalProps.cancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { ModalProps } from "@/components/popables/modalSetup";
const modalProps: ModalProps = inject("modalProps") as ModalProps;
function onConfirm() {
  modalProps.confirm();
}
</script>
