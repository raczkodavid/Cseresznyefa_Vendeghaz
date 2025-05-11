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

// Import all images
// Navigation cards
import sightseeingImg from "@images/activities/categories/sightseeing.jpg";
import excursionImg from "@images/activities/categories/excursion.jpg";
import programsImg from "@images/activities/categories/programs.jpg";

// Attractions
import emlekhazImg from "@images/activities/sights/emlekhaz.jpg";
import agoraImg from "@images/activities/sights/agora.jpg";
import helytortenetiImg from "@images/activities/sights/helytorteneti.jpg";
import plebaniatemplomImg from "@images/activities/sights/plebaniatemplom.jpg";
import szentborbalaImg from "@images/activities/sights/szentborbala.jpg";
import mariabarlangImg from "@images/activities/sights/mariabarlang.jpg";
import banyasztortenetiImg from "@images/activities/sights/banyasztorteneti.jpg";
import kalvariaImg from "@images/activities/sights/kalvaria.jpg";
import sportmuzeumImg from "@images/activities/sights/sportmuzeum.webp";
import stadionImg from "@images/activities/sights/stadion.jpg";
import muvhazImg from "@images/activities/sights/muvhaz.jpg";
import jubileumImg from "@images/activities/sights/jubileum.jpg";
import banyaszemlekhazImg from "@images/activities/sights/banyaszemlekhaz.jpg";
import bazilikaImg from "@images/activities/sights/bazilika.jpg";

// Hiking
import satorkoImg from "@images/activities/excursion/satorko.jpg";
import devenyiantalImg from "@images/activities/excursion/devenyiantal.jpg";
import kolostorImg from "@images/activities/excursion/kolostor.jpg";
import zsivanysziklakImg from "@images/activities/excursion/zsivanysziklak.jpg";
import egrivarmasolataImg from "@images/activities/excursion/egrivarmasolata.jpg";
import ariadneImg from "@images/activities/excursion/ariadne.jpg";
import metternichImg from "@images/activities/excursion/metternich.jpg";
import jankovichImg from "@images/activities/excursion/jankovich.jpg";
import fellegvarImg from "@images/activities/excursion/fellegvar.jpg";

// Activities
import balayaImg from "@images/activities/programs/balaya.jpg";
import uszodaImg from "@images/activities/programs/uszoda.jpg";
import musicbeachImg from "@images/activities/programs/musicbeach.jpg";
import muvhazProgramImg from "@images/activities/programs/muvhaz.webp";
import logatoImg from "@images/activities/programs/logato.jpg";
import buvarImg from "@images/activities/programs/buvar.jpg";

// Dining
import heimImg from "@images/activities/dining/heim.jpg";
import dianaImg from "@images/activities/dining/diana.jpg";
import lipotiImg from "@images/activities/dining/lipoti.jpg";
import postakocsiImg from "@images/activities/dining/postakocsi.jpg";
import hatarcsardaImg from "@images/activities/dining/hatarcsarda.jpg";
import osztermannImg from "@images/activities/dining/osztermann.jpg";
import feketesasImg from "@images/activities/dining/feketesas.jpg";
import balayaDiningImg from "@images/activities/dining/balaya.jpg";
import horvathkertImg from "@images/activities/dining/horvathkert.jpg";
import luigiImg from "@images/activities/dining/luigi.jpg";
import pollushofImg from "@images/activities/dining/pollushof.jpg";
import sugartImg from "@images/activities/dining/sugart.jpg";
import restaurant42Img from "@images/activities/dining/42restaurant.jpg";
import szamosImg from "@images/activities/dining/szamos.jpg";
import muzeumcukraszdaImg from "@images/activities/dining/muzeumcukraszda.jpg";

// State
const activeTab = ref("attractions");

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.2,
      ease: "easeOut",
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.05,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

// Navigation cards data
const navigationCards = [
  {
    title: "Látnivalók",
    description: "Fedezz fel történelmi és kulturális kincseket!",
    image: sightseeingImg,
    tab: "attractions",
  },
  {
    title: "Kirándulás",
    description: "Túrázz a természet szívében!",
    image: excursionImg,
    tab: "hiking",
  },
  {
    title: "Programok & Étkezés",
    description: "Éld át a helyi élményeket és ízeket!",
    image: programsImg,
    tab: "activities",
  },
];

