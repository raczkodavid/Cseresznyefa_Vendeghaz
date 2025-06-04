<template>
  <div class="min-h-screen bg-base-200">
    <!-- Hero Section -->
    <div ref="hero" class="relative py-20 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <motion.h1
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(0)"
            class="text-5xl font-bold mb-4 text-primary"
          >
            Szabadidő & Étkezés
          </motion.h1>
          <motion.div
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(1)"
            class="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(2)"
            class="text-xl text-base-content/80"
          >
            Fedezze fel Dorog és környékének nevezetességeit, programjait és
            gasztronómiai élményeit
          </motion.p>
        </div>
      </div>
    </div>

    <!-- Navigation Cards -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <motion.div
          v-for="(card, index) in navigationCards"
          :key="card.title"
          :initial="cardVariants.hidden"
          :whileInView="cardVariants.visible(index)"
          :whileHover="cardVariants.hover"
        >
          <ActivityCard
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :isActive="activeTab === card.tab"
            @click="activeTab = card.tab"
          />
        </motion.div>
      </div>

      <!-- Dynamic Content -->
      <motion.div
        v-if="activeTab === 'attractions'"
        :initial="contentVariants.hidden"
        :whileInView="contentVariants.visible"
        :exit="contentVariants.hidden"
      >
        <ContentSection
          :title="sections.attractions.title"
          :icon="sections.attractions.icon"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              v-for="(attraction, index) in sections.attractions.content"
              :key="index"
              :initial="itemVariants.hidden"
              :whileInView="itemVariants.visible(index)"
              :whileHover="itemVariants.hover"
              class="bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors duration-300 border-l-4 border-primary flex items-center"
            >
              <img
                :src="attraction.image"
                :alt="attraction.name"
                class="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 class="font-semibold text-lg mb-2">
                  {{ attraction.name }}
                </h3>
                <p class="text-sm text-primary">{{ attraction.distance }}</p>
              </div>
            </motion.div>
          </div>
        </ContentSection>
      </motion.div>

      <motion.div
        v-if="activeTab === 'hiking'"
        :initial="contentVariants.hidden"
        :whileInView="contentVariants.visible"
        :exit="contentVariants.hidden"
      >
        <ContentSection
          :title="sections.hiking.title"
          :icon="sections.hiking.icon"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              v-for="(area, index) in sections.hiking.content"
              :key="index"
              :initial="itemVariants.hidden"
              :whileInView="itemVariants.visible(index)"
              :whileHover="itemVariants.hover"
              class="bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors duration-300 border-l-4 border-primary flex items-center"
            >
              <img
                :src="area.image"
                :alt="area.location"
                class="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 class="font-semibold text-lg mb-2">{{ area.location }}</h3>
                <ul class="space-y-1">
                  <li
                    v-for="(spot, spotIndex) in area.spots"
                    :key="spotIndex"
                    class="text-sm"
                  >
                    {{ spot }}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </ContentSection>
      </motion.div>

      <template v-if="activeTab === 'activities'">
        <motion.div
          :initial="contentVariants.hidden"
          :whileInView="contentVariants.visible"
          :exit="contentVariants.hidden"
        >
          <ContentSection
            :title="sections.activities.title"
            :icon="sections.activities.icon"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                v-for="(activity, index) in sections.activities.content"
                :key="index"
                :initial="itemVariants.hidden"
                :whileInView="itemVariants.visible(index)"
                :whileHover="itemVariants.hover"
                class="bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors duration-300 border-l-4 border-primary flex items-center"
              >
                <img
                  :src="activity.image"
                  :alt="activity.name"
                  class="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 class="font-semibold text-lg mb-1">
                    {{ activity.name }}
                  </h3>
                  <p class="text-sm text-primary mb-2">
                    {{ activity.distance }}
                  </p>
                  <p
                    v-if="activity.description"
                    class="text-sm text-base-content/70"
                  >
                    {{ activity.description }}
                  </p>
                </div>
              </motion.div>
            </div>
          </ContentSection>
        </motion.div>

        <motion.div
          :initial="contentVariants.hidden"
          :whileInView="contentVariants.visible"
          :exit="contentVariants.hidden"
        >
          <ContentSection
            :title="sections.dining.title"
            :icon="sections.dining.icon"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                v-for="(place, index) in sections.dining.content"
                :key="index"
                :initial="itemVariants.hidden"
                :whileInView="itemVariants.visible(index)"
                :whileHover="itemVariants.hover"
                class="bg-base-200 p-4 rounded-lg hover:bg-base-300 transition-colors duration-300 border-l-4 border-primary flex items-center"
              >
                <img
                  :src="place.image"
                  :alt="place.name"
                  class="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 class="font-semibold text-lg mb-1">{{ place.name }}</h3>
                  <p class="text-sm text-primary mb-2">{{ place.distance }}</p>
                  <p
                    v-if="place.description"
                    class="text-sm text-base-content/70"
                  >
                    {{ place.description }}
                  </p>
                </div>
              </motion.div>
            </div>
          </ContentSection>
        </motion.div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";
import ActivityCard from "@components/ActivityCard.vue";
import ContentSection from "@components/ContentSection.vue";

import {
  heroVariants,
  cardVariants,
  contentVariants,
  itemVariants,
  navigationCards,
  sections,
} from "@/data/ActivitiesPageData";

// State
const activeTab = ref("attractions");
</script>

<style scoped>
/* Tailwind animations */
.animate-gradient {
  animation: gradient 15s ease infinite;
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

.animate-expand {
  animation: expand 0.5s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 6rem;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
