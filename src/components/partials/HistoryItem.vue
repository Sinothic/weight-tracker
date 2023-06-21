<template>
  <div class="relative flex flex-row items-center overflow-x-hidden px-6">
    <section
      ref="item"
      @touchstart="touchHandler"
      @touchmove="touchHandler"
      @touchend="touchReleaseHandler"
      class="flex flex-row w-100 items-center py-5 border-gray-50 select-none w-full bg-gray-50 z-2"
      :style="`transform: translateX(${distance}px)`"
    >
      <div class="flex flex-col flex-1">
        <h2 class="text-xl text-gray-500">{{ date }}</h2>
        <p class="text-sm text-gray-400">{{ trend }}</p>
      </div>
      <div class="flex flex-row items-center">
        <strong class="text-3xl font-medium mr-2 text-gray-600">{{
          weight
        }}</strong>
        <div class="text-base text-gray-400">kg</div>
      </div>
    </section>
    <div class="relative flex flex-row items-center">
      <div
        v-if="showContextMenu"
        class="shadow rounded flex flex-col absolute px-4 py-1 top-0 right-5 bg-gray-100 -translate-y-[25%] selection-none cursor-pointer text-wl-red"
      >
        <!-- STEP 1 -->
        <div
          v-if="!isConfirmDelete"
          @click="isConfirmDelete = !isConfirmDelete"
          class="flex flex-row"
        >
          <ph-trash :size="24" color="#AA2222" class="mr-4" />
          <p>Delete</p>
        </div>

        <!-- STEP 2 -->
        <div
          v-show="isConfirmDelete"
          :class="{
            'opacity-100': isConfirmDelete,
            'opacity-0': !isConfirmDelete,
            'flex flex-row justify-between transition-all gap-4': true,
          }"
        >
          <ph-check :size="24" color="#22c55e" @click="$emit('delete')" />
          <ph-x
            :size="24"
            color="#ef4444"
            @click="
              isConfirmDelete == false;
              showContextMenu = false;
            "
          />
        </div>
      </div>

      <ph-dots-three-vertical
        class="max-sm:invisible cursor-pointer"
        :size="24"
        color="#030607"
        @click="showContextMenu = !showContextMenu"
      />
    </div>
    <button
      @click="$emit('delete')"
      class="absolute flex flex-row justify-end items-center right-0 w-[100%] h-full ml-2 bg-red-500 text-white"
      :style="`width: ${distance * -1}px;`"
    >
      <ph-trash :size="32" color="#fff" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const emit = defineEmits(["delete"]);

interface IProps {
  id: string;
  date: string;
  weight: number;
  trend: string;
}
const isConfirmDelete = ref(false);
defineProps<IProps>();

const item = ref<HTMLButtonElement>();
const showContextMenu = ref(false);

const dragValues = reactive({
  startX: 0,
  endX: 0,
});

const distance = computed(() => {
  const distance = dragValues.endX - dragValues.startX;
  return distance > 0 ? 0 : distance;
});

const percent = computed(() => {
  return Math.abs(distance.value) / (item.value?.offsetWidth || 0);
});

function touchHandler(event: TouchEvent) {
  const touche = event.touches[0];
  if (dragValues.startX === 0) {
    dragValues.startX = touche.clientX;
  }
  dragValues.endX = touche.clientX;
}

function touchReleaseHandler() {
  if (Number(percent.value) > 0.5) {
    emit("delete");
  }

  dragValues.startX = 0;
  dragValues.endX = 0;
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
