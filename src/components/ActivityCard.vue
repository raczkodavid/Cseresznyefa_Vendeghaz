<template>
  <div
    @click="$emit('click')"
    class="relative flex-1 h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105"
    :class="{ 'ring-4 ring-primary': props.isActive }"
  >
    <img
      :src="props.image"
      :alt="title"
      class="w-full h-full object-cover opacity-70"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
    ></div>
    <div class="absolute bottom-0 p-6">
      <h3 class="text-2xl font-bold text-white mb-2">{{ props.title }}</h3>
      <p class="text-white/80 text-sm">{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  image: string;
  isActive: boolean;
}>();

const emit = defineEmits(["click"]);
</script>
