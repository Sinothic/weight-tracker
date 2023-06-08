<script setup lang="ts"></script>

<template>
  <div class="p-6 mx-auto bg-gray-50 w-[425px]">
    <h2 class="mb-4 text-2xl text-gray-600">Trends</h2>
    <div class="flex flex-wrap gap-5 justify-between">
      <TrendCard title="Last 7 days" :value="2" unit="kg" trend="down" />
      <TrendCard title="Last 30 days" :value="4" unit="kg" trend="down" />
      <TrendCard title="All time" :value="6" unit="kg" trend="down" />
      <TrendCard title="Median Weight" :value="150" unit="kg" trend="" />
    </div>
  </div>

  <div class="p-6 mx-auto bg-gray-50 w-[425px]">
    <h2 class="mb-0 text-2xl text-gray-600">History</h2>
    <div class="flex flex-col">
      <HistoryItem class="last:border-b-0" />
      <HistoryItem class="last:border-b-0" />
      <HistoryItem class="last:border-b-0" />
    </div>
  </div>

  <Footer />
</template>
<script setup lang="ts">
import TrendCard from "@/components/partials/TrendCard.vue";
import HistoryItem from "@/components/partials/HistoryItem.vue";
import Footer from "@/components/partials/Footer.vue";
</script>
