const fs = require('fs');
const path = require('path');

const enData = {
  metadata: {
    title: "Light Tours - Yacht Charter, Tours & Travel Services in Turkey",
    description: "Premium yacht charters, guided tours, car rental and transfer services in Fethiye, Turkey. Experience the Turkish Riviera since 1988."
  },
  nav: {
    home: "Home",
    yachtCharter: "Yacht Charter",
    cabinCharter: "Cabin Charter",
    tours: "Tours",
    carRental: "Car Rental",
    transfer: "Transfer",
    contact: "Contact",
    about: "About",
    faq: "FAQ",
    blog: "Blog",
    getQuote: "Get Quote"
  },
  hero: {
    badge: "Serving travelers since 1988",
    title: "Discover the Magic of",
    titleHighlight: "Turkish Riviera",
    subtitle: "Luxury yacht charters, unforgettable tours, and seamless travel services. Experience the beauty of Fethiye and beyond with {years} years of expertise.",
    exploreServices: "Explore Services",
    getFreeQuote: "Get Free Quote",
    cta: {
      explore: "Explore Services",
      quote: "Get Free Quote",
      whatsappMessage: "Hello! I am interested in your travel services. Can you help me plan my trip to Turkey?"
    }
  },
  stats: {
    years: "Years Experience",
    guests: "Happy Guests",
    tours: "Tours",
    yachts: "Yachts",
    happyGuests: "Happy Guests",
    yearsExperience: "Years Experience"
  },
  services: {
    title: "Our Services",
    subtitle: "What We Offer",
    description: "From luxury yacht charters to guided tours, we provide comprehensive travel services to make your Turkish adventure unforgettable.",
    learnMore: "Learn More",
    items: {
      "yacht-charter": {
        title: "Private Yacht Charter",
        description: "Luxury gulet charters along the stunning Turkish coastline"
      },
      "cabin-charter": {
        title: "Cabin Charter",
        description: "Join a shared blue cruise for an affordable sailing experience"
      },
      tours: {
        title: "Tours & Excursions",
        description: "Guided day trips to ancient ruins, natural wonders, and hidden gems"
      },
      "car-rental": {
        title: "Car Rental",
        description: "Quality vehicles for exploring Turkey at your own pace"
      },
      transfer: {
        title: "Transfer Services",
        description: "Airport transfers and private transportation throughout Turkey"
      }
    }
  },
  tours: {
    title: "Popular Tours & Cruises",
    subtitle: "Explore Turkey",
    description: "Discover our most loved experiences, from day trips to ancient ruins to week-long blue cruises along the turquoise coast.",
    featuredCruises: "Featured Blue Cruises",
    popularDayTours: "Popular Day Tours",
    viewAll: "View All Tours",
    popular: "POPULAR",
    from: "From",
    person: "person",
    perPerson: "/person",
    viewDetails: "View Details",
    learnMore: "Learn More"
  },
  quote: {
    title: "Request a Free Quote",
    subtitle: "Get Started",
    description: "Tell us about your dream trip and get a personalized quote within 2 hours.",
    yachtDescription: "We'll suggest the perfect blue cruise route for you!",
    aiDescription: "Our AI can also suggest the perfect itinerary!",
    yourInfo: "Your Information",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone / WhatsApp",
    serviceType: "Service Type",
    serviceTypes: {
      yachtCharter: "Private Yacht Charter",
      cabinCharter: "Cabin Charter (Blue Cruise)",
      dayTour: "Day Tour",
      multiDay: "Multi-day Tour",
      transfer: "Transfer Service",
      carRental: "Car Rental"
    },
    destinations: "Destinations",
    cruiseDestinations: "Cruise Destinations",
    tourDestinations: "Tour Destinations",
    selectMultiple: "(Select multiple)",
    destinationHint: "Select your preferred stops and we'll suggest the best cruise route!",
    tripDetails: "Trip Details",
    startDate: "Start Date",
    duration: "Duration",
    cruiseDuration: "Cruise Duration",
    travelers: "Travelers",
    budget: "Budget Level",
    budgetOptions: {
      budget: "Budget-friendly",
      moderate: "Moderate",
      luxury: "Luxury"
    },
    interests: "Your Interests",
    interestOptions: {
      history: "History & Culture",
      nature: "Nature & Hiking",
      beach: "Beach & Swimming",
      food: "Food & Cuisine",
      adventure: "Adventure Sports",
      photography: "Photography",
      relaxation: "Relaxation"
    },
    additionalInfo: "Additional Information",
    additionalPlaceholder: "Tell us more about your trip expectations, special requests, dietary requirements, etc.",
    cruisePlaceholder: "Tell us about any special requirements (dietary needs, celebrations, water sports interests, etc.)",
    findCruiseRoute: "Find Cruise Route",
    getAiSuggestion: "Get AI Suggestion",
    sendWhatsApp: "Send Quote Request via WhatsApp",
    sending: "Sending...",
    success: "Your request has been sent! We'll get back to you within 2 hours.",
    recommendedRoute: "Recommended Cruise Route",
    findingRoute: "Finding the perfect route...",
    noRouteFound: "No matching cruise route found. Contact us for a custom itinerary!",
    dayByDay: "Day-by-Day Itinerary",
    swimStops: "swim stops",
    included: "Included",
    notIncluded: "Not Included",
    totalFor: "Total for {travelers} travelers",
    aiItinerary: "AI-Generated Tour Itinerary",
    generatingItinerary: "Generating your personalized itinerary...",
    estimatedPrice: "Estimated Total Price",
    failedGenerate: "Failed to generate itinerary."
  },
  trust: {
    title: "Why Choose Light Tours?",
    subtitle: "Trusted by Thousands",
    description: "With {years}+ years of experience, we've helped thousands of travelers discover the magic of Turkey.",
    licensedAgency: "Licensed Travel Agency",
    cta: {
      title: "Ready to Plan Your Trip?",
      subtitle: "Contact us now for a personalized travel experience",
      button: "Chat on WhatsApp",
      whatsappMessage: "Hello! I saw your website and I'm interested in planning a trip to Turkey. Can you help?"
    },
    items: {
      licensed: {
        title: "Licensed & Insured",
        description: "TURSAB certified tour operator with full insurance coverage"
      },
      experience: {
        title: "37+ Years Experience",
        description: "Serving happy travelers since 1988"
      },
      support: {
        title: "24/7 Support",
        description: "Always here when you need us"
      },
      bestPrice: {
        title: "Best Price Guarantee",
        description: "Competitive prices with no hidden fees"
      }
    }
  },
  footer: {
    description: "Your trusted partner for yacht charters, tours, and travel services in Turkey since 1988.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    allRights: "All rights reserved.",
    tursabMember: "TURSAB Member"
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in Touch",
    description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    sendMessage: "Send Message",
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
    messagePlaceholder: "How can we help you?",
    address: "Address",
    phone: "Phone",
    whatsapp: "WhatsApp",
    hours: "Working Hours",
    hoursValue: "Mon-Sat: 09:00 - 18:00",
    findUs: "Find Us",
    sendingMessage: "Sending...",
    messageSent: "Message sent successfully! We'll get back to you soon."
  },
  yachtCharter: {
    title: "Private Yacht Charter",
    subtitle: "Luxury Sailing",
    description: "Experience the ultimate in luxury sailing with our private yacht charters along Turkey's stunning coastline.",
    heroTitle: "Private Yacht Charter",
    heroSubtitle: "Sail the turquoise waters of the Turkish Riviera aboard your own private luxury gulet",
    ourFleet: "Our Fleet",
    fleetDescription: "Choose from our selection of traditional Turkish gulets, each offering unique character and modern comforts.",
    specifications: "Specifications",
    cabins: "Cabins",
    guests: "Guests",
    crew: "Crew",
    length: "Length",
    requestQuote: "Request Quote",
    whyPrivate: "Why Private Charter?",
    whyPrivateDesc: "A private charter gives you complete freedom to customize your itinerary, choose your crew, and enjoy exclusive use of the yacht.",
    benefits: {
      flexibility: "Complete Flexibility",
      flexibilityDesc: "Create your own route and schedule",
      privacy: "Total Privacy",
      privacyDesc: "Just you and your group on board",
      service: "Personalized Service",
      serviceDesc: "Dedicated crew catering to your needs",
      cuisine: "Custom Cuisine",
      cuisineDesc: "Meals tailored to your preferences"
    },
    popularRoutes: "Popular Routes",
    startingFrom: "Starting from",
    perWeek: "/week"
  },
  cabinCharter: {
    title: "Cabin Charter",
    subtitle: "Blue Cruise",
    description: "Join our shared cabin cruises for an affordable way to experience the famous Turkish blue cruise.",
    heroTitle: "Cabin Charter - Blue Cruise",
    heroSubtitle: "Join fellow travelers on a traditional Turkish gulet and experience the legendary blue cruise",
    availableRoutes: "Available Routes",
    routesDescription: "Choose from our carefully planned routes along Turkey's stunning coastline.",
    nights: "nights",
    days: "days",
    highlights: "Highlights",
    whatsIncluded: "What's Included",
    notIncluded: "Not Included",
    bookNow: "Book Now",
    pricePerPerson: "Price per Person",
    departureDates: "Departure Dates",
    everyWeek: "Every {day} from {month} to {endMonth}",
    whyCabin: "Why Cabin Charter?",
    whyCabinDesc: "Cabin charter is perfect for solo travelers, couples, or small groups who want to experience a blue cruise without chartering an entire yacht.",
    benefits: {
      affordable: "Affordable",
      affordableDesc: "Share costs with other travelers",
      social: "Social Experience",
      socialDesc: "Meet travelers from around the world",
      organized: "All Organized",
      organizedDesc: "Fixed routes and schedules",
      inclusive: "All-Inclusive",
      inclusiveDesc: "Meals and activities included"
    }
  },
  toursPage: {
    title: "Tours & Excursions",
    subtitle: "Discover Turkey",
    description: "Explore Turkey's rich history, stunning landscapes, and vibrant culture with our expertly guided tours.",
    heroTitle: "Tours & Excursions",
    heroSubtitle: "From ancient ruins to natural wonders, discover the best of Turkey with our guided tours",
    dayTours: "Day Tours",
    dayToursDesc: "Perfect for exploring nearby attractions in a single day.",
    multiDayTours: "Multi-Day Tours",
    multiDayToursDesc: "Comprehensive tours covering multiple destinations.",
    adventureTours: "Adventure Tours",
    adventureToursDesc: "Exciting activities for thrill-seekers.",
    culturalTours: "Cultural Tours",
    culturalToursDesc: "Immerse yourself in Turkish history and traditions.",
    duration: "Duration",
    includes: "Includes",
    bookTour: "Book This Tour",
    viewItinerary: "View Itinerary",
    meetingPoint: "Meeting Point",
    groupSize: "Group Size",
    difficulty: "Difficulty",
    languages: "Languages"
  },
  carRental: {
    title: "Car Rental",
    subtitle: "Freedom to Explore",
    description: "Rent a car and discover Turkey at your own pace with our quality vehicle fleet.",
    heroTitle: "Car Rental",
    heroSubtitle: "Explore Turkey's beautiful landscapes at your own pace with our reliable rental cars",
    ourVehicles: "Our Vehicles",
    vehiclesDesc: "Choose from our well-maintained fleet of vehicles.",
    perDay: "/day",
    features: "Features",
    automatic: "Automatic",
    manual: "Manual",
    airCon: "Air Conditioning",
    bluetooth: "Bluetooth",
    gps: "GPS Navigation",
    rentNow: "Rent Now",
    category: "Category",
    economy: "Economy",
    compact: "Compact",
    midSize: "Mid-Size",
    fullSize: "Full-Size",
    suv: "SUV",
    luxury: "Luxury",
    whyRentWithUs: "Why Rent With Us?",
    benefits: {
      noHidden: "No Hidden Fees",
      noHiddenDesc: "Transparent pricing with all fees included",
      freeDelivery: "Free Delivery",
      freeDeliveryDesc: "Free delivery to airport and hotels",
      support24: "24/7 Support",
      support24Desc: "Roadside assistance available anytime",
      insurance: "Full Insurance",
      insuranceDesc: "Comprehensive insurance coverage included"
    },
    rentalTerms: "Rental Terms",
    minAge: "Minimum Age",
    license: "License Required",
    deposit: "Deposit",
    fuel: "Fuel Policy"
  },
  transfer: {
    title: "Transfer Services",
    subtitle: "Reliable Transportation",
    description: "Safe and comfortable transfers from airports to hotels and between cities.",
    heroTitle: "Transfer Services",
    heroSubtitle: "Comfortable and reliable transportation throughout Turkey",
    services: "Our Services",
    servicesDesc: "Choose the transfer service that best fits your needs.",
    airportTransfer: "Airport Transfer",
    airportTransferDesc: "Convenient pickup and drop-off at Dalaman Airport",
    hotelTransfer: "Hotel Transfer",
    hotelTransferDesc: "Transfers between hotels and destinations",
    privateTransfer: "Private Transfer",
    privateTransferDesc: "Exclusive vehicle for you and your group",
    groupTransfer: "Group Transfer",
    groupTransferDesc: "Economical option for larger groups",
    bookTransfer: "Book Transfer",
    popularRoutes: "Popular Routes",
    from: "From",
    to: "To",
    distance: "Distance",
    duration: "Duration",
    price: "Price",
    vehicles: "Vehicles",
    sedan: "Sedan",
    minivan: "Minivan",
    van: "Van",
    bus: "Bus",
    passengers: "passengers",
    luggage: "luggage"
  },
  about: {
    title: "About Us",
    subtitle: "Our Story",
    description: "Learn about Light Tours and our commitment to providing exceptional travel experiences.",
    heroTitle: "About Light Tours",
    heroSubtitle: "Your trusted travel partner since 1988",
    ourStory: "Our Story",
    ourStoryText1: "Light Tours was founded in 1988 in the beautiful coastal town of Fethiye, Turkey. What started as a small family business has grown into one of the region's most trusted travel agencies.",
    ourStoryText2: "For over three decades, we have been helping travelers discover the magic of the Turkish Riviera, from the turquoise waters of the Mediterranean to the ancient ruins of Lycia.",
    ourMission: "Our Mission",
    ourMissionText: "To provide unforgettable travel experiences that showcase the best of Turkey while maintaining the highest standards of service, safety, and sustainability.",
    ourValues: "Our Values",
    values: {
      quality: "Quality Service",
      qualityDesc: "We never compromise on the quality of our services",
      safety: "Safety First",
      safetyDesc: "Your safety is our top priority",
      sustainability: "Sustainability",
      sustainabilityDesc: "We are committed to responsible tourism",
      authenticity: "Authenticity",
      authenticityDesc: "We offer genuine Turkish experiences"
    },
    team: "Our Team",
    teamDesc: "Our experienced team is passionate about travel and dedicated to making your trip memorable.",
    certifications: "Certifications",
    tursabCertified: "TURSAB Certified",
    tursabDesc: "Licensed by the Association of Turkish Travel Agencies"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    description: "Find answers to common questions about our services.",
    heroTitle: "Frequently Asked Questions",
    heroSubtitle: "Everything you need to know about traveling with Light Tours",
    categories: {
      general: "General",
      yachtCharter: "Yacht Charter",
      cabinCharter: "Cabin Charter",
      tours: "Tours",
      booking: "Booking & Payment"
    },
    questions: {
      booking: {
        q: "How do I make a booking?",
        a: "You can make a booking through our website, WhatsApp, or by contacting us directly. We'll respond within 2 hours with availability and pricing."
      },
      payment: {
        q: "What payment methods do you accept?",
        a: "We accept credit cards, bank transfers, and cash. A 30% deposit is required to confirm your booking, with the balance due 30 days before arrival."
      },
      cancellation: {
        q: "What is your cancellation policy?",
        a: "Cancellations made more than 30 days before the trip receive a full refund minus processing fees. Cancellations within 30 days may be subject to charges depending on the service."
      },
      yachtIncluded: {
        q: "What's included in a yacht charter?",
        a: "Our yacht charters include the boat, crew, fuel, full board meals, bed linens, towels, and standard equipment. Drinks and entrance fees are typically not included."
      },
      cabinDifference: {
        q: "What's the difference between cabin and yacht charter?",
        a: "Cabin charter means you book individual cabins on a shared boat with other travelers. Yacht charter means you rent the entire boat exclusively for your group."
      },
      bestTime: {
        q: "When is the best time to visit?",
        a: "The best time for sailing and tours is from April to October. Peak season is July-August with warm weather and calm seas. Shoulder seasons (May-June, September-October) offer pleasant weather with fewer crowds."
      }
    },
    stillQuestions: "Still have questions?",
    contactUs: "Contact us directly and we'll be happy to help."
  },
  blog: {
    title: "Blog",
    subtitle: "Travel Tips & Guides",
    description: "Discover travel inspiration, tips, and guides for your Turkish adventure.",
    heroTitle: "Travel Blog",
    heroSubtitle: "Inspiration and tips for your Turkish adventure",
    readMore: "Read More",
    recentPosts: "Recent Posts",
    categories: "Categories",
    tags: "Tags",
    sharePost: "Share This Post",
    relatedPosts: "Related Posts",
    noPostsFound: "No posts found."
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Your Privacy Matters",
    lastUpdated: "Last Updated",
    introduction: "Introduction",
    introText: "Light Tours is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.",
    dataCollection: "Data Collection",
    dataCollectionText: "We collect information you provide directly to us, such as your name, email, phone number, and travel preferences when you make inquiries or bookings.",
    dataUse: "How We Use Your Data",
    dataUseText: "We use your information to process bookings, communicate with you, improve our services, and send relevant travel offers (with your consent).",
    dataSecurity: "Data Security",
    dataSecurityText: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
    cookies: "Cookies",
    cookiesText: "We use cookies to improve your browsing experience. You can manage cookie preferences in your browser settings.",
    yourRights: "Your Rights",
    yourRightsText: "You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.",
    contactPrivacy: "Contact Us",
    contactPrivacyText: "For privacy-related questions, please contact us at privacy@lighttours.com"
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Terms & Conditions",
    lastUpdated: "Last Updated",
    acceptance: "Acceptance of Terms",
    acceptanceText: "By using our services, you agree to these terms and conditions. Please read them carefully before making a booking.",
    bookingTerms: "Booking Terms",
    bookingTermsText: "All bookings are subject to availability and confirmation. A deposit is required to secure your booking.",
    payment: "Payment",
    paymentText: "We accept major credit cards and bank transfers. Full payment is required before the service date unless otherwise agreed.",
    cancellation: "Cancellation Policy",
    cancellationText: "Cancellation terms vary by service. Please refer to your booking confirmation for specific cancellation policies.",
    liability: "Limitation of Liability",
    liabilityText: "Light Tours acts as an intermediary and is not liable for third-party service failures. We recommend travel insurance for all trips.",
    changes: "Changes to Terms",
    changesText: "We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes."
  },
  cookies: {
    title: "Cookie Policy",
    subtitle: "How We Use Cookies",
    lastUpdated: "Last Updated",
    whatAreCookies: "What Are Cookies?",
    whatAreCookiesText: "Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience.",
    typesOfCookies: "Types of Cookies We Use",
    essential: "Essential Cookies",
    essentialText: "Required for the website to function properly. These cannot be disabled.",
    analytics: "Analytics Cookies",
    analyticsText: "Help us understand how visitors use our website so we can improve it.",
    marketing: "Marketing Cookies",
    marketingText: "Used to deliver relevant advertisements and track campaign effectiveness.",
    manageCookies: "Managing Cookies",
    manageCookiesText: "You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.",
    consent: "Cookie Consent",
    consentText: "By continuing to use our website, you consent to our use of cookies as described in this policy."
  },
  common: {
    days: "days",
    day: "day",
    nights: "nights",
    night: "night",
    person: "person",
    people: "people",
    from: "From",
    to: "To",
    learnMore: "Learn More",
    viewDetails: "View Details",
    bookNow: "Book Now",
    requestQuote: "Request Quote",
    loading: "Loading...",
    error: "An error occurred",
    tryAgain: "Try Again",
    backToHome: "Back to Home",
    seeAll: "See All",
    readMore: "Read More",
    share: "Share",
    download: "Download",
    print: "Print",
    email: "Email",
    phone: "Phone",
    address: "Address",
    whatsapp: "WhatsApp",
    send: "Send",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    yes: "Yes",
    no: "No",
    or: "or"
  },
  errors: {
    "404": {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home"
    },
    "500": {
      title: "Server Error",
      description: "Something went wrong on our end. Please try again later."
    }
  }
};

