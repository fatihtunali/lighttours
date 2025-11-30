export const companyInfo = {
  name: "Light Tours",
  fullName: "Light Tours Travel Agency",
  slogan: "Your Gateway to Turkish Adventures Since 1988",
  founded: 1988,
  yearsOfExperience: new Date().getFullYear() - 1988,
  tursabNo: "1739",

  contact: {
    phone: "+90 252 614 47 57",
    mobile: "+90 549 614 47 57",
    whatsapp: "+905496144757",
    email: "info@lighttours.com",
    bookingEmail: "booking@lighttours.com",
  },

  address: {
    street: "Cumhuriyet Mah, Çarşı Cad.",
    building: "Likya İş Merkezi",
    floor: "Kat: 3",
    unit: "No: 1/307",
    city: "Fethiye",
    country: "Türkiye",
    full: "Cumhuriyet Mah, Çarşı Cad. Likya İş Merkezi, Kat: 3, No: 1/307, Fethiye, Türkiye"
  },

  social: {
    facebook: "https://facebook.com/light.tours",
    instagram: "https://instagram.com/lighttours/",
    youtube: "https://youtube.com/@lighttoursbluecruiseyachtc3738",
    tripadvisor: "https://tripadvisor.com/lighttours"
  },

  workingHours: {
    weekdays: "09:00 - 18:00",
    saturday: "09:00 - 14:00",
    sunday: "Closed"
  }
};

export const services = [
  {
    id: "yacht-charter",
    title: "Yacht Charter",
    titleTr: "Yat Kiralama",
    description: "Luxury gulet and yacht rentals for unforgettable blue cruises along the Turkish coast",
    descriptionTr: "Türkiye kıyılarında unutulmaz mavi yolculuklar için lüks gulet ve yat kiralama",
    icon: "yacht",
    image: "/images/services/yacht-charter.webp",
    href: "/yacht-charter"
  },
  {
    id: "cabin-charter",
    title: "Cabin Charter",
    titleTr: "Kabin Charter",
    description: "Share the experience with fellow travelers on our scheduled cabin charter cruises",
    descriptionTr: "Planlı kabin charter turlarımızda diğer gezginlerle deneyimi paylaşın",
    icon: "cabin",
    image: "/images/services/cabin-charter.webp",
    href: "/cabin-charter"
  },
  {
    id: "tours",
    title: "Tours & Excursions",
    titleTr: "Turlar ve Geziler",
    description: "Guided day trips to Cappadocia, Pamukkale, Ephesus and local adventures",
    descriptionTr: "Kapadokya, Pamukkale, Efes ve yerel maceralara rehberli günübirlik turlar",
    icon: "tour",
    image: "/images/services/tours.webp",
    href: "/tours"
  },
  {
    id: "car-rental",
    title: "Car Rental",
    titleTr: "Araç Kiralama",
    description: "Reliable vehicle rentals to explore the region at your own pace",
    descriptionTr: "Bölgeyi kendi hızınızda keşfetmek için güvenilir araç kiralama",
    icon: "car",
    image: "/images/services/car-rental.webp",
    href: "/car-rental"
  },
  {
    id: "transfer",
    title: "Transfer Services",
    titleTr: "Transfer Hizmetleri",
    description: "Airport transfers and private transportation throughout the region",
    descriptionTr: "Havalimanı transferleri ve bölge genelinde özel ulaşım",
    icon: "transfer",
    image: "/images/services/transfer.webp",
    href: "/transfer"
  }
];

export const stats = [
  { value: "37+", label: "Years Experience", labelTr: "Yıllık Deneyim" },
  { value: "10K+", label: "Happy Customers", labelTr: "Mutlu Müşteri" },
  { value: "50+", label: "Tour Packages", labelTr: "Tur Paketi" },
  { value: "20+", label: "Yacht Fleet", labelTr: "Yat Filosu" }
];

export const trustSignals = [
  {
    title: "TURSAB Certified",
    titleTr: "TURSAB Sertifikalı",
    description: "Official Turkish travel agency license #1739",
    descriptionTr: "Resmi Türk seyahat acentası lisansı #1739",
    icon: "certificate"
  },
  {
    title: "37 Years Experience",
    titleTr: "37 Yıllık Deneyim",
    description: "Serving travelers since 1988",
    descriptionTr: "1988'den beri gezginlere hizmet",
    icon: "clock"
  },
  {
    title: "24/7 Support",
    titleTr: "7/24 Destek",
    description: "Always available via WhatsApp",
    descriptionTr: "WhatsApp üzerinden her zaman ulaşılabilir",
    icon: "support"
  },
  {
    title: "Best Price Guarantee",
    titleTr: "En İyi Fiyat Garantisi",
    description: "Direct bookings, no middlemen",
    descriptionTr: "Direkt rezervasyon, aracı yok",
    icon: "price"
  }
];
