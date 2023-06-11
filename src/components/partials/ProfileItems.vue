<template>
  <div
    class="flex w-full cursor-pointer select-none flex-row items-center gap-2 py-2"
  >
    <component :is="icon" size="20px" :color="iconColor"></component>
    <h3 :class="`grow text-base ${textColorClass}`">{{ text }}</h3>
    <ph-caret-right v-if="showCaret" size="16px" color="#797085" class="" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "ProfileItems",
});

interface IProfileItemsProps {
  icon: string;
  text: string;
  isRed?: boolean;
  showCaret?: boolean;
}

const props = withDefaults(defineProps<IProfileItemsProps>(), {
  isRed: false,
  showCaret: true,
});

const textColorClass = computed(() => {
  return props.isRed ? "text-red" : "text-gray-600";
});

const iconColor = computed(() => {
  return props.isRed ? "#AA2222" : "#38343D";
});
</script>
