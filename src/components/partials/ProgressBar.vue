<template>
  <div class="flex flex-col w-full">
    <div
      class="semi-donut flex flex-row items-end justify-center"
      style="--percentage: 50"
    >
      <div class="flex flex-col items-center">
        <strong class="text-7xl font-normal">75</strong>
        <p>13 kg para o meu objetivo</p>
      </div>
    </div>
    <div class="flex flex-row justify-between w-full py-2 px-6">
      <p class="text-sm font-normal">77kg</p>
      <p class="text-sm font-normal">70kg</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
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
