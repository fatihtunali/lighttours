const fs = require('fs');
const path = require('path');

// Read all translation files
const enPath = path.join(__dirname, '../messages/en.json');
const trPath = path.join(__dirname, '../messages/tr.json');
const dePath = path.join(__dirname, '../messages/de.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const deData = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// Add missing quote keys for EN
enData.quote = {
  ...enData.quote,
  aiHint: "Our AI can suggest the perfect itinerary!",
  cruiseHint: "We'll suggest the perfect blue cruise route for you!",
  sections: {
    personalInfo: "Your Information",
    serviceType: "Service Type",
    cruiseDestinations: "Cruise Destinations",
    tourDestinations: "Tour Destinations",
    tripDetails: "Trip Details",
    interests: "Your Interests",
    additionalInfo: "Additional Information"
  },
  fields: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone / WhatsApp",
    startDate: "Start Date",
    duration: "Duration",
    cruiseDuration: "Cruise Duration",
    travelers: "Travelers",
    budgetLevel: "Budget Level"
  },
  budget: {
    budget: "Budget-friendly",
    moderate: "Moderate",
    luxury: "Luxury"
  },
  duration: {
    "4nights": "4 Nights",
    "7nights": "7 Nights",
    "8nights": "8 Nights",
    "10nights": "10 Nights",
    "14nights": "14 Nights"
  },
  interests: {
    historyCulture: "History & Culture",
    natureHiking: "Nature & Hiking",
    beachSwimming: "Beach & Swimming",
    foodCuisine: "Food & Cuisine",
    adventureSports: "Adventure Sports",
    photography: "Photography",
    relaxation: "Relaxation"
  },
  placeholders: {
    cruiseMessage: "Tell us about any special requirements (dietary needs, celebrations, water sports interests, etc.)",
    tourMessage: "Tell us more about your trip expectations, special requests, dietary requirements, etc."
  },
  cruise: {
    recommendedRoute: "Recommended Cruise Route",
    finding: "Finding the perfect route...",
    dayByDay: "Day-by-Day Itinerary",
    swimStops: "swim stops",
    included: "Included",
    notIncluded: "Not Included",
    totalFor: "Total for {count} travelers",
    noRoute: "No matching cruise route found. Contact us for a custom itinerary!"
  },
  ai: {
    title: "AI-Generated Tour Itinerary",
    generating: "Generating your personalized itinerary...",
    estimatedPrice: "Estimated Total Price",
    meals: "Meals",
    failed: "Failed to generate itinerary."
  },
  buttons: {
    findCruiseRoute: "Find Cruise Route",
    getAiSuggestion: "Get AI Suggestion",
    sendWhatsApp: "Send Quote Request via WhatsApp",
    sending: "Sending..."
  },
  whatsapp: {
    greeting: "Hello Light Tours!",
    request: "I would like to request a quote for the following",
    name: "Name",
    email: "Email",
    service: "Service",
    destinations: "Destinations",
    date: "Date",
    duration: "Duration",
    travelers: "Travelers",
    budget: "Budget",
    interests: "Interests",
    interestedRoute: "Interested in route",
    totalPrice: "Total price",
    additionalInfo: "Additional information"
  },
  errors: {
    selectDestination: "Please select at least one destination",
    enterNameEmail: "Please enter your name and email"
  },
  cruiseDestinationHint: "Select your preferred stops and we'll suggest the best cruise route!",
  day: "Day",
  days: "days",
  person: "person",
  people: "people",
  from: "From",
  perPerson: "per person"
};

