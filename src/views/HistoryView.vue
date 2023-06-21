<template>
  <div class="py-6 mx-auto bg-gray-50 w-full h-full">
    <h2 class="px-6 mb-0 text-2xl text-gray-600">Histórico</h2>
    <div class="flex flex-col">
      <HistoryItem
        :key="item.id"
        v-for="item in items"
        class="last:border-b-0"
        v-bind="item"
        @delete="onDelete(item)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import HistoryItem from "@/components/partials/HistoryItem.vue";
import { storage, HistoryItem as HistoryRecord } from "@/services/storage";
import { Ref, computed, ref } from "vue";

let history: Ref<HistoryRecord[]> = ref<HistoryRecord[]>(storage.getHistory());
const items = computed(() => {
  return history.value.reverse();
});

function onDelete(item: HistoryRecord) {
  storage.deleteHistoryItem(item);
  history.value = storage.getHistory();
}
</script>
