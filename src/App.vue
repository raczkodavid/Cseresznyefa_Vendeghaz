<script setup lang="ts"></script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@components/layout/Navbar.vue";
import Footer from "@components/layout/Footer.vue";
import { RouterView } from "vue-router";
</script>
