<template>
  <div class="min-h-screen bg-base-200 font-primary">
    <!-- Hero Image Section -->
    <div class="relative h-[70vh] min-h-[600px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          :src="heroImage"
          alt="Cseresznyefa Vendégház"
          class="w-full h-full object-cover"
        />
        <!-- Overlay for the image to increase contrast -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative h-full flex items-center">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <motion.div
              :initial="heroVariants.hidden"
              :whileInView="heroVariants.visible(0)"
              class="text-center"
            >
              <h1
                class="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tight"
              >
                Cseresznyefa Vendégház
              </h1>
              <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p
                class="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                Üdvözöljük Dorog szívében, ahol a kényelem és otthonosság
                találkozik a természet szépségével.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Info Cards -->
    <div class="container mx-auto px-4 -mt-20 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            v-for="(info, index) in quickInfo"
            :key="info.title"
            :initial="cardVariants.hidden"
            :whileInView="cardVariants.visible(index)"
            class="bg-base-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="text-primary mb-4">
              <component :is="info.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-display font-semibold mb-2">
              {{ info.title }}
            </h3>
            <p class="text-base-content/70 font-light">
              {{ info.description }}
            </p>
          </motion.div>
        </div>
      </div>
    </div>

    <!-- Description Section -->
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-6xl mx-auto">
        <motion.div
          :initial="contentVariants.hidden"
          :whileInView="contentVariants.visible"
          class="bg-base-100 rounded-2xl shadow-xl overflow-hidden"
        >
          <div class="grid xl:grid-cols-2 gap-8">
            <!-- Left Column: Text Content -->
            <div class="p-8 xl:p-12">
              <h2 class="text-4xl font-display font-bold text-primary mb-8">
                Rólunk
              </h2>
              <div class="space-y-6">
                <div class="relative pl-6 border-l-2 border-primary/20">
                  <p class="text-lg font-light leading-relaxed">
                    A Cseresznyefa Vendégház közös folyosóról nyíló két külön
                    bejáratú, önálló apartmannal 10-11 főnek kínál szállást
                    Dorogon családi házas övezetben, mégis közel a város
                    forgatagához.
                  </p>
                </div>
                <div class="relative pl-6 border-l-2 border-primary/20">
                  <p class="text-lg font-light leading-relaxed">
                    Szállásunk tökéletes választás egy családi feltöltődéshez.
                    Ha az idő kellemes, a kertünk és a házunk kikapcsolódási
                    lehetőségeit az egész család élvezheti. A wifi a szálláshely
                    egész területén ingyenes. Mindkét szállásegység
                    légkondicionált, saját fürdőszobával, síkképernyős tévével
                    és felszerelt konyhaegységgel rendelkezik. A frissen
                    felújított vendégházhoz jakuzzi is tartozik, a kertben pedig
                    grillezési lehetőség teszi hangulatosabbá a pihenést.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Column: Image Grid -->
            <div class="relative h-full min-h-[400px] bg-base-200">
              <div class="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                <motion.div
                  v-for="(image, index) in aboutImages"
                  :key="index"
                  :initial="{ opacity: 0, scale: 0.9 }"
                  :whileInView="{ opacity: 1, scale: 1 }"
                  :transition="{ delay: index * 0.2 }"
                  class="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <!-- Apartment Section-->
    <ApartmentSection />
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import heroImage from "@images/apartments/deluxe/2_12.webp";
import ApartmentSection from "@/components/apartment/ApartmentSection.vue";

import {
  heroVariants,
  cardVariants,
  contentVariants,
  quickInfo,
  aboutImages,
} from "@/data/HomePageData";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap");

:root {
  --font-display: "Playfair Display", serif;
  --font-primary: "Inter", sans-serif;
}

.font-display {
  font-family: var(--font-display);
}

.font-primary {
  font-family: var(--font-primary);
}

.prose {
  color: hsl(var(--bc));
}

.prose p {
  margin-bottom: 1.5rem;
}
</style>
