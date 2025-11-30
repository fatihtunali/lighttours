export interface Tour {
  id: string;
  name: string;
  nameTr: string;
  duration: string;
  durationHours: number;
  category: "day-tour" | "cabin-charter" | "activity";
  description: string;
  descriptionTr: string;
  highlights: string[];
  highlightsTr: string[];
  image: string;
  price?: {
    from: number;
    currency: string;
  };
  included?: string[];
  includedTr?: string[];
}

export const dayTours: Tour[] = [
  {
    id: "cappadocia",
    name: "Cappadocia Day Tour",
    nameTr: "Kapadokya Günübirlik Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Explore the fascinating blend of nature and history in Cappadocia with fairy chimneys and underground cities",
    descriptionTr: "Peri bacaları ve yeraltı şehirleriyle Kapadokya'nın doğa ve tarih harmanını keşfedin",
    highlights: ["Fairy Chimneys", "Underground City", "Hot Air Balloons", "Göreme Open Air Museum"],
    highlightsTr: ["Peri Bacaları", "Yeraltı Şehri", "Balon Turu", "Göreme Açık Hava Müzesi"],
    image: "/images/tours/cappadocia.webp"
  },
  {
    id: "pamukkale",
    name: "Pamukkale & Hierapolis Day Trip",
    nameTr: "Pamukkale & Hierapolis Günübirlik Tur",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Explore the enchanting white terraces of Pamukkale and ancient Hierapolis ruins",
    descriptionTr: "Pamukkale'nin büyüleyici beyaz travertenlerini ve antik Hierapolis kalıntılarını keşfedin",
    highlights: ["White Terraces", "Hierapolis Ancient City", "Cleopatra Pool", "Necropolis"],
    highlightsTr: ["Beyaz Travertenler", "Hierapolis Antik Kenti", "Kleopatra Havuzu", "Nekropolis"],
    image: "/images/tours/pamukkale.webp"
  },
  {
    id: "ephesus",
    name: "Ephesus & House of Virgin Mary",
    nameTr: "Efes & Meryem Ana Evi Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Visit one of the best-preserved ancient cities and the sacred House of Virgin Mary",
    descriptionTr: "En iyi korunmuş antik şehirlerden birini ve kutsal Meryem Ana Evi'ni ziyaret edin",
    highlights: ["Library of Celsus", "Great Theatre", "House of Virgin Mary", "Temple of Artemis"],
    highlightsTr: ["Celsus Kütüphanesi", "Büyük Tiyatro", "Meryem Ana Evi", "Artemis Tapınağı"],
    image: "/images/tours/ephesus.webp"
  },
  {
    id: "dalyan",
    name: "Dalyan Tour",
    nameTr: "Dalyan Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Cruise through reed beds to see Lycian rock tombs, mud baths, and Caretta Caretta turtles",
    descriptionTr: "Likya kaya mezarlarını, çamur banyolarını ve Caretta Caretta kaplumbağalarını görmek için sazlıklarda yolculuk",
    highlights: ["Rock Tombs", "Mud Baths", "İztuzu Beach", "Caretta Turtles"],
    highlightsTr: ["Kaya Mezarları", "Çamur Banyosu", "İztuzu Plajı", "Caretta Kaplumbağaları"],
    image: "/images/tours/dalyan.webp"
  },
  {
    id: "kas-kekova",
    name: "Kaş-Kalkan-Kekova Tour",
    nameTr: "Kaş-Kalkan-Kekova Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Discover the sunken city of Kekova and charming coastal towns of Kaş and Kalkan",
    descriptionTr: "Kekova'nın batık şehrini ve Kaş ile Kalkan'ın şirin kıyı kasabalarını keşfedin",
    highlights: ["Sunken City", "Simena Castle", "Kaş Old Town", "Swimming Stops"],
    highlightsTr: ["Batık Şehir", "Simena Kalesi", "Kaş Eski Şehir", "Yüzme Molaları"],
    image: "/images/tours/kekova.webp"
  },
  {
    id: "tlos-saklikent",
    name: "Tlos & Saklıkent Tour",
    nameTr: "Tlos & Saklıkent Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "day-tour",
    description: "Explore ancient Tlos ruins and cool off in the spectacular Saklıkent Canyon",
    descriptionTr: "Antik Tlos kalıntılarını keşfedin ve muhteşem Saklıkent Kanyonu'nda serinleyin",
    highlights: ["Tlos Ancient City", "Saklıkent Canyon", "River Walk", "Local Lunch"],
    highlightsTr: ["Tlos Antik Kenti", "Saklıkent Kanyonu", "Nehir Yürüyüşü", "Yerel Öğle Yemeği"],
    image: "/images/tours/saklikent.webp"
  }
];

