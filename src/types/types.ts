export interface ApartmentFeature {
  icon: string;
  label: string;
}

export interface ApartmentImage {
  src: string;
  alt: string;
}

export interface Apartment {
  id: string;
  name: string;
  type: "standard" | "deluxe";
  maxGuests: number;
  pricePerNight: number;
  description: string;
  features: ApartmentFeature[];
  images: ApartmentImage[];
  amenities: string[];
  size: number;
  bedrooms: number;
  bathrooms: number;
  floor: number;
}
