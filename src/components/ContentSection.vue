<template>
  <div
    class="card bg-base-100 shadow-2xl my-12 transform hover:scale-[1.01] transition-transform duration-300 animate-fade-in"
  >
    <div class="card-body">
      <div class="flex items-center mb-6">
        <div
          class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
        >
          <span v-html="props.icon"></span>
        </div>
        <h2 class="card-title text-3xl text-primary">{{ props.title }}</h2>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  icon: string;
}>();
</script>
