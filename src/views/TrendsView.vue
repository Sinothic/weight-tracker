<template>
  <div class="p-6">
    <h2 class="mb-4 text-2xl text-gray-600">Trends</h2>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 bg-white">
      <TrendCard title="Últimos 7 dias" :value="2" unit="kg" trend="down" />
      <TrendCard title="Útimos 30 dias" :value="4" unit="kg" trend="down" />
      <TrendCard title="Todo período" :value="6" unit="kg" trend="down" />
      <TrendCard title="Média peso" :value="150" unit="kg" trend="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TrendCard from "@/components/partials/TrendCard.vue";
</script>