// Sections Data
const sections = {
  attractions: {
    title: "Látnivalók és nevezetességek",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    `,
    content: [
      {
        name: "Német Nemzetiségi Emlékház",
        distance: "280 m",
        image: emlekhazImg,
      },
      {
        name: "Schmidt Sándor Agora",
        distance: "350 m",
        image: agoraImg,
      },
      {
        name: "Gáthy Zoltán Városi Könyvtár és Helytörténeti Múzeum",
        distance: "350 m",
        image: helytortenetiImg,
      },
      {
        name: "Szent József plébániatemplom",
        distance: "400 m",
        image: plebaniatemplomImg,
      },
      {
        name: "Szent Borbála bányásztemplom",
        distance: "450 m",
        image: szentborbalaImg,
      },
      {
        name: "Mária-Barlang",
        distance: "600 m",
        image: mariabarlangImg,
      },
      {
        name: "Reimann Bányászattörténeti Miniverzum",
        distance: "850 m",
        image: banyasztortenetiImg,
      },
      {
        name: "Kálvária",
        distance: "1 km",
        image: kalvariaImg,
      },
      {
        name: "Dorogi Sportmúzeum",
        distance: "1 km",
        image: sportmuzeumImg,
      },
      {
        name: "Buzánszky Jenő Stadion",
        distance: "1 km",
        image: stadionImg,
      },
      {
        name: "József Attila Művelődési Ház",
        distance: "1,5 km",
        image: muvhazImg,
      },
      {
        name: "Jubileum tér",
        distance: "2 km",
        image: jubileumImg,
      },
      {
        name: "Bányász Emlékház",
        distance: "1,5 km",
        image: banyaszemlekhazImg,
      },
      {
        name: "Esztergom Bazilika, Vár",
        distance: "10 km",
        image: bazilikaImg,
      },
    ],
  },
  hiking: {
    title: "Kirándulási lehetőségek",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `,
    content: [
      {
        location: "Esztergom",
        spots: ["Strázsa-hegyi barlang", "Sátorkőpusztai barlang"],
        image: satorkoImg,
      },
      {
        location: "Piliscsaba",
        spots: ["Dévényi Antal kilátó", "Gomba szikla", "Ördögoltár szikla"],
        image: devenyiantalImg,
      },
      {
        location: "Pilisszentkereszt",
        spots: [
          "Boldog Özséb kilátó",
          "Pilis tető",
          "Ciszterci kolostorrom",
          "Vaskapu szikla",
          "Vaskapu völgy",
        ],
        image: kolostorImg,
      },
      {
        location: "Pilisszentkereszt, Dobogókő",
        spots: ["Zsivány sziklák"],
        image: zsivanysziklakImg,
      },
      {
        location: "Pilisborosjenő",
        spots: [
          "Teve-szikla",
          "Egri vár másolata",
          "Kevélyhegyi Levendulamező",
        ],
        image: egrivarmasolataImg,
      },
      {
        location: "Kesztölc",
        spots: ["Ariadne barlangrendszer"],
        image: ariadneImg,
      },
      {
        location: "Baja",
        spots: ["Sándor Metternich-kastély"],
        image: metternichImg,
      },
      {
        location: "Bajót",
        spots: ["Jankovich-barlang"],
        image: jankovichImg,
      },
      {
        location: "Visegrád",
        spots: ["Fellegvár"],
        image: fellegvarImg,
      },
    ],
  },
  activities: {
    title: "Programok",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `,
    content: [
      {
        name: "Balaya játszóház",
        distance: "900 m",
        description: "játszóház, kávézó",
        image: balayaImg,
      },
      {
        name: "Nipl Stefánia uszoda",
        distance: "950 m",
        description: "uszoda, szauna, masszázs",
        image: uszodaImg,
      },
      {
        name: "Öböl Music Beach",
        distance: "1,4 km",
        description: "strand, autós találkozók",
        image: musicbeachImg,
      },
      {
        name: "József Attila Művelődési Ház",
        distance: "1,5 km",
        description: "TEKE, színház, stand-up előadások",
        image: muvhazProgramImg,
      },
      {
        name: "Lóga-tó",
        distance: "1,9 km",
        description: "horgászat",
        image: logatoImg,
      },
      {
        name: "Öböl Beach Búvár Centrum",
        distance: "2,3 km",
        description: "búvárkodás",
        image: buvarImg,
      },
    ],
  },
  dining: {
    title: "Étkezés",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    `,
    content: [
      {
        name: "Heim pékség",
        distance: "260 m",
        description: "péksütemények, hideg-, meleg szendvics, kávé",
        image: heimImg,
      },
      {
        name: "Diána Cukrászda",
        distance: "270 m",
        description: "hagyományos és mentes cukrászda",
        image: dianaImg,
      },
      {
        name: "Lipóti pékség",
        distance: "650 m",
        description: "péksütemények, szendvicsek, kávé",
        image: lipotiImg,
      },
      {
        name: "Postakocsi Bisztró",
        distance: "450 m",
        description: "pizza, olaszos ételek",
        image: postakocsiImg,
      },
      {
        name: "Határ Csárda",
        distance: "750 m",
        description: "hagyományos magyaros ételek",
        image: hatarcsardaImg,
      },
      {
        name: "Osztermann Cukrászda",
        distance: "750 m",
        description: "",
        image: osztermannImg,
      },
      {
        name: "Fekete Sas menü",
        distance: "800 m",
        description: "",
        image: feketesasImg,
      },
      {
        name: "Balaya Bamboo",
        distance: "900 m",
        description: "szendvicsek, kávék, koktélok",
        image: balayaDiningImg,
      },
      {
        name: "Horváth Kertvendéglő",
        distance: "1 km",
        description: "hagyományos magyaros ételek",
        image: horvathkertImg,
      },
      {
        name: "Luigi pizzéria",
        distance: "csak házhoz rendeléssel",
        description: "",
        image: luigiImg,
      },
      {
        name: "Pollushof Panzió és Étterem",
        distance: "3 km",
        description: "hagyományos ételek, svédasztalos fogyasztás",
        image: pollushofImg,
      },
      {
        name: "Sugart cukrászda",
        distance: "5 km",
        description: "",
        image: sugartImg,
      },
      {
        name: "42 Restaurant",
        distance: "10 km",
        description: "Michelin csillagos étterem",
        image: restaurant42Img,
      },
      {
        name: "Szamos Kávéház",
        distance: "9 km",
        description: "",
        image: szamosImg,
      },
      {
        name: "Múzeum Cukrászda",
        distance: "10 km",
        description: "",
        image: muzeumcukraszdaImg,
      },
    ],
  },
};
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