export const activities: Tour[] = [
  {
    id: "paragliding",
    name: "Paragliding",
    nameTr: "Yamaç Paraşütü",
    duration: "2 Hours",
    durationHours: 2,
    category: "activity",
    description: "Soar over the stunning Blue Lagoon from Babadağ mountain",
    descriptionTr: "Babadağ'dan muhteşem Mavi Lagün üzerinde süzülün",
    highlights: ["Babadağ Takeoff", "Blue Lagoon View", "HD Video & Photos", "Safe Landing"],
    highlightsTr: ["Babadağ Kalkışı", "Mavi Lagün Manzarası", "HD Video & Fotoğraf", "Güvenli İniş"],
    image: "/images/activities/paragliding.webp"
  },
  {
    id: "diving",
    name: "Scuba Diving",
    nameTr: "Tüplü Dalış",
    duration: "4 Hours",
    durationHours: 4,
    category: "activity",
    description: "Discover underwater wonders in crystal clear Mediterranean waters",
    descriptionTr: "Berrak Akdeniz sularında su altı harikalarını keşfedin",
    highlights: ["Professional Instructor", "Equipment Provided", "Two Dives", "Certificate"],
    highlightsTr: ["Profesyonel Eğitmen", "Ekipman Dahil", "İki Dalış", "Sertifika"],
    image: "/images/activities/diving.webp"
  },
  {
    id: "jeep-safari",
    name: "Jeep Safari",
    nameTr: "Jeep Safari",
    duration: "8 Hours",
    durationHours: 8,
    category: "activity",
    description: "Off-road adventure through mountain villages and pine forests",
    descriptionTr: "Dağ köyleri ve çam ormanlarında off-road macerası",
    highlights: ["Mountain Villages", "Mud Baths", "Waterfall Visit", "BBQ Lunch"],
    highlightsTr: ["Dağ Köyleri", "Çamur Banyosu", "Şelale Ziyareti", "Barbekü Öğle Yemeği"],
    image: "/images/activities/jeep-safari.webp"
  },
  {
    id: "horse-riding",
    name: "Horse Riding",
    nameTr: "At Binme",
    duration: "2 Hours",
    durationHours: 2,
    category: "activity",
    description: "Ride through scenic trails and along beautiful beaches",
    descriptionTr: "Manzaralı patikalarda ve güzel sahillerde at sürüşü",
    highlights: ["Scenic Trails", "Beach Ride", "Beginners Welcome", "Professional Guide"],
    highlightsTr: ["Manzaralı Patikalar", "Sahil Sürüşü", "Yeni Başlayanlar Hoş Geldiniz", "Profesyonel Rehber"],
    image: "/images/activities/horse-riding.webp"
  },
  {
    id: "boat-tour",
    name: "Private Boat Tour",
    nameTr: "Özel Tekne Turu",
    duration: "8 Hours",
    durationHours: 8,
    category: "activity",
    description: "Private boat excursion to secluded bays with swimming and snorkeling",
    descriptionTr: "Yüzme ve şnorkelle ıssız koylara özel tekne gezisi",
    highlights: ["12 Islands", "Swimming Stops", "Lunch on Board", "Max 12 Guests"],
    highlightsTr: ["12 Ada", "Yüzme Molaları", "Teknede Öğle Yemeği", "Max 12 Misafir"],
    image: "/images/activities/boat-tour.webp"
  }
];

export const cabinCharters: Tour[] = [
  {
    id: "fethiye-kekova-7n",
    name: "Fethiye - Kekova - Fethiye",
    nameTr: "Fethiye - Kekova - Fethiye",
    duration: "8 Days / 7 Nights",
    durationHours: 168,
    category: "cabin-charter",
    description: "The most popular route exploring Butterfly Valley, Kaş, and the sunken city of Kekova",
    descriptionTr: "Kelebek Vadisi, Kaş ve Kekova batık şehrini keşfeden en popüler rota",
    highlights: ["Butterfly Valley", "Kaş", "Kekova Sunken City", "Ölüdeniz"],
    highlightsTr: ["Kelebek Vadisi", "Kaş", "Kekova Batık Şehir", "Ölüdeniz"],
    image: "/images/cabin-charter/fethiye-kekova.webp",
    price: { from: 450, currency: "EUR" }
  },
  {
    id: "fethiye-marmaris-7n",
    name: "Fethiye - Marmaris - Fethiye",
    nameTr: "Fethiye - Marmaris - Fethiye",
    duration: "8 Days / 7 Nights",
    durationHours: 168,
    category: "cabin-charter",
    description: "Cruise through the stunning Göcek islands and beautiful Marmaris coast",
    descriptionTr: "Muhteşem Göcek adaları ve güzel Marmaris kıyısında yolculuk",
    highlights: ["Göcek Islands", "Dalyan", "Marmaris", "Ekincik Bay"],
    highlightsTr: ["Göcek Adaları", "Dalyan", "Marmaris", "Ekincik Koyu"],
    image: "/images/cabin-charter/fethiye-marmaris.webp",
    price: { from: 400, currency: "EUR" }
  },
  {
    id: "fethiye-olimpos-4n",
    name: "Fethiye - Olimpos Mini",
    nameTr: "Fethiye - Olimpos Mini",
    duration: "4 Days / 3 Nights",
    durationHours: 72,
    category: "cabin-charter",
    description: "Short cruise perfect for those with limited time but big dreams",
    descriptionTr: "Zamanı kısıtlı ama hayalleri büyük olanlar için kısa yolculuk",
    highlights: ["Butterfly Valley", "Kaş", "Demre", "Olimpos"],
    highlightsTr: ["Kelebek Vadisi", "Kaş", "Demre", "Olimpos"],
    image: "/images/cabin-charter/fethiye-olimpos.webp",
    price: { from: 250, currency: "EUR" }
  },
  {
    id: "bodrum-gokova-7n",
    name: "Bodrum - Gulf of Gökova - Bodrum",
    nameTr: "Bodrum - Gökova Körfezi - Bodrum",
    duration: "8 Days / 7 Nights",
    durationHours: 168,
    category: "cabin-charter",
    description: "Discover the crystal-clear waters of Gökova Gulf and ancient Cleopatra Island",
    descriptionTr: "Gökova Körfezi'nin berrak sularını ve antik Kleopatra Adası'nı keşfedin",
    highlights: ["Cleopatra Island", "English Harbour", "Sedir Island", "Bodrum Castle"],
    highlightsTr: ["Kleopatra Adası", "İngiliz Limanı", "Sedir Adası", "Bodrum Kalesi"],
    image: "/images/cabin-charter/bodrum-gokova.webp",
    price: { from: 500, currency: "EUR" }
  }
];

export const allTours = [...dayTours, ...activities, ...cabinCharters];
