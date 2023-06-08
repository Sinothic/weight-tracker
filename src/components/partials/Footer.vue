<template>
  <footer
    class="h-20 px-8 w-full bg-white flex flex-row sticky bottom-0 items-center justify-between"
  >
    <ph-house
      :size="30"
      :color="getIconColor('home')"
      @click="setSelectedIcon('home')"
    />
    <ph-chart-bar
      :size="30"
      :color="getIconColor('trends')"
      @click="setSelectedIcon('trends')"
    />
    <div
      class="bg-white w-20 h-20 rounded-full flex flex-row justify-center items-center -translate-y-4"
    >
      <div
        class="bg-orange-400 w-16 h-16 rounded-full flex flex-row justify-center items-center"
      >
        <ph-plus :size="30" color="#fff" />
      </div>
    </div>
    <ph-clipboard
      :size="30"
      :color="getIconColor('history')"
      @click="setSelectedIcon('history')"
    />
    <ph-user
      :size="30"
      :color="getIconColor('profile')"
      @click="setSelectedIcon('profile')"
    />
  </footer>
</template>
<script setup lang="ts">
import {
  PhHouse,
  PhChartBar,
  PhPlus,
  PhClipboard,
  PhUser,
} from "@phosphor-icons/vue";
import { reactive } from "vue";

const unselectedColor: string = "#9ca3af";
const selectedColor: string = "#7e22ce";
const colorMap: Record<string, string> = reactive({
  home: selectedColor,
  trends: unselectedColor,
  history: unselectedColor,
  profile: unselectedColor,
});

function getIconColor(path: string): string {
  return colorMap[path] || unselectedColor;
}

function setSelectedIcon(path: string): void {
  console.log(path);
  Object.keys(colorMap).forEach((key) => {
    debugger;
    colorMap[key] = unselectedColor;
  });
  colorMap[path] = selectedColor;
}
</script>
