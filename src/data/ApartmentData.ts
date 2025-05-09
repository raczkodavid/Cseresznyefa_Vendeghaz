import type { Apartment, ApartmentImage } from "@/types/types";

// helper function to make accessing images easy after importing them with glob
function getApartmentImages(
  globResult: Record<string, string>
): ApartmentImage[] {
  return Object.entries(globResult).map(([key, value]) => ({
    src: value,
    alt: key,
  }));
}

// instead of this export ApartmentImage[]
export const deluxeImages = getApartmentImages(
  import.meta.glob("@images/apartments/deluxe/*.webp", {
    eager: true,
    import: "default",
  })
);

export const standardImages = getApartmentImages(
  import.meta.glob("@images/apartments/standard/*.webp", {
    eager: true,
    import: "default",
  })
);

export const outsideImages = getApartmentImages(
  import.meta.glob("@images/apartments/outside/*.webp", {
    eager: true,
    import: "default",
  })
);

export const apartments: Apartment[] = [
  {
    id: "1",
    name: "Standard Apartman",
    type: "standard",
    maxGuests: 4,
    pricePerNight: 50000,
    description:
      "Az apartman 2-4 fő számára biztosít kényelmes szállást. A vendégek a főzőlappal, hűtőszekrénnyel, konyhai eszközökkel és mikrohullámú sütővel felszerelt konyhában készíthetik el ételeiket.",
    features: [
      { icon: "wifi", label: "Ingyenes WiFi" },
      { icon: "ac", label: "Légkondícionált" },
      { icon: "tv", label: "Síkképernyős tévé" },
      { icon: "kitchen", label: "Mini konyhás közösségi tér" },
    ],
    images: standardImages,
    amenities: [
      "WiFi",
      "Klíma",
      "Síkképernyős tévé",
      "Hűtőszekrény",
      "Kávéfőző",
      "Mikrohullámú sütő",
      "Vízforraló",
      "Kenyérpirító",
      "Mini konyhás közösségi tér",
    ],
    size: 47,
    bedrooms: 1,
    bathrooms: 1,
    floor: 1,
  },
  {
    id: "2",
    name: "Deluxe Apartman",
    type: "deluxe",
    maxGuests: 7,
    pricePerNight: 100000,
    description:
      "Az apartman 6+1 fő számára biztosít kényelmes szállást teljes komfortban. 2 hálószoba, 1 kádas, zuhanyzós és 1 zuhanyzós fürdőszoba, amerikai konyhás nappali nyújt teljes kényelmet. A vendégek a főzőlappal, sütővel, hűtőszekrénnyel, konyhai eszközökkel és mikrohullámú sütővel felszerelt konyhában készíthetik el ételeiket. A kertre néző apartmanban síkképernyős TV-ék, a nappaliban beltéri játékok is várják a gyerekkel érkező társaságokat.",
    features: [
      { icon: "wifi", label: "Ingyenes WiFi" },
      { icon: "ac", label: "Légkondicionált" },
      { icon: "tv", label: "Síkképernyős tévé" },
      { icon: "kitchen", label: "Amerikai konyhás nappali" },
      { icon: "jacuzzi", label: "Kádas fürdőszoba" },
    ],
    images: deluxeImages,
    amenities: [
      "WiFi",
      "Klíma",
      "Síkképernyős tévé",
      "Hűtőszekrény",
      "Kávéfőző",
      "Mikrohullámú sütő",
      "Vízforraló",
      "Kenyérpirító",
      "Amerikai konyhás nappali",
      "Kádas fürdőszoba",
      "Beltéri játékok",
    ],
    size: 82,
    bedrooms: 2,
    bathrooms: 2,
    floor: 2,
  },
];
