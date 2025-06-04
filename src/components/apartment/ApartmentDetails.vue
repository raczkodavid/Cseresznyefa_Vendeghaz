<template>
  <div
    class="bg-base-100 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
  >
    <Carousel :images="props.apartment.images" />
    <div class="p-6 space-y-6">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h2 class="text-3xl font-bold">{{ props.apartment.name }}</h2>
          <div class="flex items-center gap-2 mt-2">
            <span
              :class="[
                'badge rounded-xl',
                apartment.type === 'deluxe'
                  ? 'badge-primary'
                  : 'badge-secondary',
              ]"
            >
              {{ apartment.type === "deluxe" ? "Deluxe" : "Standard" }}
            </span>
            <span class="badge badge-outline rounded-xl">
              {{ apartment.maxGuests }} fő
            </span>
          </div>
        </div>
        <div class="text-2xl font-bold text-primary">
          {{ props.apartment.pricePerNight.toLocaleString("hu-HU") }} Ft / éj
        </div>
      </div>

      <p class="text-base-content/80">{{ props.apartment.description }}</p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Felszereltség</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(amenity, index) in props.apartment.amenities"
            :key="index"
            class="badge rounded-xl badge-outline shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {{ amenity }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div
          class="stat bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="stat-title">Méret</div>
          <div class="stat-value text-lg">{{ props.apartment.size }}m²</div>
        </div>
        <div
          class="stat bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="stat-title">Hálószoba</div>
          <div class="stat-value text-lg">{{ props.apartment.bedrooms }}</div>
        </div>
        <div
          class="stat bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="stat-title">Fürdőszoba</div>
          <div class="stat-value text-lg">{{ props.apartment.bathrooms }}</div>
        </div>
      </div>
      <div class="flex justify-end gap-4 pt-4">
        <button class="btn btn-ghost" @click="handleClose">Bezárás</button>
        <button class="btn btn-primary">Foglalás</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/sections/Carousel.vue";
import type { Apartment } from "@/types/types";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = () => {
  emit("close");
};

const props = defineProps<{
  apartment: Apartment;
}>();
</script>
