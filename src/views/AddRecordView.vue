<template>
  <ph-arrow-left
    @click="onGoBack"
    class="ml-10 mt-4 top-0 left-0 text-gray-400"
    :size="32"
  />
  <div class="p-10 flex flex-col items-center justify-center gap-14">
    <h1 class="text-3xl text-center">Qual é o seu peso atual?</h1>
    <div class="flex flex-row justify-between items-center gap-4">
      <ph-minus-circle :size="40" color="#94a3b8" @click="removeWeight" />
      <input
        v-select-on-focus
        type="number"
        class="text-7xl font-medium w-5/6 text-center border-2 border-gray-200 rounded-xl py-3"
        v-model="weight"
        v-on:keyup.enter="SaveWeight"
      />
      <ph-plus-circle :size="40" color="#94a3b8" @click="addWeight" />
    </div>
    <div
      class="w-3/6 bg-purple-800 opacity-70 rounded-xl py-3 text-xl font-medium text-center text-white"
    >
      KG
    </div>
    <button
      class="w-5/6 bg-orange-500 opacity-80 rounded-xl py-4 text-xl font-medium text-center text-white"
      @click="SaveWeight"
    >
      CONTINUAR
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { HistoryItem, storage } from "@/services/storage";
import { Ref, ref } from "vue";
import { PhPlusCircle, PhMinusCircle, PhArrowLeft } from "@phosphor-icons/vue";

const router = useRouter();

const currentWeight = storage.getCurrentWeight();
const weight: Ref<number> = ref(currentWeight || 0);

function addWeight() {
  const newValue = weight.value + 0.1;
  weight.value = Number(newValue.toFixed(2));
}

function removeWeight() {
  const newValue = weight.value - 0.1;
  weight.value = Number(newValue.toFixed(2));
}

function SaveWeight() {
  const historyItem: HistoryItem = {
    id: new Date().getTime().toString(),
    date: new Date().toDateString(),
    weight: weight.value,
    trend: "up",
  };
  storage.saveHistory(historyItem);
  onGoBack();
}

function onGoBack() {
  router.go(-1);
}
</script>
