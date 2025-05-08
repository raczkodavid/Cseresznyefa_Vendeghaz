import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@components/pages/HomePage.vue";
import AboutPage from "@components/pages/AboutPage.vue";
import ActivitiesPage from "@components/pages/ActivitiesPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/activities", component: ActivitiesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
