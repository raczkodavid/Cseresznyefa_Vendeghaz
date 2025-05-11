<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
    <!-- Hero Section -->
    <div ref="hero" class="relative py-20 text-center">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] opacity-50"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <!-- Title -->
        <h1
          v-motion
          :initial="heroVariants.hidden"
          :visible="
            isHeroVisible ? heroVariants.visible(0) : heroVariants.hidden
          "
          class="text-4xl md:text-5xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Rent My Modern Apartment
        </h1>

        <!-- Subtitle -->
        <p
          v-motion
          :initial="heroVariants.hidden"
          :visible="
            isHeroVisible ? heroVariants.visible(1) : heroVariants.hidden
          "
          class="text-lg md:text-xl text-gray-600 mb-6 max-w-md mx-auto"
        >
          Book for Days, Starting at $80/Day – Comfort and Style Await
        </p>

        <!-- Hero Image -->
        <div
          v-motion
          :initial="heroVariants.hidden"
          :visible="
            isHeroVisible ? heroVariants.visible(2) : heroVariants.hidden
          "
          class="w-full max-w-4xl mx-auto"
        >
          <img
            src="@images/apartments/deluxe/2_1.webp"
            alt="Modern Apartment Interior"
            class="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>

        <!-- CTA Button -->
        <div
          v-motion
          :initial="heroVariants.hidden"
          :visible="
            isHeroVisible ? heroVariants.visible(3) : heroVariants.hidden
          "
          class="mt-8"
        >
          <button class="btn btn-primary text-white">Check Availability</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Hero animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

// Hero visibility tracking
const hero = ref<HTMLElement | null>(null);
const isHeroVisible = ref(true); // Start visible for initial load
</script>
