const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../messages/en.json');
const trPath = path.join(__dirname, '../messages/tr.json');
const dePath = path.join(__dirname, '../messages/de.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const deData = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// Yacht Charter Page - Extended
enData.yachtCharter = {
  ...enData.yachtCharter,
  hero: { subtitle: "Private Charters", title: "Yacht Charter", description: "Discover the Turkish coastline aboard our luxury fleet. Private yacht charters tailored to your dream vacation." },
  whyChoose: { title: "Why Choose Private Charter?", fleet: { title: "Premium Fleet", desc: "Hand-picked luxury yachts" }, crew: { title: "Expert Crew", desc: "Professional & experienced" }, routes: { title: "Custom Routes", desc: "Your itinerary, your way" }, service: { title: "Full Service", desc: "Gourmet dining included" } },
  fleet: { title: "Our Fleet", subtitle: "Choose from our selection of meticulously maintained yachts, each offering a unique experience on the turquoise waters." },
  specs: { length: "Length", cabins: "Cabins", guests: "Guests" },
  inquire: "Inquire Now",
  cta: { title: "Can't Find What You're Looking For?", subtitle: "We have access to over 100 yachts. Tell us your requirements and we'll find the perfect match.", contact: "Contact Us", whatsapp: "WhatsApp Us" }
};

trData.yachtCharter = {
  ...trData.yachtCharter,
  hero: { subtitle: "Ozel Kiralamalr", title: "Yat Kiralama", description: "Luks filomuzla Turk kiyilarini kesfedin. Hayalinizdeki tatil icin ozel yat kiralamalari." },
  whyChoose: { title: "Neden Ozel Kiralama?", fleet: { title: "Premium Filo", desc: "Ozenle secilmis luks yatlar" }, crew: { title: "Uzman Murettebat", desc: "Profesyonel ve deneyimli" }, routes: { title: "Ozel Rotalar", desc: "Sizin guzergahiniz, sizin programiniz" }, service: { title: "Tam Hizmet", desc: "Gurme yemekler dahil" } },
  fleet: { title: "Filomuz", subtitle: "Turkuaz sularda benzersiz deneyimler sunan, ozenle bakimli yatlarimiz arasinda secim yapin." },
  specs: { length: "Uzunluk", cabins: "Kabin", guests: "Misafir" },
  inquire: "Bilgi Al",
  cta: { title: "Aradiginizi Bulamdiniz mi?", subtitle: "100'den fazla yata erisimimiz var. Gereksinimlerinizi bize bildirin, mukemmel eslesmeyi bulalim.", contact: "Bize Ulasin", whatsapp: "WhatsApp" }
};

deData.yachtCharter = {
  ...deData.yachtCharter,
  hero: { subtitle: "Private Charter", title: "Yachtcharter", description: "Entdecken Sie die turkische Kuste an Bord unserer Luxusflotte. Private Yachtcharter fur Ihren Traumurlaub." },
  whyChoose: { title: "Warum Privatcharter?", fleet: { title: "Premium-Flotte", desc: "Handverlesene Luxusyachten" }, crew: { title: "Erfahrene Crew", desc: "Professionell & erfahren" }, routes: { title: "Individuelle Routen", desc: "Ihre Route, Ihr Zeitplan" }, service: { title: "Vollservice", desc: "Gourmet-Essen inklusive" } },
  fleet: { title: "Unsere Flotte", subtitle: "Wahlen Sie aus unserer Auswahl sorgfaltig gewarteter Yachten, die jeweils ein einzigartiges Erlebnis auf dem turkisfarbenen Wasser bieten." },
  specs: { length: "Lange", cabins: "Kabinen", guests: "Gaste" },
  inquire: "Anfragen",
  cta: { title: "Nicht gefunden was Sie suchen?", subtitle: "Wir haben Zugang zu uber 100 Yachten. Teilen Sie uns Ihre Anforderungen mit.", contact: "Kontakt", whatsapp: "WhatsApp" }
};

// Cabin Charter Page - Extended
enData.cabinCharter = {
  ...enData.cabinCharter,
  hero: { subtitle: "Blue Cruise", title: "Cabin Charter Cruises", description: "Share the adventure! Book a cabin and sail with fellow travelers on our scheduled blue cruise departures along the Turkish coast." },
  howItWorks: { title: "How Cabin Charter Works", step1: { step: "1", title: "Choose Route", desc: "Select from our popular cruise routes" }, step2: { step: "2", title: "Pick Cabin", desc: "Choose your preferred cabin type" }, step3: { step: "3", title: "Select Date", desc: "Find a departure that suits you" }, step4: { step: "4", title: "Set Sail!", desc: "Board and enjoy your blue cruise" } },
  cabinTypes: { title: "Cabin Types", subtitle: "All cabins include ensuite bathroom, air conditioning, and daily housekeeping.", standard: { name: "Standard Cabin", desc: "Comfortable twin or double cabin with ensuite bathroom", price: "From 350/person" }, deluxe: { name: "Deluxe Cabin", desc: "Larger cabin with premium amenities and sea view", price: "From 450/person" }, master: { name: "Master Suite", desc: "Spacious suite with private balcony and luxury finishes", price: "From 600/person" } },
  routes: { title: "Popular Routes", subtitle: "Weekly departures from May to October. All-inclusive packages with meals, crew, and activities.", popular: "POPULAR", from: "From", perPerson: "/person", bookNow: "Book Now" },
  included: { title: "What's Included", meals: { title: "Full Board Meals", desc: "Breakfast, lunch & dinner" }, accommodation: { title: "Accommodation", desc: "Ensuite cabin with A/C" }, crew: { title: "Professional Crew", desc: "Captain, cook & deckhands" }, fuel: { title: "Fuel & Port Fees", desc: "All charges included" }, activities: { title: "Water Activities", desc: "Snorkeling, kayaking & more" }, cleaning: { title: "Daily Cleaning", desc: "Cabin & bathroom service" }, beverages: { title: "Beverages", desc: "Tea, coffee & water" }, memories: { title: "Memories", desc: "Photo opportunities at every stop" } },
  cta: { title: "Ready for Your Blue Cruise Adventure?", subtitle: "Contact us for current availability and special group rates.", button: "Get a Free Quote" }
};

trData.cabinCharter = {
  ...trData.cabinCharter,
  hero: { subtitle: "Mavi Yolculuk", title: "Kabin Kiralama", description: "Maceraya katilin! Bir kabin rezerve edin ve Turk kiyilari boyunca programli mavi yolculuk kalkislarimizda diger gezginlerle yelken acin." },
  howItWorks: { title: "Kabin Kiralama Nasil Calisir", step1: { step: "1", title: "Rota Secin", desc: "Populer rota seceneklerimizden secin" }, step2: { step: "2", title: "Kabin Secin", desc: "Tercih ettiginiz kabin tipini secin" }, step3: { step: "3", title: "Tarih Secin", desc: "Size uygun bir kalkis bulun" }, step4: { step: "4", title: "Yelken Acin!", desc: "Binin ve mavi yolculugunuzun tadini cikarin" } },
  cabinTypes: { title: "Kabin Tipleri", subtitle: "Tum kabinler banyo, klima ve gunluk temizlik hizmeti icermektedir.", standard: { name: "Standart Kabin", desc: "Banyolu rahat ikiz veya cift kisilik kabin", price: "350/kisi" }, deluxe: { name: "Deluxe Kabin", desc: "Premium olanaklara ve deniz manzarasina sahip genis kabin", price: "450/kisi" }, master: { name: "Master Suit", desc: "Ozel balkonu ve luks donanima sahip ferah suit", price: "600/kisi" } },
  routes: { title: "Populer Rotalar", subtitle: "Mayis'tan Ekim'e haftalik kalkislar. Yemekler, murettebat ve aktiviteler dahil her sey dahil paketler.", popular: "POPULER", from: "Baslayan", perPerson: "/kisi", bookNow: "Simdi Rezerve Et" },
  included: { title: "Neler Dahil", meals: { title: "Tam Pansiyon", desc: "Kahvalti, ogle ve aksam yemegi" }, accommodation: { title: "Konaklama", desc: "Klimali banyolu kabin" }, crew: { title: "Profesyonel Ekip", desc: "Kaptan, asci ve guverte gorevlileri" }, fuel: { title: "Yakit ve Liman Ucretleri", desc: "Tum masraflar dahil" }, activities: { title: "Su Aktiviteleri", desc: "Snorkeling, kano ve daha fazlasi" }, cleaning: { title: "Gunluk Temizlik", desc: "Kabin ve banyo servisi" }, beverages: { title: "Icecekler", desc: "Cay, kahve ve su" }, memories: { title: "Animlar", desc: "Her durakta fotograf firsatlari" } },
  cta: { title: "Mavi Yolculuk Maceraniza Hazir misiniz?", subtitle: "Guncel musaitlik ve ozel grup fiyatlari icin bize ulasin.", button: "Ucretsiz Teklif Alin" }
};

deData.cabinCharter = {
  ...deData.cabinCharter,
  hero: { subtitle: "Blaue Kreuzfahrt", title: "Kabinencharter", description: "Teilen Sie das Abenteuer! Buchen Sie eine Kabine und segeln Sie mit anderen Reisenden auf unseren geplanten Blauen Kreuzfahrten entlang der turkischen Kuste." },
  howItWorks: { title: "So funktioniert Kabinencharter", step1: { step: "1", title: "Route wahlen", desc: "Wahlen Sie aus unseren beliebten Routen" }, step2: { step: "2", title: "Kabine wahlen", desc: "Wahlen Sie Ihren bevorzugten Kabinentyp" }, step3: { step: "3", title: "Datum wahlen", desc: "Finden Sie eine passende Abfahrt" }, step4: { step: "4", title: "Lossegeln!", desc: "Einsteigen und geniessen" } },
  cabinTypes: { title: "Kabinentypen", subtitle: "Alle Kabinen haben eigenes Bad, Klimaanlage und taglichen Reinigungsservice.", standard: { name: "Standardkabine", desc: "Komfortable Twin- oder Doppelkabine mit Bad", price: "Ab 350/Person" }, deluxe: { name: "Deluxe-Kabine", desc: "Grossere Kabine mit Premium-Ausstattung und Meerblick", price: "Ab 450/Person" }, master: { name: "Master-Suite", desc: "Geraumige Suite mit privatem Balkon und Luxusausstattung", price: "Ab 600/Person" } },
  routes: { title: "Beliebte Routen", subtitle: "Wochentliche Abfahrten von Mai bis Oktober. All-inclusive-Pakete mit Mahlzeiten, Crew und Aktivitaten.", popular: "BELIEBT", from: "Ab", perPerson: "/Person", bookNow: "Jetzt Buchen" },
  included: { title: "Was ist inbegriffen", meals: { title: "Vollpension", desc: "Fruhstuck, Mittag- & Abendessen" }, accommodation: { title: "Unterkunft", desc: "Kabine mit Bad und Klimaanlage" }, crew: { title: "Professionelle Crew", desc: "Kapitan, Koch & Deckhands" }, fuel: { title: "Kraftstoff & Hafengebuhren", desc: "Alle Kosten inklusive" }, activities: { title: "Wasseraktivitaten", desc: "Schnorcheln, Kajakfahren & mehr" }, cleaning: { title: "Tagliche Reinigung", desc: "Kabinen- & Badservice" }, beverages: { title: "Getranke", desc: "Tee, Kaffee & Wasser" }, memories: { title: "Erinnerungen", desc: "Fotomoglichkeiten bei jedem Stopp" } },
  cta: { title: "Bereit fur Ihr Blaue Kreuzfahrt Abenteuer?", subtitle: "Kontaktieren Sie uns fur aktuelle Verfugbarkeit und Gruppenpreise.", button: "Kostenloses Angebot" }
};

// Car Rental Page - Extended
enData.carRental = {
  ...enData.carRental,
  hero: { subtitle: "Freedom to Explore", title: "Car Rental", description: "Explore Fethiye and beyond at your own pace. Quality vehicles, competitive prices, and hassle-free service." },
  booking: { pickup: "Pickup Location", pickupDate: "Pickup Date", returnDate: "Return Date", checkAvailability: "Check Availability", locations: { airport: "Dalaman Airport", office: "Fethiye Office", hotel: "Hotel Delivery" } },
  features: { selection: { title: "Wide Selection", desc: "From economy to luxury" }, pickup: { title: "Flexible Pickup", desc: "Airport, hotel, or office" }, insurance: { title: "Full Insurance", desc: "Comprehensive coverage included" }, cancel: { title: "Free Cancellation", desc: "Up to 24h before pickup" }, fuel: { title: "Fuel Policy", desc: "Full-to-full, no surprises" }, support: { title: "24/7 Support", desc: "Roadside assistance included" } },
  fleet: { title: "Our Fleet", subtitle: "All vehicles are well-maintained, fully insured, and come with 24/7 roadside assistance.", seats: "seats", book: "Book" },
  categories: { economy: "Economy", compact: "Compact", suv: "SUV", premium: "Premium" },
  info: { title: "Rental Information", requirements: { title: "Requirements", items: ["Valid driving license (min. 2 years)", "Minimum age: 21 years", "Credit card for deposit", "Valid passport or ID"] }, insurance: { title: "Insurance", items: ["Full CDW coverage", "Third party liability", "Theft protection", "24/7 roadside assistance"] }, extras: { title: "Extras", items: ["GPS navigation: 5/day", "Child seat: 5/day", "Additional driver: 5/day", "Cross-border permit: 15"] } },
  cta: { title: "Need a Custom Quote?", subtitle: "Long-term rentals, special requests, or group bookings? We've got you covered.", button: "Get Custom Quote" }
};

trData.carRental = {
  ...trData.carRental,
  hero: { subtitle: "Ozgurce Kesfedin", title: "Arac Kiralama", description: "Fethiye ve otesini kendi hizinizda kesfedin. Kaliteli araclar, rekabetci fiyatlar ve sorunsuz hizmet." },
  booking: { pickup: "Alis Yeri", pickupDate: "Alis Tarihi", returnDate: "Iade Tarihi", checkAvailability: "Musaitligi Kontrol Et", locations: { airport: "Dalaman Havalimani", office: "Fethiye Ofis", hotel: "Otel Teslimi" } },
  features: { selection: { title: "Genis Secenek", desc: "Ekonomikten lukse" }, pickup: { title: "Esnek Alis", desc: "Havalimani, otel veya ofis" }, insurance: { title: "Tam Sigorta", desc: "Kapsamli koruma dahil" }, cancel: { title: "Ucretsiz Iptal", desc: "Alistan 24 saat once" }, fuel: { title: "Yakit Politikasi", desc: "Dolu-dolu, surpriz yok" }, support: { title: "7/24 Destek", desc: "Yol yardimi dahil" } },
  fleet: { title: "Filomuz", subtitle: "Tum araclar iyi bakilmis, tam sigortali ve 7/24 yol yardimi ile birlikte gelir.", seats: "koltuk", book: "Kirala" },
  categories: { economy: "Ekonomik", compact: "Kompakt", suv: "SUV", premium: "Premium" },
  info: { title: "Kiralama Bilgileri", requirements: { title: "Gereksinimler", items: ["Gecerli ehliyet (min. 2 yil)", "Minimum yas: 21", "Depozito icin kredi karti", "Gecerli pasaport veya kimlik"] }, insurance: { title: "Sigorta", items: ["Tam CDW kapsami", "Ucuncu sahis sorumlulugu", "Hirsizlik korumasi", "7/24 yol yardimi"] }, extras: { title: "Ekstralar", items: ["GPS navigasyon: 5/gun", "Cocuk koltugu: 5/gun", "Ek surucu: 5/gun", "Sinir gecis izni: 15"] } },
  cta: { title: "Ozel Teklif mi Gerekiyor?", subtitle: "Uzun sureli kiralamalar, ozel istekler veya grup rezervasyonlari? Sizin icin buradayiz.", button: "Ozel Teklif Al" }
};

deData.carRental = {
  ...deData.carRental,
  hero: { subtitle: "Freiheit zu erkunden", title: "Autovermietung", description: "Erkunden Sie Fethiye und Umgebung in Ihrem eigenen Tempo. Qualitatsfahrzeuge, wettbewerbsfahige Preise und problemloser Service." },
  booking: { pickup: "Abholort", pickupDate: "Abholdatum", returnDate: "Ruckgabedatum", checkAvailability: "Verfugbarkeit prufen", locations: { airport: "Flughafen Dalaman", office: "Fethiye Buro", hotel: "Hotellieferung" } },
  features: { selection: { title: "Grosse Auswahl", desc: "Von Economy bis Luxus" }, pickup: { title: "Flexible Abholung", desc: "Flughafen, Hotel oder Buro" }, insurance: { title: "Vollversicherung", desc: "Umfassender Schutz inklusive" }, cancel: { title: "Kostenlose Stornierung", desc: "Bis 24h vor Abholung" }, fuel: { title: "Tankpolitik", desc: "Voll-zu-voll, keine Uberraschungen" }, support: { title: "24/7 Support", desc: "Pannenhilfe inklusive" } },
  fleet: { title: "Unsere Flotte", subtitle: "Alle Fahrzeuge sind gut gewartet, vollversichert und mit 24/7 Pannenhilfe.", seats: "Sitze", book: "Buchen" },
  categories: { economy: "Economy", compact: "Kompakt", suv: "SUV", premium: "Premium" },
  info: { title: "Mietinformationen", requirements: { title: "Anforderungen", items: ["Gultiger Fuhrerschein (min. 2 Jahre)", "Mindestalter: 21 Jahre", "Kreditkarte fur Kaution", "Gultiger Reisepass oder Ausweis"] }, insurance: { title: "Versicherung", items: ["Volle CDW-Deckung", "Haftpflichtversicherung", "Diebstahlschutz", "24/7 Pannenhilfe"] }, extras: { title: "Extras", items: ["GPS Navigation: 5/Tag", "Kindersitz: 5/Tag", "Zusatzfahrer: 5/Tag", "Grenzubertrittsgenehmigung: 15"] } },
  cta: { title: "Individuelles Angebot benotigt?", subtitle: "Langzeitmieten, Sonderwunsche oder Gruppenbuchungen? Wir helfen gerne.", button: "Individuelles Angebot" }
};

// Transfer Page - Extended
enData.transfer = {
  ...enData.transfer,
  hero: { subtitle: "Comfortable Travel", title: "Transfer Services", description: "Reliable airport and hotel transfer services. Start your holiday stress-free with our professional drivers." },
  booking: { from: "From", to: "To", date: "Date", passengers: "Passengers", getQuote: "Get Quote" },
  services: { title: "Our Services", airport: { title: "Airport Transfers", desc: "To/from Dalaman and Antalya airports" }, hotel: { title: "Hotel Transfers", desc: "Between hotels and attractions" }, vip: { title: "VIP Service", desc: "Luxury vehicles with premium amenities" }, group: { title: "Group Transfers", desc: "Comfortable minibuses for larger groups" } },
  vehicles: { title: "Our Vehicles", sedan: "Sedan (1-3 passengers)", minivan: "Minivan (4-7 passengers)", minibus: "Minibus (8-15 passengers)", bus: "Bus (16+ passengers)" },
  features: { meet: { title: "Meet & Greet", desc: "Driver waiting at arrivals" }, tracking: { title: "Flight Tracking", desc: "We monitor your flight" }, support: { title: "24/7 Support", desc: "Always available" }, fixed: { title: "Fixed Prices", desc: "No hidden charges" } },
  destinations: { title: "Popular Routes", dalaman: "Dalaman Airport", antalya: "Antalya Airport", fethiye: "Fethiye", oludeniz: "Oludeniz", kas: "Kas", kalkan: "Kalkan", marmaris: "Marmaris" },
  cta: { title: "Book Your Transfer", subtitle: "Reliable, on-time service guaranteed.", button: "Get a Quote" }
};

trData.transfer = {
  ...trData.transfer,
  hero: { subtitle: "Konforlu Seyahat", title: "Transfer Hizmetleri", description: "Guvenilir havalimani ve otel transfer hizmetleri. Profesyonel soforlerimizle tatilinize stressi baslatin." },
  booking: { from: "Nereden", to: "Nereye", date: "Tarih", passengers: "Yolcu", getQuote: "Teklif Al" },
  services: { title: "Hizmetlerimiz", airport: { title: "Havalimani Transferleri", desc: "Dalaman ve Antalya havalimalarina" }, hotel: { title: "Otel Transferleri", desc: "Oteller ve turistik yerler arasi" }, vip: { title: "VIP Hizmet", desc: "Premium olanaklara sahip luks araclar" }, group: { title: "Grup Transferleri", desc: "Buyuk gruplar icin konforlu minibusler" } },
  vehicles: { title: "Araclarimiz", sedan: "Sedan (1-3 yolcu)", minivan: "Minivan (4-7 yolcu)", minibus: "Minibu (8-15 yolcu)", bus: "Otobus (16+ yolcu)" },
  features: { meet: { title: "Karsilama", desc: "Varisda sizi bekleyen sofor" }, tracking: { title: "Ucus Takibi", desc: "Ucusunuzu takip ediyoruz" }, support: { title: "7/24 Destek", desc: "Her zaman ulasabilirsiniz" }, fixed: { title: "Sabit Fiyatlar", desc: "Gizli masraf yok" } },
  destinations: { title: "Populer Rotalar", dalaman: "Dalaman Havalimani", antalya: "Antalya Havalimani", fethiye: "Fethiye", oludeniz: "Oludeniz", kas: "Kas", kalkan: "Kalkan", marmaris: "Marmaris" },
  cta: { title: "Transferinizi Rezerve Edin", subtitle: "Guvenilir, zamaninda hizmet garantisi.", button: "Teklif Al" }
};

deData.transfer = {
  ...deData.transfer,
  hero: { subtitle: "Komfortables Reisen", title: "Transferdienste", description: "Zuverlassige Flughafen- und Hoteltransfers. Starten Sie Ihren Urlaub stressfrei mit unseren professionellen Fahrern." },
  booking: { from: "Von", to: "Nach", date: "Datum", passengers: "Passagiere", getQuote: "Angebot" },
  services: { title: "Unsere Dienste", airport: { title: "Flughafentransfers", desc: "Zu/von Dalaman und Antalya" }, hotel: { title: "Hoteltransfers", desc: "Zwischen Hotels und Sehenswurdigkeiten" }, vip: { title: "VIP-Service", desc: "Luxusfahrzeuge mit Premium-Ausstattung" }, group: { title: "Gruppentransfers", desc: "Komfortable Minibusse fur grosse Gruppen" } },
  vehicles: { title: "Unsere Fahrzeuge", sedan: "Limousine (1-3 Passagiere)", minivan: "Minivan (4-7 Passagiere)", minibus: "Minibus (8-15 Passagiere)", bus: "Bus (16+ Passagiere)" },
  features: { meet: { title: "Meet & Greet", desc: "Fahrer wartet bei Ankunft" }, tracking: { title: "Flugverfolgung", desc: "Wir uberwachen Ihren Flug" }, support: { title: "24/7 Support", desc: "Immer erreichbar" }, fixed: { title: "Festpreise", desc: "Keine versteckten Kosten" } },
  destinations: { title: "Beliebte Routen", dalaman: "Flughafen Dalaman", antalya: "Flughafen Antalya", fethiye: "Fethiye", oludeniz: "Oludeniz", kas: "Kas", kalkan: "Kalkan", marmaris: "Marmaris" },
  cta: { title: "Buchen Sie Ihren Transfer", subtitle: "Zuverlassiger, punktlicher Service garantiert.", button: "Angebot anfordern" }
};

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
fs.writeFileSync(dePath, JSON.stringify(deData, null, 2));

console.log('Remaining translations added successfully!');
