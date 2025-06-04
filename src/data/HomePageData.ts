// Import icons
import LocationIcon from "@/components/icons/LocationIcon.vue";
import ClockIcon from "@/components/icons/ClockIcon.vue";
import FamilyIcon from "@/components/icons/FamilyIcon.vue";

// Import images
import image1 from "@images/apartments/deluxe/2_12.webp";
import image2 from "@images/apartments/deluxe/2_7.webp";
import image3 from "@images/apartments/deluxe/2_5.webp";
import image4 from "@images/apartments/deluxe/2_14.webp";

// Animation variants
export const heroVariants = {
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

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

export const contentVariants = {
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

// Quick info data
export const quickInfo = [
  {
    title: "Ideális helyen",
    description: "Dorog szívében, könnyű megközelíthetőséggel",
    icon: LocationIcon,
  },
  {
    title: "Rugalmas érkezés",
    description: "Délután 3-tól bejelentkezés, reggel 10-ig kijelentkezés",
    icon: ClockIcon,
  },
  {
    title: "Családbarát",
    description: "Teljesen felszerelt apartmanok, ideális családoknak",
    icon: FamilyIcon,
  },
];

// About section images - ALT: needs refactoring
export const aboutImages = [
  {
    src: image1,
    alt: "Deluxe apartman",
  },
  {
    src: image2,
    alt: "Kényelmes szoba",
  },
  {
    src: image3,
    alt: "Modern konyha",
  },
  {
    src: image4,
    alt: "Környezet",
  },
];
