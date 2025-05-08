<template>
  <div class="relative">
    <!-- Hero section -->
    <section
      class="relative flex items-center justify-center text-white text-center overflow-hidden"
    >
      <!-- Background image with parallax effect -->
      <img
        :src="heroImage"
        alt="Hero background"
        class="absolute inset-0 w-full h-full object-cover z-0 transform transition-transform duration-1000 ease-out"
        :class="{ 'scale-110': isScrolled }"
      />

      <!-- Overlay with gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-700/50 z-10"
      ></div>

      <!-- Hero content with fade-in animation -->
      <div class="relative z-20 px-4 max-w-4xl animate-fade-in-up">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl tracking-tight"
        >
          Fedezze fel vendégházunkat
        </h1>
        <p
          class="text-xl md:text-2xl text-white/90 drop-shadow-md leading-relaxed"
        >
          Ez az oldal részletes információkat nyújt a szálláshelyről,
          szolgáltatásainkról, és arról, mitől lesz különleges az itt töltött
          idő.
        </p>
        <a
          href="#features"
          class="mt-8 inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 hover:scale-105 transition-all duration-300"
        >
          Tudjon meg többet
        </a>
      </div>
    </section>

    <!-- Feature cards section, visible on page load -->
    <section id="features" class="py-16 bg-gray-50 text-gray-800 relative z-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10">
          <!-- Card 1 -->
          <div
            class="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
          >
            <div
              class="absolute inset-0 bg-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative text-amber-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 h-14 mx-auto transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 17l4 4 4-4m0-10l-4-4-4 4"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">
              Prémium Kényelem
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Tágas, jól felszerelt apartmanok, melyek minden igényt
              kielégítenek.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
          >
            <div
              class="absolute inset-0 bg-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative text-amber-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 h-14 mx-auto transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2m0-6v2m0 8v2m6-6h-2m-8 0H6"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">
              Lélegzetelállító Környezet
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Csodás kilátás és természetközeli élmény minden évszakban.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
          >
            <div
              class="absolute inset-0 bg-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative text-amber-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-14 h-14 mx-auto transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h2l3 9h8l3-9h2"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">
              Központi Elhelyezkedés
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Könnyen megközelíthető helyszín, közel a főbb látnivalókhoz.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import heroImage from "@deluxe/2_11.webp";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Tailwind animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}
</style>
