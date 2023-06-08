<template>
  <section
    class="h-44 w-44 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between select-none"
  >
    <h2 class="text-sm text-gray-400 font-semibold uppercase">{{ title }}</h2>
    <div class="flex flex-row items-end">
      <ph-arrow-down
        class="shrink-0"
        v-if="trend == 'down'"
        :size="24"
        color="#4ade80"
      />
      <ph-arrow-up
        class="shrink-0"
        v-else-if="trend == 'up'"
        :size="24"
        color="#f87171"
      />
      <strong class="text-5xl font-medium leading-10 mr-2 text-gray-600">{{
        value
      }}</strong>
      <div class="text-xl text-gray-400">{{ unit }}</div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { PhArrowDown, PhArrowUp } from "@phosphor-icons/vue";
defineOptions({
  name: "TrendCard",
  components: {
    PhArrowDown,
  },
});

defineProps({
  title: String,
  value: Number,
  unit: String,
  trend: String,
});
</script>