// Write en.json
fs.writeFileSync(path.join(__dirname, '../messages/en.json'), JSON.stringify(enData, null, 2));
console.log('en.json updated successfully');

// Read existing tr.json and update with new keys
const trPath = path.join(__dirname, '../messages/tr.json');
const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));

// Add missing keys to tr.json
trData.hero.cta = {
  explore: "Hizmetleri Keşfet",
  quote: "Ücretsiz Teklif Al",
  whatsappMessage: "Merhaba! Seyahat hizmetlerinizle ilgileniyorum. Türkiye gezimi planlamama yardımcı olabilir misiniz?"
};
trData.stats.years = "Yıllık Deneyim";
trData.stats.guests = "Mutlu Misafir";
trData.services.items = {
  "yacht-charter": {
    title: "Özel Yat Kiralama",
    description: "Muhteşem Türk kıyı şeridi boyunca lüks gulet kiralama"
  },
  "cabin-charter": {
    title: "Kabin Charter",
    description: "Uygun fiyatlı bir yelken deneyimi için ortak mavi yolculuğa katılın"
  },
  tours: {
    title: "Turlar ve Geziler",
    description: "Antik kalıntılara, doğal harikulara ve gizli kalmış yerlere rehberli günlük geziler"
  },
  "car-rental": {
    title: "Araç Kiralama",
    description: "Türkiye'yi kendi hızınızda keşfetmek için kaliteli araçlar"
  },
  transfer: {
    title: "Transfer Hizmetleri",
    description: "Türkiye genelinde havalimanı transferleri ve özel ulaşım"
  }
};
trData.tours.person = "kişi";
trData.tours.learnMore = "Daha Fazla";
trData.trust.description = "{years}+ yıllık deneyimimizle, binlerce gezginin Türkiye'nin büyüsünü keşfetmesine yardımcı olduk.";
trData.trust.licensedAgency = "Lisanslı Seyahat Acentası";
trData.trust.cta = {
  title: "Gezinizi Planlamaya Hazır mısınız?",
  subtitle: "Kişiselleştirilmiş seyahat deneyimi için şimdi iletişime geçin",
  button: "WhatsApp'ta Sohbet Et",
  whatsappMessage: "Merhaba! Web sitenizi gördüm ve Türkiye gezisi planlamakla ilgileniyorum. Yardımcı olabilir misiniz?"
};
trData.trust.items = {
  licensed: {
    title: "Lisanslı ve Sigortalı",
    description: "Tam sigorta kapsamına sahip TÜRSAB sertifikalı tur operatörü"
  },
  experience: {
    title: "37+ Yıllık Deneyim",
    description: "1988'den beri mutlu gezginlere hizmet veriyoruz"
  },
  support: {
    title: "7/24 Destek",
    description: "İhtiyacınız olduğunda her zaman yanınızdayız"
  },
  bestPrice: {
    title: "En İyi Fiyat Garantisi",
    description: "Gizli ücret olmadan rekabetçi fiyatlar"
  }
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
console.log('tr.json updated successfully');

// Read existing de.json and update with new keys
const dePath = path.join(__dirname, '../messages/de.json');
const deData = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// Add missing keys to de.json
deData.hero.cta = {
  explore: "Services Entdecken",
  quote: "Kostenloses Angebot",
  whatsappMessage: "Hallo! Ich interessiere mich für Ihre Reiseservices. Können Sie mir bei der Planung meiner Reise in die Türkei helfen?"
};
deData.stats.years = "Jahre Erfahrung";
deData.stats.guests = "Zufriedene Gäste";
deData.services.items = {
  "yacht-charter": {
    title: "Privater Yachtcharter",
    description: "Luxus-Gulet-Charter entlang der atemberaubenden türkischen Küste"
  },
  "cabin-charter": {
    title: "Kabinencharter",
    description: "Nehmen Sie an einer gemeinsamen Blauen Reise für ein erschwingliches Segelerlebnis teil"
  },
  tours: {
    title: "Touren & Ausflüge",
    description: "Geführte Tagesausflüge zu antiken Ruinen, Naturwundern und verborgenen Schätzen"
  },
  "car-rental": {
    title: "Autovermietung",
    description: "Qualitätsfahrzeuge, um die Türkei in Ihrem eigenen Tempo zu erkunden"
  },
  transfer: {
    title: "Transferservices",
    description: "Flughafentransfers und private Transportmittel in der ganzen Türkei"
  }
};
deData.tours.person = "Person";
deData.tours.learnMore = "Mehr Erfahren";
deData.trust.description = "Mit {years}+ Jahren Erfahrung haben wir Tausenden von Reisenden geholfen, den Zauber der Türkei zu entdecken.";
deData.trust.licensedAgency = "Lizenzierte Reiseagentur";
deData.trust.cta = {
  title: "Bereit, Ihre Reise zu planen?",
  subtitle: "Kontaktieren Sie uns jetzt für ein personalisiertes Reiseerlebnis",
  button: "Auf WhatsApp chatten",
  whatsappMessage: "Hallo! Ich habe Ihre Website gesehen und interessiere mich für die Planung einer Reise in die Türkei. Können Sie mir helfen?"
};
deData.trust.items = {
  licensed: {
    title: "Lizenziert & Versichert",
    description: "TÜRSAB zertifizierter Reiseveranstalter mit vollem Versicherungsschutz"
  },
  experience: {
    title: "37+ Jahre Erfahrung",
    description: "Seit 1988 im Dienst zufriedener Reisender"
  },
  support: {
    title: "24/7 Support",
    description: "Immer für Sie da, wenn Sie uns brauchen"
  },
  bestPrice: {
    title: "Bestpreisgarantie",
    description: "Wettbewerbsfähige Preise ohne versteckte Gebühren"
  }
};

// Fix German cabinCharter key (was "kabinencharter" lowercase)
if (deData.cabinencharter) {
  deData.cabinCharter = deData.cabinencharter;
  delete deData.cabinencharter;
}

fs.writeFileSync(dePath, JSON.stringify(deData, null, 2));
console.log('de.json updated successfully');

console.log('All translation files updated!');
