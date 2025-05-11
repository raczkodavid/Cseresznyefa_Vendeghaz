<template>
  <motion.div
    ref="target"
    :initial="cardVariants.hidden"
    :whileInView="cardVariants.visible"
    class="card bg-base-100/80 backdrop-blur-sm shadow-lg mb-8 rounded-2xl border-2 border-transparent hover:border-[length:2px] hover:border-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:shadow-xl hover:bg-base-100/90 transition-all duration-300 group"
    v-bind="$attrs"
  >
    <div class="card-body flex flex-col md:flex-row gap-8 p-5 md:p-8">
      <div class="md:w-3/4">
        <h2
          class="card-title text-3xl md:text-4xl text-primary mb-4 font-bold leading-tight tracking-tight group-hover:text-primary/90 transition-colors"
        >
          {{ props.title }}
        </h2>
        <p
          v-if="description"
          class="mb-6 text-base-content/80 text-lg leading-relaxed group-hover:text-base-content/90 transition-colors"
        >
          {{ props.description }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(list, listIndex) in props.lists" :key="listIndex">
            <h3
              v-if="list.title"
              class="text-xl font-semibold mb-3 text-base-content leading-tight group-hover:text-base-content/90 transition-colors"
            >
              {{ list.title }}
            </h3>
            <ul
              class="space-y-3 text-base-content/80 text-sm md:text-base leading-6"
            >
              <motion.li
                v-for="(item, itemIndex) in list.items"
                :key="itemIndex"
                :initial="listItemVariants.hidden"
                :whileInView="listItemVariants.visible(itemIndex)"
                class="flex items-center hover:-translate-x-0.5 hover:text-base-content hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-md px-2 py-1 transition-all duration-200"
              >
                <span
                  class="text-xl md:text-2xl mr-3 group-hover:scale-105 transition-transform"
                >
                  {{ item.emoji }}
                </span>
                <span v-html="item.text"></span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        :initial="sidebarVariants.hidden"
        :whileInView="sidebarVariants.visible"
        :hovered="sidebarVariants.hover"
        class="md:w-1/4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center p-5 md:p-6 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)] opacity-30"
        ></div>
        <div class="text-center relative z-10">
          <component :is="props.sidebar.icon" />
          <p
            class="text-base font-semibold text-base-content/80 group-hover:text-base-content leading-tight transition-colors"
          >
            {{ props.sidebar.text }}
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";
import type { Component } from "vue";

const props = defineProps<{
  title?: string;
  description?: string;
  lists: Array<{
    title: string;
    items: Array<{
      emoji: string;
      text: string;
    }>;
  }>;
  sidebar: {
    icon: Component;
    text: string;
  };
  cardVariants: {
    hidden: Record<string, any>;
    visible: Record<string, any>;
  };
  listItemVariants: {
    hidden: Record<string, any>;
    visible: (index: number) => Record<string, any>;
  };
  sidebarVariants: {
    hidden: Record<string, any>;
    visible: Record<string, any>;
    hover: Record<string, any>;
  };
}>();

const target = ref(null);
</script>
