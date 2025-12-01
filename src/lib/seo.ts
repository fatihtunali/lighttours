import type { Metadata } from "next";

const baseUrl = "https://lighttours.com";
const locales = ["en", "tr", "de"] as const;

type Locale = (typeof locales)[number];

// SEO metadata for each page in each language
export const pageSeo: Record<string, Record<Locale, { title: string; description: string }>> = {
  home: {
    en: {
      title: "Light Tours - Yacht Charter, Tours & Travel Services | Fethiye, Turkey",
      description: "Premium yacht charters, guided tours, car rental and airport transfers in Fethiye, Turkey. Experience the Turkish Riviera with 37 years of expertise since 1988.",
    },
    tr: {
      title: "Light Tours - Yat Kiralama, Turlar ve Seyahat Hizmetleri | Fethiye, Türkiye",
      description: "Fethiye'de lüks yat kiralama, günlük turlar, araç kiralama ve havalimanı transferi. 1988'den beri 37 yıllık deneyimle Türk Rivierası'nı keşfedin.",
    },
    de: {
      title: "Light Tours - Yachtcharter, Touren & Reiseservices | Fethiye, Türkei",
      description: "Premium Yachtcharter, geführte Touren, Autovermietung und Flughafentransfers in Fethiye, Türkei. Erleben Sie die Türkische Riviera mit 37 Jahren Erfahrung seit 1988.",
    },
  },
  about: {
    en: {
      title: "About Light Tours - 37 Years of Excellence in Turkish Travel | Fethiye",
      description: "Learn about Light Tours' 37-year journey since 1988. A licensed TURSAB travel agency providing premium yacht charters and tours in Fethiye, Turkish Riviera.",
    },
    tr: {
      title: "Light Tours Hakkında - Türk Turiziminde 37 Yıllık Mükemmellik | Fethiye",
      description: "1988'den beri Light Tours'un 37 yıllık yolculuğunu keşfedin. Fethiye'de lisanslı TURSAB seyahat acentesi olarak lüks yat kiralama ve tur hizmetleri.",
    },
    de: {
      title: "Über Light Tours - 37 Jahre Exzellenz im Türkischen Tourismus | Fethiye",
      description: "Erfahren Sie mehr über die 37-jährige Reise von Light Tours seit 1988. Eine lizenzierte TURSAB-Reiseagentur für Premium-Yachtcharter und Touren in Fethiye.",
    },
  },
  tours: {
    en: {
      title: "Day Tours & Excursions in Fethiye | 12 Islands, Pamukkale, Saklikent",
      description: "Discover the best day tours from Fethiye: 12 Islands boat trip, Pamukkale, Saklikent Canyon, Dalyan turtle beach, paragliding and more. Book your adventure today!",
    },
    tr: {
      title: "Fethiye Günlük Turları | 12 Adalar, Pamukkale, Saklıkent Kanyonu",
      description: "Fethiye'den en iyi günlük turları keşfedin: 12 Adalar tekne turu, Pamukkale, Saklıkent Kanyonu, Dalyan caretta caretta plajı, yamaç paraşütü ve daha fazlası.",
    },
    de: {
      title: "Tagestouren & Ausflüge in Fethiye | 12 Inseln, Pamukkale, Saklikent",
      description: "Entdecken Sie die besten Tagestouren ab Fethiye: 12-Inseln-Bootsfahrt, Pamukkale, Saklikent-Schlucht, Dalyan Schildkrötenstrand, Paragliding und mehr.",
    },
  },
  "yacht-charter": {
    en: {
      title: "Private Yacht Charter in Turkey | Luxury Gulet Rental | Fethiye",
      description: "Charter a private luxury gulet along the Turkish coast. Fully crewed yacht rentals with captain and chef. Explore Fethiye, Gocek, and the Turquoise Coast.",
    },
    tr: {
      title: "Türkiye'de Özel Yat Kiralama | Lüks Gulet Kiralama | Fethiye",
      description: "Türk kıyılarında özel lüks gulet kiralayın. Kaptan ve şef dahil tam mürettebatlı yat kiralama. Fethiye, Göcek ve Turkuaz Kıyısı'nı keşfedin.",
    },
    de: {
      title: "Private Yachtcharter in der Türkei | Luxus Gulet Mieten | Fethiye",
      description: "Chartern Sie eine private Luxusgulet entlang der türkischen Küste. Vollständig besetzte Yachtvermietung mit Kapitän und Koch. Erkunden Sie Fethiye und Gocek.",
    },
  },
  "cabin-charter": {
    en: {
      title: "Blue Cruise Turkey | Cabin Charter from Fethiye | Shared Gulet Cruises",
      description: "Join a shared blue cruise from Fethiye. Affordable cabin charter options on traditional gulets. Explore Olympos, Kekova, Greek Islands and the Turkish coast.",
    },
    tr: {
      title: "Mavi Yolculuk Türkiye | Fethiye'den Kabin Kiralama | Grup Gulet Turları",
      description: "Fethiye'den grup mavi yolculuğuna katılın. Geleneksel guletlerde uygun fiyatlı kabin kiralama. Olimpos, Kekova, Yunan Adaları rotalarını keşfedin.",
    },
    de: {
      title: "Blaue Reise Türkei | Kabinencharter ab Fethiye | Gemeinsame Gulet-Kreuzfahrten",
      description: "Nehmen Sie an einer gemeinsamen Blauen Reise ab Fethiye teil. Erschwingliche Kabinencharter-Optionen auf traditionellen Gulets. Erkunden Sie Olympos und Kekova.",
    },
  },
  "car-rental": {
    en: {
      title: "Car Rental in Fethiye & Dalaman Airport | Affordable Rates | Light Tours",
      description: "Rent a car in Fethiye or Dalaman Airport. Economy, compact, SUV and luxury vehicles available. Free delivery and flexible pickup options.",
    },
    tr: {
      title: "Fethiye ve Dalaman Havalimanı Araç Kiralama | Uygun Fiyatlar | Light Tours",
      description: "Fethiye veya Dalaman Havalimanı'nda araç kiralayın. Ekonomi, kompakt, SUV ve lüks araçlar mevcut. Ücretsiz teslimat ve esnek teslim alma seçenekleri.",
    },
    de: {
      title: "Autovermietung in Fethiye & Dalaman Flughafen | Günstige Preise | Light Tours",
      description: "Mieten Sie ein Auto in Fethiye oder am Flughafen Dalaman. Economy-, Kompakt-, SUV- und Luxusfahrzeuge verfügbar. Kostenlose Lieferung und flexible Abholung.",
    },
  },
  transfer: {
    en: {
      title: "Airport Transfer Dalaman to Fethiye | Private & Shared Transfers",
      description: "Book reliable airport transfers from Dalaman to Fethiye, Oludeniz, Gocek and surrounding areas. Private cars, VIP vehicles and shared shuttles available 24/7.",
    },
    tr: {
      title: "Dalaman Havalimanı Fethiye Transfer | Özel ve Paylaşımlı Transferler",
      description: "Dalaman'dan Fethiye, Ölüdeniz, Göcek ve çevresine güvenilir havalimanı transferi. Özel araç, VIP araç ve paylaşımlı shuttle 7/24 hizmetinizde.",
    },
    de: {
      title: "Flughafentransfer Dalaman nach Fethiye | Private & Geteilte Transfers",
      description: "Buchen Sie zuverlässige Flughafentransfers von Dalaman nach Fethiye, Oludeniz und Gocek. Private Autos, VIP-Fahrzeuge und Shuttles rund um die Uhr verfügbar.",
    },
  },
  contact: {
    en: {
      title: "Contact Light Tours | Get in Touch | Fethiye Travel Agency",
      description: "Contact Light Tours for yacht charters, tours, car rental and transfers in Fethiye. Call us, send a message or visit our office. We respond within 2 hours!",
    },
    tr: {
      title: "Light Tours İletişim | Bize Ulaşın | Fethiye Seyahat Acentesi",
      description: "Yat kiralama, turlar, araç kiralama ve transfer için Light Tours ile iletişime geçin. Bizi arayın, mesaj gönderin veya ofisimizi ziyaret edin. 2 saat içinde yanıt!",
    },
    de: {
      title: "Kontakt Light Tours | Kontaktieren Sie Uns | Fethiye Reiseagentur",
      description: "Kontaktieren Sie Light Tours für Yachtcharter, Touren, Autovermietung und Transfers in Fethiye. Rufen Sie an oder senden Sie eine Nachricht. Antwort innerhalb von 2 Stunden!",
    },
  },
  faq: {
    en: {
      title: "FAQ - Frequently Asked Questions | Light Tours Travel Guide",
      description: "Find answers to common questions about yacht charters, blue cruises, tours, car rental and transfers in Turkey. Everything you need to know before booking.",
    },
    tr: {
      title: "SSS - Sıkça Sorulan Sorular | Light Tours Seyahat Rehberi",
      description: "Yat kiralama, mavi yolculuk, turlar, araç kiralama ve Türkiye'de transferler hakkında sık sorulan sorulara yanıtlar. Rezervasyon öncesi bilmeniz gereken her şey.",
    },
    de: {
      title: "FAQ - Häufig Gestellte Fragen | Light Tours Reiseführer",
      description: "Finden Sie Antworten auf häufige Fragen zu Yachtcharter, Blauen Reisen, Touren, Autovermietung und Transfers in der Türkei. Alles was Sie vor der Buchung wissen müssen.",
    },
  },
  blog: {
    en: {
      title: "Travel Blog | Tips & Guides for Turkish Riviera | Light Tours",
      description: "Discover travel tips, destination guides and insider information about Fethiye, Turkish Riviera and Turkey. Plan your perfect vacation with our expert advice.",
    },
    tr: {
      title: "Seyahat Blogu | Türk Rivierası İpuçları ve Rehberleri | Light Tours",
      description: "Fethiye, Türk Rivierası ve Türkiye hakkında seyahat ipuçları, destinasyon rehberleri ve içeriden bilgiler. Uzman tavsiyelerimizle mükemmel tatilinizi planlayın.",
    },
    de: {
      title: "Reiseblog | Tipps & Reiseführer für die Türkische Riviera | Light Tours",
      description: "Entdecken Sie Reisetipps, Reiseführer und Insiderinformationen über Fethiye und die Türkische Riviera. Planen Sie Ihren perfekten Urlaub mit unseren Expertentipps.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | Light Tours | Data Protection",
      description: "Read Light Tours' privacy policy. Learn how we collect, use and protect your personal data when you use our travel services.",
    },
    tr: {
      title: "Gizlilik Politikası | Light Tours | Veri Koruma",
      description: "Light Tours gizlilik politikasını okuyun. Seyahat hizmetlerimizi kullandığınızda kişisel verilerinizi nasıl topladığımızı ve koruduğumuzu öğrenin.",
    },
    de: {
      title: "Datenschutzrichtlinie | Light Tours | Datenschutz",
      description: "Lesen Sie die Datenschutzrichtlinie von Light Tours. Erfahren Sie, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen.",
    },
  },
  terms: {
    en: {
      title: "Terms & Conditions | Light Tours | Booking Terms",
      description: "Read Light Tours' terms and conditions. Understand our booking policies, cancellation terms, payment conditions and service agreements.",
    },
    tr: {
      title: "Şartlar ve Koşullar | Light Tours | Rezervasyon Koşulları",
      description: "Light Tours şartlar ve koşullarını okuyun. Rezervasyon politikalarımızı, iptal koşullarını, ödeme şartlarını ve hizmet sözleşmelerini anlayın.",
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen | Light Tours | Buchungsbedingungen",
      description: "Lesen Sie die Allgemeinen Geschäftsbedingungen von Light Tours. Verstehen Sie unsere Buchungsrichtlinien, Stornierungsbedingungen und Zahlungsbedingungen.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy | Light Tours | How We Use Cookies",
      description: "Learn about Light Tours' cookie policy. Understand what cookies we use and how they improve your browsing experience on our website.",
    },
    tr: {
      title: "Çerez Politikası | Light Tours | Çerezleri Nasıl Kullanıyoruz",
      description: "Light Tours çerez politikasını öğrenin. Web sitemizde hangi çerezleri kullandığımızı ve tarama deneyiminizi nasıl geliştirdiklerini anlayın.",
    },
    de: {
      title: "Cookie-Richtlinie | Light Tours | Wie Wir Cookies Verwenden",
      description: "Erfahren Sie mehr über die Cookie-Richtlinie von Light Tours. Verstehen Sie, welche Cookies wir verwenden und wie sie Ihr Browsing-Erlebnis verbessern.",
    },
  },
};

