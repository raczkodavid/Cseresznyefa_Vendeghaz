<template>
  <div class="min-h-screen bg-base-200">
    <!-- Hero Section -->
    <div class="relative py-28 bg-gradient-to-b from-base-300 to-base-accent">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent)] opacity-50"
      ></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Hero Title with animation -->
          <motion.h1
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(0)"
            class="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Rólunk
          </motion.h1>

          <!-- Animated Line -->
          <motion.div
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(1)"
            class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"
          ></motion.div>

          <!-- Animated Paragraph -->
          <motion.p
            :initial="heroVariants.hidden"
            :whileInView="heroVariants.visible(2)"
            class="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto leading-relaxed"
          >
            Ismerje meg vendégházunkat, Dorog szívében, ahol kényelem és
            otthonosság várja!
          </motion.p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16 max-w-5xl">
      <!-- Location and Overview -->
      <CardSection
        title="Elhelyezkedés"
        description="Vendégházunk Budapesttől mindössze 38 km-re, Dorog város szélén, csendes családi házas övezetben található, kiváló megközelíthetőséggel."
        :lists="locationLists"
        :sidebar="{ icon: LocationIcon, text: 'Közel mindenhez' }"
        :card-variants="cardVariants"
        :list-item-variants="listItemVariants"
        :sidebar-variants="sidebarVariants"
      />

      <!-- Check-in/Check-out -->
      <CardSection
        title="Érkezés és távozás"
        :lists="checkInCheckOutLists"
        :sidebar="{ icon: ClockIcon, text: 'Rugalmas érkezés' }"
        :card-variants="cardVariants"
        :list-item-variants="listItemVariants"
        :sidebar-variants="sidebarVariants"
      />

      <!-- Additional Information -->
      <CardSection
        title="További információk"
        :lists="additionalInformationLists"
        :sidebar="{ icon: FamilyIcon, text: 'Családbarát' }"
        :card-variants="cardVariants"
        :list-item-variants="listItemVariants"
        :sidebar-variants="sidebarVariants"
      />

      <!-- Payment Terms -->
      <CardSection
        title="Fizetési feltételek"
        :lists="paymentTermsLists"
        :sidebar="{ icon: CardIcon, text: 'Egyszerű foglalás' }"
        :card-variants="cardVariants"
        :list-item-variants="listItemVariants"
        :sidebar-variants="sidebarVariants"
      />

      <!-- Bank Details -->
      <CardSection
        title="Banki adatok"
        :lists="bankDetailsLists"
        :sidebar="{ icon: BankIcon, text: 'Biztonságos fizetés' }"
        :card-variants="cardVariants"
        :list-item-variants="listItemVariants"
        :sidebar-variants="sidebarVariants"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import CardSection from "@/components/sections/CardSection.vue";

// icons
import LocationIcon from "@components/icons/LocationIcon.vue";
import ClockIcon from "@components/icons/ClockIcon.vue";
import FamilyIcon from "@components/icons/FamilyIcon.vue";
import CardIcon from "@components/icons/CardIcon.vue";
import BankIcon from "@components/icons/BankIcon.vue";

// create lists for the card sections
const locationLists = [
  {
    title: "Közlekedés",
    items: [
      { emoji: "🚌", text: "Buszmegálló: 300 m" },
      { emoji: "🚉", text: "Vasútállomás: 14 perc séta" },
      {
        emoji: "🚆",
        text: "Vonatok: fél óránként Esztergomba és Budapestre",
      },
    ],
  },
  {
    title: "Bankautomaták",
    items: [
      { emoji: "💳", text: "OTP: 170 m" },
      { emoji: "💳", text: "K&H: 350 m" },
      { emoji: "💳", text: "MBH: 700 m" },
      { emoji: "💳", text: "UniCredit: 1,3 km" },
    ],
  },
];

const checkInCheckOutLists = [
  {
    title: "Érkezés",
    items: [
      { emoji: "🕒", text: "Bejelentkezés: délután 3 órától" },
      { emoji: "ℹ️", text: "Korábbi érkezés: foglaltságtól függően" },
      { emoji: "📞", text: "17 óra után érkezés: előre jelezni" },
      { emoji: "🚫", text: "Nem működik 24 órás portaszolgálat" },
    ],
  },
  {
    title: "Távozás",
    items: [
      { emoji: "🕙", text: "Kijelentkezés: reggel 10 óráig" },
      { emoji: "💸", text: "Későbbi távozás: extraköltségekkel jár" },
      { emoji: "📢", text: "Későbbi távozás igényét előre jelezni" },
    ],
  },
];

const additionalInformationLists = [
  {
    title: "",
    items: [
      { emoji: "👶", text: "Gyerekek 0-2 éves korig ingyenes" },
      { emoji: "🐾🚫", text: "Kisállatokat nem fogadunk" },
      { emoji: "🛡️", text: "NTAK azonosító: EG24090226" },
    ],
  },
  {
    title: "Fizetési lehetőségek",
    items: [
      { emoji: "💳", text: "Bankkártyák: VISA, MASTERCARD, MAESTRO" },
      { emoji: "💸", text: "Szép kártyák: OTP, K&H, MBH" },
      {
        emoji: "🏛️",
        text: "Idegenforgalmi adó: 50,- Ft/fő/éj (18 éves felett)",
      },
    ],
  },
];

const paymentTermsLists = [
  {
    title: "Foglalás",
    items: [
      { emoji: "💰", text: "50% foglaló szükséges" },
      {
        emoji: "⏰",
        text: "72 órán belül fizetendő (7 napon túli foglalás)",
      },
      {
        emoji: "⏰",
        text: "24 órán belül fizetendő (7 napon belüli foglalás)",
      },
      { emoji: "🏦", text: "Banki átutalással rendezhető" },
      { emoji: "📝", text: "Közleményben vendég neve szerepeljen" },
    ],
  },
  {
    title: "Lemondási feltételek",
    items: [
      {
        emoji: "🚫",
        text: "Érkezés előtt 5 napon belüli lemondás: 100% lemondási díj",
      },
      {
        emoji: "📅",
        text: "Foglalás áthelyezése: adott naptári évben, max. 90 napon belül",
      },
      {
        emoji: "ℹ️",
        text: "Árak és szabad kapacitás függvényében módosítható",
      },
    ],
  },
];

const bankDetailsLists = [
  {
    title: "K&H Bank",
    items: [
      { emoji: "👤", text: "SZÁMLATULAJDONOS: CREALL Kft." },
      {
        emoji: "🏦",
        text: "BANKSZÁMLASZÁM: 10402496-50526976-53901002",
      },
      {
        emoji: "🌐",
        text: "IBAN SZÁM: HU17 1040 2496 5052 6976 5390 1002",
      },
      { emoji: "🚫", text: "SWIFT/BIC: OKHB HUHB" },
    ],
  },
];

// Hero animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95, rotate: "-5deg" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: "0deg",
    transition: {
      ease: "easeInOut",
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
    },
  }),
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// List item animation variants
const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      delay: i * 0.1,
      type: "spring",
      stiffness: 500,
    },
  }),
};

// Sidebar animation variants
const sidebarVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", damping: 15 },
  },
  hover: { scale: 1.05, y: -5 },
};
</script>
