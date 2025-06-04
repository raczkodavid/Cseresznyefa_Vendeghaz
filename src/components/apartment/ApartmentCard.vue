<template>
  <div
    :class="[
      'card rounded-2xl bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1',
      props.isSelected ? 'ring-2 ring-primary' : '',
    ]"
  >
    <figure class="relative h-64">
      <img
        :src="props.apartment.images[0].src"
        :alt="props.apartment.images[0].alt"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      />
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-2xl font-bold text-white mb-2">
          {{ props.apartment.name }}
        </h3>
        <div class="flex items-center gap-2">
          <span
            :class="[
              'badge',
              'rounded-xl',
              props.apartment.type === 'deluxe'
                ? 'badge-primary'
                : 'badge-secondary',
            ]"
          >
            {{ props.apartment.type === "deluxe" ? "Deluxe" : "Standard" }}
          </span>
          <span class="badge rounded-xl badge-outline text-white">
            {{ props.apartment.maxGuests }} fő
          </span>
        </div>
      </div>
    </figure>
    <div class="card-body">
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(feature, index) in props.apartment.features.slice(0, 3)"
          :key="index"
          class="badge rounded-xl badge-outline"
        >
          {{ feature.label }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-primary">
          {{ props.apartment.pricePerNight.toLocaleString("hu-HU") }} Ft
          <span class="text-sm font-normal text-base-content/70">
            {{ " " }} / éj
          </span>
        </div>
        <button
          :class="[
            'btn',
            props.isSelected ? 'btn-primary' : 'btn-outline btn-primary',
          ]"
        >
          {{ props.isSelected ? "Részletek" : "Megtekintés" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Apartment } from "@/types/types";

const props = defineProps<{
  apartment: Apartment;
  isSelected: boolean;
}>();
</script>
