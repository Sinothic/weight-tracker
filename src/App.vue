<template>
  <div class="flex flex-col min-h-screen pb-20 relative">
    <Modal class="absolute top-0 left-0 z-10"></Modal>
    <router-view class="flex-1 bg-gray-50"></router-view>
    <Footer class="fixed bottom-0 w-full" />
  </div>
</template>
<script setup lang="ts">
import Footer from "@/components/partials/Footer.vue";
import Modal from "@/components/popables/Modal.vue";
</script>
