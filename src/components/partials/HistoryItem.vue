<template>
  <section
    class="flex flex-row w-100 justify-between items-center py-5 border-b select-none"
  >
    <div class="flex flex-col">
      <h2 class="text-xl text-gray-500">{{ date }}</h2>
      <p class="text-sm text-gray-400">{{ trend }}</p>
    </div>
    <div class="flex flex-row items-end">
      <strong class="text-3xl font-medium mr-2 text-gray-600">{{
        weight
      }}</strong>
      <div class="text-base text-gray-400">kg</div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps({
  date: String,
  weight: Number,
  trend: String,
});
</script>
