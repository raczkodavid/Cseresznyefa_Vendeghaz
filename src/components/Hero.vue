<template>
  <div class="relative overflow-hidden bg-base-200 py-8 md:py-12">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div
        class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8 items-stretch">
        <Description />
        <Carousel :images="deluxeImages" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Description from "@components/Description.vue";
import Carousel from "@components/Carousel.vue";
import { deluxeImages } from "@/data/ApartmentData";
</script>

<style scoped></style>