// Add missing quote keys for TR
trData.quote = {
  ...trData.quote,
  aiHint: "Yapay zekamız mükemmel güzergahı önerebilir!",
  cruiseHint: "Sizin için mükemmel mavi yolculuk rotasını önereceğiz!",
  sections: {
    personalInfo: "Bilgileriniz",
    serviceType: "Hizmet Türü",
    cruiseDestinations: "Kruvaziyer Destinasyonları",
    tourDestinations: "Tur Destinasyonları",
    tripDetails: "Gezi Detayları",
    interests: "İlgi Alanlarınız",
    additionalInfo: "Ek Bilgiler"
  },
  fields: {
    fullName: "Ad Soyad",
    email: "E-posta Adresi",
    phone: "Telefon / WhatsApp",
    startDate: "Başlangıç Tarihi",
    duration: "Süre",
    cruiseDuration: "Kruvaziyer Süresi",
    travelers: "Yolcu Sayısı",
    budgetLevel: "Bütçe Seviyesi"
  },
  budget: {
    budget: "Ekonomik",
    moderate: "Orta",
    luxury: "Lüks"
  },
  duration: {
    "4nights": "4 Gece",
    "7nights": "7 Gece",
    "8nights": "8 Gece",
    "10nights": "10 Gece",
    "14nights": "14 Gece"
  },
  interests: {
    historyCulture: "Tarih ve Kültür",
    natureHiking: "Doğa ve Yürüyüş",
    beachSwimming: "Plaj ve Yüzme",
    foodCuisine: "Yemek ve Mutfak",
    adventureSports: "Macera Sporları",
    photography: "Fotoğrafçılık",
    relaxation: "Rahatlama"
  },
  placeholders: {
    cruiseMessage: "Özel gereksinimlerinizi bize bildirin (diyet ihtiyaçları, kutlamalar, su sporları ilgileri vb.)",
    tourMessage: "Gezi beklentileriniz, özel istekleriniz, diyet gereksinimleri vb. hakkında daha fazla bilgi verin."
  },
  cruise: {
    recommendedRoute: "Önerilen Kruvaziyer Rotası",
    finding: "Mükemmel rota aranıyor...",
    dayByDay: "Günlük Program",
    swimStops: "yüzme durağı",
    included: "Dahil",
    notIncluded: "Dahil Değil",
    totalFor: "{count} kişi için toplam",
    noRoute: "Eşleşen rota bulunamadı. Özel güzergah için bizimle iletişime geçin!"
  },
  ai: {
    title: "AI Tarafından Oluşturulan Tur Programı",
    generating: "Kişiselleştirilmiş programınız oluşturuluyor...",
    estimatedPrice: "Tahmini Toplam Fiyat",
    meals: "Öğünler",
    failed: "Program oluşturulamadı."
  },
  buttons: {
    findCruiseRoute: "Rota Bul",
    getAiSuggestion: "AI Önerisi Al",
    sendWhatsApp: "WhatsApp ile Teklif İste",
    sending: "Gönderiliyor..."
  },
  whatsapp: {
    greeting: "Merhaba Light Tours!",
    request: "Aşağıdaki için teklif almak istiyorum",
    name: "Ad",
    email: "E-posta",
    service: "Hizmet",
    destinations: "Destinasyonlar",
    date: "Tarih",
    duration: "Süre",
    travelers: "Yolcu",
    budget: "Bütçe",
    interests: "İlgi Alanları",
    interestedRoute: "İlgilenilen rota",
    totalPrice: "Toplam fiyat",
    additionalInfo: "Ek bilgi"
  },
  errors: {
    selectDestination: "Lütfen en az bir destinasyon seçin",
    enterNameEmail: "Lütfen adınızı ve e-postanızı girin"
  },
  cruiseDestinationHint: "Tercih ettiğiniz duraları seçin, size en iyi rota önerisini sunalım!",
  day: "Gün",
  days: "gün",
  person: "kişi",
  people: "kişi",
  from: "Başlayan",
  perPerson: "kişi başı"
};

