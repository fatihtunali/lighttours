// Local images for Light Tours

export const images = {
  // Logo & Branding
  logo: "/images/logo/logo.png",
  logoCircle: "/images/logo/logo.png",
  tursabBadge: "https://www.lighttours.com/wp-content/uploads/2023/10/tursab.png",

  // Hero & Banners
  hero: {
    main1: "/images/hero/hero-1.webp",
    main2: "/images/hero/hero-2.webp",
    main3: "/images/hero/hero-3.webp",
    breadcrumb: "/images/hero/breadcrumb-bg.jpg",
  },

  // Service Categories
  services: {
    yachtCharter: "/images/hero/hero-1.webp",
    tours: "/images/tours/cappadocia.webp",
    carRental: "/images/hero/hero-5.webp",
    transfer: "/images/hero/hero-6.webp",
    cabinCharter: "/images/hero/hero-2.webp",
  },

  // Yacht Fleet
  yachts: {
    holidayM: "/images/yachts/holiday-m.jpg",
    holiday5: "/images/yachts/holiday-5.jpg",
    holiday6: "/images/yachts/holiday-6.jpg",
    holiday10: "/images/yachts/holiday-10.jpg",
    holiday10x: "/images/yachts/holiday-10.jpg",
    uzay: "/images/yachts/holiday-m.jpg",
    gallery1: "/images/yachts/holiday-5.jpg",
  },

  // Tours
  tours: {
    cappadocia: "/images/tours/cappadocia.webp",
    pamukkale: "/images/tours/pamukkale.webp",
    ephesus: "/images/tours/ephesus.webp",
    diving: "/images/tours/diving.jpg",
    jeepSafari: "/images/tours/jeep-safari.jpg",
    fishing: "/images/tours/fishing.jpg",
    fethiye: "/images/hero/hero-3.webp",
    troy: "/images/tours/ephesus.webp",
  },

  // About & General
  about: {
    team: "/images/hero/hero-1.webp",
    office: "/images/hero/hero-3.webp",
  },

  // Car Rental Fleet
  cars: {
    audi: "/images/cars/audi-a3.jpg",
    opel: "/images/cars/opel-astra.jpg",
    citroen: "/images/cars/citroen-c-elysee.jpg",
    clio: "/images/cars/renault-clio.jpg",
    symbol: "/images/cars/renault-symbol.jpg",
  },

  // Instagram/Social (using local images as fallback)
  instagram: {
    post1: "/images/yachts/holiday-m.jpg",
    post2: "/images/yachts/holiday-5.jpg",
    post3: "/images/tours/cappadocia.webp",
    post4: "/images/tours/pamukkale.webp",
    post5: "/images/hero/hero-1.webp",
  },

  // Blog
  blog: {
    post1: "/images/tours/cappadocia.webp",
    post2: "/images/hero/hero-3.webp",
  },

  // Placeholder
  placeholder: "/images/hero/hero-1.webp",
};

// Helper function to get tour image
export function getTourImage(tourId: string): string {
  const tourImageMap: Record<string, string> = {
    cappadocia: images.tours.cappadocia,
    pamukkale: images.tours.pamukkale,
    ephesus: images.tours.ephesus,
    diving: images.tours.diving,
    "jeep-safari": images.tours.jeepSafari,
    fishing: images.tours.fishing,
    dalyan: images.tours.fethiye,
    "kas-kekova": images.hero.main2,
    "tlos-saklikent": images.hero.main3,
    paragliding: images.hero.main1,
    "horse-riding": images.tours.fethiye,
    "boat-tour": images.yachts.gallery1,
  };
  return tourImageMap[tourId] || images.placeholder;
}

// Helper function to get yacht image
export function getYachtImage(yachtId: string): string {
  const yachtImageMap: Record<string, string> = {
    "holiday-m": images.yachts.holidayM,
    "holiday-5": images.yachts.holiday5,
    "holiday-6": images.yachts.holiday6,
    "holiday-10": images.yachts.holiday10,
    "blue-dream": images.yachts.uzay,
    "aegean-star": images.yachts.holiday10x,
  };
  return yachtImageMap[yachtId] || images.yachts.gallery1;
}

// Helper function to get cabin charter image
export function getCabinCharterImage(routeId: string): string {
  const routeImageMap: Record<string, string> = {
    "fethiye-kekova-7n": images.hero.main2,
    "fethiye-marmaris-7n": images.yachts.gallery1,
    "fethiye-olimpos-4n": images.hero.main3,
    "bodrum-gokova-7n": images.yachts.holidayM,
  };
  return routeImageMap[routeId] || images.hero.main1;
}
