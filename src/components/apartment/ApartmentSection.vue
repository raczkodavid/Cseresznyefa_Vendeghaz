<template>
  <section class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Apartmanjaink</h2>
        <p class="text-base-content/80 max-w-2xl mx-auto">
          Válassza ki az Önnek legmegfelelőbb apartmant. Mindkét apartmanunk
          modern felszereléssel és kényelmes környezettel várja vendégeit.
        </p>
        <p class="max-w-2xl mx-auto mt-4 font-bold">
          A két apartman <span class="text-primary">150.000 Ft / éj</span>
          {{ " " }} áron egyben bérelhető.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
      >
        <ApartmentCard
          v-for="apartment in apartments"
          :key="apartment.id"
          :apartment="apartment"
          :isSelected="selectedApartment?.id === apartment.id"
          @click="handleApartmentClick(apartment)"
        />
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <ApartmentDetails
          v-if="selectedApartment"
          :apartment="selectedApartment"
          @close="() => (selectedApartment = null)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { apartments } from "@/data/ApartmentData";
import ApartmentCard from "@components/apartment/ApartmentCard.vue";
import ApartmentDetails from "@components/apartment/ApartmentDetails.vue";
import type { Apartment } from "@/types/types";

const selectedApartment = ref<Apartment | null>(null);

const handleApartmentClick = (apartment: Apartment) => {
  selectedApartment.value = apartment;
};
</script>

<style scoped></style>
