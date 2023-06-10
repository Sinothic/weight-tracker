<template>
  <div class="p-6 mx-auto bg-gray-50 w-full h-full">
    <h2 class="mb-0 text-2xl text-gray-600">Histórico</h2>
    <div class="flex flex-col">
      <HistoryItem
        class="last:border-b-0"
        v-for="item in items"
        v-bind="item"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import HistoryItem from "@/components/partials/HistoryItem.vue";
import { storage, HistoryItem as HistoryRecord } from "@/services/storage";
import { computed } from "vue";

const history = storage.getHistory() as HistoryRecord[];
const items = computed(() => {
  return history.reverse();
});
</script>
