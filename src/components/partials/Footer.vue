<template>
  <footer
    v-if="isFooterVisible"
    class="h-18 px-8 w-full bg-white flex flex-row items-center justify-between"
  >
    <ph-house :size="30" :color="getIconColor('home')" @click="goTo('home')" />
    <ph-chart-bar
      :size="30"
      :color="getIconColor('trends')"
      @click="goTo('trends')"
    />
    <div
      @click="goTo('add')"
      class="bg-white w-20 h-20 rounded-full flex flex-row justify-center items-center -translate-y-4"
    >
      <div
        class="bg-orange-500 opacity-80 w-16 h-16 rounded-full flex flex-row justify-center items-center"
      >
        <ph-plus :size="30" color="#fff" />
      </div>
    </div>
    <ph-clipboard
      :size="30"
      :color="getIconColor('history')"
      @click="goTo('history')"
    />
    <ph-user
      :size="30"
      :color="getIconColor('profile')"
      @click="goTo('profile')"
    />
  </footer>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
import {
  PhHouse,
  PhChartBar,
  PhPlus,
  PhClipboard,
  PhUser,
} from "@phosphor-icons/vue";

const unselectedColor: string = "#9ca3af";
const selectedColor: string = "#7e22ce";

const isFooterVisible = computed(() => {
  return !["/add", "/goal"].includes(useRoute().path);
});

function getIconColor(path: string): string {
  return useRoute().path === `/${path}` ? selectedColor : unselectedColor;
}

function goTo(path: string): void {
  router.push({ path: `/${path}` });
}
</script>
