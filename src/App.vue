<script setup lang="ts"></script>

<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from "@components/layout/Navbar.vue";
import { RouterView } from "vue-router";
</script>
