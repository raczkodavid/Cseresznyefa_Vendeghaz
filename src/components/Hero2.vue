<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div
      ref="hero"
      class="relative py-20 bg-gradient-to-b from-white to-gray-200"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)] opacity-50"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <!-- Title and Text in Flex Layout -->
        <div class="flex flex-col md:flex-row justify-between items-start mb-4">
          <!-- Title on the Left -->
          <div class="md:w-1/2">
            <h1
              v-motion
              :initial="heroVariants.hidden"
              :visible="
                isHeroVisible ? heroVariants.visible(0) : heroVariants.hidden
              "
              class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 tracking-tight leading-tight"
            >
              LUXURY SERVICED APARTMENTS
            </h1>
          </div>

          <!-- Text on the Right -->
          <div class="md:w-1/2 mt-4 md:mt-0">
            <p
              v-motion
              :initial="heroVariants.hidden"
              :visible="
                isHeroVisible ? heroVariants.visible(1) : heroVariants.hidden
              "
              class="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Modern Fully Equipped Spaces for Tourists And Contractors—Short Or
              Long Stays Available
            </p>
          </div>
        </div>

        <!-- Hero Image Below -->
        <div
          v-motion
          :initial="heroVariants.hidden"
          :visible="
            isHeroVisible ? heroVariants.visible(2) : heroVariants.hidden
          "
          class="w-full"
        >
          <img
            src="@images/apartments/deluxe/2_7.webp"
            alt="Luxury Apartment Interior"
            class="h-150 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver, useDebounceFn } from "@vueuse/core";

// Hero animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: i * 0.15,
      type: "tween",
    },
  }),
};

// Hero visibility tracking
const hero = ref<HTMLElement | null>(null);
const isHeroVisible = ref(true); // Start visible for initial load

// Debounce visibility updates to prevent rapid triggers
const debouncedSetVisible = useDebounceFn((visible: boolean) => {
  isHeroVisible.value = visible;
}, 100);

// Intersection observer to detect hero visibility
useIntersectionObserver(
  hero,
  ([{ isIntersecting }]) => {
    debouncedSetVisible(isIntersecting);
  },
  { rootMargin: "-100px", threshold: 0.1 }
);
</script>