// Generate metadata for a page with hreflang support
export function generatePageMetadata(
  pageKey: string,
  locale: string,
  path: string = ""
): Metadata {
  const seo = pageSeo[pageKey]?.[locale as Locale] || pageSeo[pageKey]?.en;
  const fullPath = path ? `/${path}` : "";

  // Build alternates for hreflang
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${baseUrl}/${loc}${fullPath}`;
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${baseUrl}/${locale}${fullPath}`,
      languages: {
        ...languages,
        "x-default": `${baseUrl}/en${fullPath}`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${baseUrl}/${locale}${fullPath}`,
      siteName: "Light Tours",
      locale: locale === "tr" ? "tr_TR" : locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

// Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Light Tours",
  alternateName: "Light Tours Travel Agency",
  url: "https://lighttours.com",
  logo: "https://lighttours.com/images/logo.png",
  description: "Premium yacht charters, guided tours, car rental and airport transfers in Fethiye, Turkey since 1988.",
  foundingDate: "1988",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cumhuriyet Mah. Atatürk Cad. No:12",
    addressLocality: "Fethiye",
    addressRegion: "Muğla",
    postalCode: "48300",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.6237,
    longitude: 29.1164,
  },
  telephone: "+90-252-614-6887",
  email: "info@lighttours.com",
  sameAs: [
    "https://www.facebook.com/lighttours",
    "https://www.instagram.com/lighttours",
    "https://wa.me/905306146887",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: "€€-€€€",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.6237,
      longitude: 29.1164,
    },
    geoRadius: "100000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Yacht Charter",
          description: "Luxury gulet charters along the Turkish coastline",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cabin Charter",
          description: "Shared blue cruise experiences on traditional gulets",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Day Tours",
          description: "Guided excursions to local attractions and historical sites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Rental",
          description: "Vehicle rental services in Fethiye and Dalaman",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airport Transfers",
          description: "Private and shared transfers from Dalaman Airport",
        },
      },
    ],
  },
};

// FAQ structured data generator
export function generateFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb structured data generator
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
