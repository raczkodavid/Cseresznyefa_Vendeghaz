<template>
  <div
    class="card bg-base-100 shadow-2xl backdrop-blur-sm bg-opacity-90 border border-base-300 rounded-2xl h-full"
  >
    <div class="card-body">
      <div class="space-y-6">
        <div class="inline-block">
          <span class="badge badge-primary text-sm font-medium px-4 py-1">
            Vendégház
          </span>
        </div>
        <h2
          class="text-3xl md:text-4xl font-bold text-base-content leading-tight"
        >
          Cseresznyefa <span class="text-primary">Vendégház</span>
        </h2>
        <p class="text-base-content/80 leading-relaxed text-lg">
          A Cseresznyefa Vendégház közös folyosóról nyíló két külön bejáratú,
          önálló apartmannal 10-11 főnek kínál szállást Dorogon családi házas
          övezetben, mégis közel a város forgatagához.
        </p>

        <div class="divider"></div>

        <div class="space-y-4">
          <DuplexFeature
            v-for="(feature, index) in features"
            :key="index"
            :featureDescription="feature"
          />
        </div>

        <div class="pt-4">
          <button class="btn btn-primary btn-lg w-full">Foglalás</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DuplexFeature from "@components/DuplexFeature.vue";

const features = [
  "Ingyenes WiFi az egész területen",
  "Légkondicionálás minden szobában",
  "Jakuzzi és grillezési lehetőség",
];
</script>
