<template>
  <div class="w-full">
    <div
      class="relative overflow-hidden rounded-2xl shadow-2xl h-full"
      @mouseenter="setIsHovered(true)"
      @mouseleave="setIsHovered(false)"
    >
      <div
        class="flex transition-transform duration-700 ease-in-out h-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(image, index) in props.images"
          :key="index"
          class="w-full flex-shrink-0 h-full"
        >
          <img
            :src="image.src"
            :alt="`Apartment view ${index + 1}`"
            class="w-auto h-full object-cover"
          />
        </div>
      </div>

      <!-- Navigation buttons - fixed to prevent flickering -->
      <div class="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          class="btn btn-circle btn-ghost bg-base-100/80 backdrop-blur-sm"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div class="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          class="btn btn-circle btn-ghost bg-base-100/80 backdrop-blur-sm"
          @click="nextSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Slide indicators -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          v-for="(_, index) in props.images"
          :key="index"
          :class="[
            'w-2.5 h-2.5 rounded-full transition-all duration-300',
            index == currentSlide ? 'bg-primary' : 'bg-base-100/50',
          ]"
          @click="setCurrentSlide(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import type { ApartmentImage } from "@/types/types";

const props = defineProps<{
  images: ApartmentImage[];
}>();

// reactive state
const currentSlide = ref(0);
const isHovered = ref(false);
let slideInterval: number | null = null;

// constants
const AUTOMATIC_SLIDE_INTERVAL = 3000;

const startSlideInterval = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  slideInterval = window.setInterval(() => {
    nextSlide();
  }, AUTOMATIC_SLIDE_INTERVAL);
};

const stopSlideInterval = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + props.images.length) % props.images.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length;
};

const setCurrentSlide = (index: number) => {
  currentSlide.value = index;
};

const setIsHovered = (value: boolean) => {
  isHovered.value = value;
};

// Watch for hover state changes
watch(isHovered, (isHovered) => {
  if (isHovered) {
    stopSlideInterval();
  } else {
    startSlideInterval();
  }
});

onMounted(() => {
  startSlideInterval();
});

onUnmounted(() => {
  stopSlideInterval();
});
</script>
