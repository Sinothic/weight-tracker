<template>
  <h2
    class="mb-1 w-full text-xs font-normal uppercase tracking-wider text-gray-400"
  >
    {{ title }}
  </h2>
</template>
<script setup lang="ts">
defineOptions({
  name: "Title",
});

interface ITitleProps {
  title: string;
}
defineProps<ITitleProps>();
</script>
