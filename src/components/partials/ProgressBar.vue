<template>
  <div class="flex flex-col w-full">
    <div
      class="semi-donut flex flex-row items-end justify-center"
      :style="`--percentage: ${percentage};`"
    >
      <div class="flex flex-col items-center">
        <strong class="text-6xl font-normal">{{ currentWeight }}</strong>
        <p>{{ weightLeftToGoal.toFixed(2) }} kg para o meu objetivo</p>
      </div>
    </div>
    <div class="flex flex-row justify-between w-full py-2 px-6">
      <p class="text-sm font-normal">{{ startWeight }} kg</p>
      <p class="text-sm font-normal">{{ targeWeight || 0 }}kg</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storage } from "@/services/storage";

const startWeight = storage.getStartWeight()?.weight ?? 0;
const targeWeight = storage.getTargetWeight();
const currentWeight = storage.getCurrentWeight();

const isGoalAchieved = currentWeight <= targeWeight;
let weightLeftToGoal = (targeWeight - currentWeight) * -1;
weightLeftToGoal = weightLeftToGoal < 0 ? 0 : weightLeftToGoal;

let percentage = 0;
if (isGoalAchieved) {
  percentage = 100;
} else if (currentWeight > startWeight) {
  percentage = 0;
} else {
  percentage = Math.round(
    ((startWeight - currentWeight) / (startWeight - targeWeight)) * 100
  );
}
</script>
<style scoped>
.semi-donut {
  width: 80%;
  height: calc(70vw / 2);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: auto;
  /* border: 1px solid red; */

  --percentage: 0;
  --fill: rgb(249 115 22);
}

.semi-donut:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 2px;
  width: 100%;
  height: 200%;
  border: 15px solid blue;
  border-color: var(--fill) var(--fill) #f1f5f9 #f1f5f9;
  border-radius: 50%;
  transform: rotate(calc(1deg * (-225 + var(--percentage) * 1.8)));
  animation: fillAnimation 1s ease-in;
}

@keyframes fillAnimation {
  0% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(calc(1deg * (-225 + var(--percentage) * 1.8)));
  }
}
</style>
