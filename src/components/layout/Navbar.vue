<template>
  <div class="navbar bg-base-100 shadow-sm h-10">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
            {" "}
          </svg>
        </div>
        <ul
          tabIndex="{0}"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <router-link to="/"> Kezdőlap </router-link>
          </li>
          <li>
            <router-link to="/about"> Rólunk </router-link>
          </li>
          <li>
            <router-link to="/activities"> Szabadidő & Étkezés </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/" class="pl-3">
        <img
          :src="logo"
          alt="Cseresznyefa Vendégház"
          class="h-12 dark:invert dark:brightness-90"
        />
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link to="/"> Kezdőlap </router-link>
        </li>
        <li>
          <router-link to="/about"> Rólunk </router-link>
        </li>
        <li>
          <router-link to="/activities"> Szabadidő & Étkezés </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <label class="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>
        <input
          type="checkbox"
          class="toggle theme-controller"
          :checked="theme === 'dark'"
          @change="toggleTheme"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import logo from "@images/logos/logo3.png";

// State: current theme
const theme = ref(localStorage.getItem("theme") || "light");

// Apply theme to <html>
const applyTheme = () => {
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
};

// Toggle between light and synthwave
const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  applyTheme();
};

// Set theme on first load
onMounted(() => {
  applyTheme();
});
</script>
