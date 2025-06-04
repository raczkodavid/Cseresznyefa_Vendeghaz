// About page data

// Location lists
export const locationLists = [
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

// Check-in/Check-out lists
export const checkInCheckOutLists = [
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

// Additional information lists
export const additionalInformationLists = [
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

// Payment terms lists
export const paymentTermsLists = [
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

// Bank details lists
export const bankDetailsLists = [
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
      { emoji: "🚫", text: "SWIFT/BIC: -" },
    ],
  },
];

// Animation variants
export const heroVariants = {
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

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const listItemVariants = {
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

export const sidebarVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", damping: 15 },
  },
  hover: { scale: 1.05, y: -5 },
};
