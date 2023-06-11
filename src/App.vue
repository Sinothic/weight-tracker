<template>
  <div class="flex flex-col min-h-screen pb-20">
    <router-view class="flex-1 bg-gray-50"></router-view>
    <Footer class="fixed bottom-0 w-full" />
  </div>
</template>
<script setup lang="ts">
import Footer from "@/components/partials/Footer.vue";
</script>