// Add missing quote keys for DE
deData.quote = {
  ...deData.quote,
  aiHint: "Unsere KI kann die perfekte Reiseroute vorschlagen!",
  cruiseHint: "Wir schlagen Ihnen die perfekte Blaue Kreuzfahrt-Route vor!",
  sections: {
    personalInfo: "Ihre Informationen",
    serviceType: "Serviceart",
    cruiseDestinations: "Kreuzfahrtziele",
    tourDestinations: "Tourziele",
    tripDetails: "Reisedetails",
    interests: "Ihre Interessen",
    additionalInfo: "Zusätzliche Informationen"
  },
  fields: {
    fullName: "Vollständiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefon / WhatsApp",
    startDate: "Startdatum",
    duration: "Dauer",
    cruiseDuration: "Kreuzfahrtdauer",
    travelers: "Reisende",
    budgetLevel: "Budgetniveau"
  },
  budget: {
    budget: "Budgetfreundlich",
    moderate: "Moderat",
    luxury: "Luxus"
  },
  duration: {
    "4nights": "4 Nächte",
    "7nights": "7 Nächte",
    "8nights": "8 Nächte",
    "10nights": "10 Nächte",
    "14nights": "14 Nächte"
  },
  interests: {
    historyCulture: "Geschichte & Kultur",
    natureHiking: "Natur & Wandern",
    beachSwimming: "Strand & Schwimmen",
    foodCuisine: "Essen & Küche",
    adventureSports: "Abenteuersport",
    photography: "Fotografie",
    relaxation: "Entspannung"
  },
  placeholders: {
    cruiseMessage: "Teilen Sie uns besondere Anforderungen mit (Ernährungsbedürfnisse, Feierlichkeiten, Wassersportinteressen usw.)",
    tourMessage: "Erzählen Sie uns mehr über Ihre Reiseerwartungen, besondere Wünsche, Ernährungsanforderungen usw."
  },
  cruise: {
    recommendedRoute: "Empfohlene Kreuzfahrtroute",
    finding: "Suche nach der perfekten Route...",
    dayByDay: "Tag-für-Tag Reiseplan",
    swimStops: "Badestopps",
    included: "Inklusive",
    notIncluded: "Nicht Inklusive",
    totalFor: "Gesamt für {count} Reisende",
    noRoute: "Keine passende Route gefunden. Kontaktieren Sie uns für eine individuelle Reiseroute!"
  },
  ai: {
    title: "KI-Generierte Tourreiseroute",
    generating: "Ihre personalisierte Reiseroute wird erstellt...",
    estimatedPrice: "Geschätzter Gesamtpreis",
    meals: "Mahlzeiten",
    failed: "Reiseroute konnte nicht erstellt werden."
  },
  buttons: {
    findCruiseRoute: "Route Finden",
    getAiSuggestion: "KI-Vorschlag Erhalten",
    sendWhatsApp: "Angebotsanfrage per WhatsApp Senden",
    sending: "Wird gesendet..."
  },
  whatsapp: {
    greeting: "Hallo Light Tours!",
    request: "Ich möchte ein Angebot für Folgendes anfordern",
    name: "Name",
    email: "E-Mail",
    service: "Service",
    destinations: "Reiseziele",
    date: "Datum",
    duration: "Dauer",
    travelers: "Reisende",
    budget: "Budget",
    interests: "Interessen",
    interestedRoute: "Interessiert an Route",
    totalPrice: "Gesamtpreis",
    additionalInfo: "Zusätzliche Informationen"
  },
  errors: {
    selectDestination: "Bitte wählen Sie mindestens ein Reiseziel",
    enterNameEmail: "Bitte geben Sie Ihren Namen und Ihre E-Mail ein"
  },
  cruiseDestinationHint: "Wählen Sie Ihre bevorzugten Stopps und wir schlagen Ihnen die beste Route vor!",
  day: "Tag",
  days: "Tage",
  person: "Person",
  people: "Personen",
  from: "Ab",
  perPerson: "pro Person"
};

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
fs.writeFileSync(dePath, JSON.stringify(deData, null, 2));

console.log('All quote translations added successfully!');
