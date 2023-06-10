<template>
  <div class="p-6 flex flex-col items-center gap-16">
    <h1 class="text-3xl text-center">Meu progresso até o momento</h1>
    <ProgressBar :percent="100" class="w-[300px]" />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/partials/ProgressBar.vue";
</script>
