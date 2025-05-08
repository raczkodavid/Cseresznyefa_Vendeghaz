<template>
  <div class="flex items-center gap-3">
    <div
      class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
    >
      <CheckMark />
    </div>
    <span class="text-base-content/90 font-medium">
      {{ props.featureDescription }}
    </span>
  </div>
</template>

<script setup lang="ts">
import CheckMark from "@components/CheckMark.vue";

const props = defineProps({
  featureDescription: String,
});
</script>
