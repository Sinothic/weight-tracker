<template>
  <div
    class="relative h-[calc(100vh-80px)] w-screen select-none overflow-y-auto"
  >
    <router-view class="h-full min-w-screen"></router-view>
    <Footer class="absolute bottom-0" />
  </div>
</template>
<script setup lang="ts">
import Footer from "@/components/partials/Footer.vue";
</script>
