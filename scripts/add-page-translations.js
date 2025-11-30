const fs = require('fs');
const path = require('path');

// Read all translation files
const enPath = path.join(__dirname, '../messages/en.json');
const trPath = path.join(__dirname, '../messages/tr.json');
const dePath = path.join(__dirname, '../messages/de.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const deData = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// About Page
enData.about = {
  hero: { subtitle: "Our Story", title: "About Light Tours", description: "{years} years of creating unforgettable travel experiences in the heart of the Turkish Riviera." },
  story: { badge: "Since 1988", title: "Our Story", p1: "Light Tours began in 1988 as a small, family-run operation in Fethiye. What started as a passion for sharing the beauty of the Turkish coastline with visitors has grown into one of the region's most trusted travel agencies.", p2: "Our founder's vision was simple: provide exceptional service, maintain the highest standards, and treat every guest like family. This philosophy has guided us for over three decades.", p3: "Today, with a fleet of over 20 yachts and a team of dedicated professionals, we continue to create unforgettable experiences for travelers from around the world.", license: "License", yearsExcellence: "Years of Excellence" },
  timeline: { title: "Our Journey", items: { 1988: { title: "The Beginning", desc: "Founded as a small family office in Fethiye, offering local boat tours." }, 1995: { title: "Fleet Expansion", desc: "Acquired our first gulet and began offering private yacht charters." }, 2002: { title: "TURSAB Certification", desc: "Received official travel agency license, expanding our service range." }, 2010: { title: "International Recognition", desc: "Started serving international clients from Europe and beyond." }, 2018: { title: "30 Years Celebration", desc: "Celebrated three decades with a fleet of 20+ yachts." }, 2024: { title: "Digital Transformation", desc: "Launched AI-powered booking system for personalized travel planning." } } },
  values: { title: "Our Values", subtitle: "The principles that guide everything we do", excellence: { title: "Excellence", desc: "We strive for perfection in every detail of your journey" }, trust: { title: "Trust", desc: "Building lasting relationships through honesty and reliability" }, innovation: { title: "Innovation", desc: "Embracing technology to enhance your travel experience" }, sustainability: { title: "Sustainability", desc: "Committed to responsible tourism and environmental protection" } },
  team: { title: "Meet Our Team", subtitle: "Dedicated professionals committed to making your trip unforgettable" },
  cta: { title: "Ready to Start Your Adventure?", subtitle: "Let our {years} years of experience work for you.", contact: "Contact Us", quote: "Get a Quote" }
};

trData.about = {
  hero: { subtitle: "Hikayemiz", title: "Light Tours Hakkinda", description: "Turk Rivierasi'nin kalbinde {years} yillik unutulmaz seyahat deneyimleri." },
  story: { badge: "1988'den beri", title: "Hikayemiz", p1: "Light Tours, 1988 yilinda Fethiye'de kucuk bir aile isletmesi olarak kuruldu. Turk kiyilarinin guzelligini ziyaretcilerle paylasma tutkusuyla baslayan yolculuk, bolgenin en guvenilir seyahat acentelerinden biri haline geldi.", p2: "Kurucumuzun vizyonu basitti: olagan ustu hizmet sunmak, en yuksek standartlari korumak ve her misafiri aile gibi agirlamak. Bu felsefe otuz yildan fazla suredir bize rehberlik etti.", p3: "Bugun, 20'den fazla yatimiz ve ozverili profesyonellerden olusan ekibimizle, dunyanin dort bir yanindan gelen gezginler icin unutulmaz deneyimler yaratmaya devam ediyoruz.", license: "Lisans", yearsExcellence: "Yillik Deneyim" },
  timeline: { title: "Yolculugumuz", items: { 1988: { title: "Baslangiç", desc: "Fethiye'de kucuk bir aile ofisi olarak kuruldu, yerel tekne turlari sunulmaya baslandi." }, 1995: { title: "Filo Genislemesi", desc: "Ilk guletimizi aldik ve ozel yat kiralamalarina basladik." }, 2002: { title: "TURSAB Sertifikasi", desc: "Resmi seyahat acentesi lisansi alindi, hizmet yelpazemiz genisledi." }, 2010: { title: "Uluslararasi Taninirlik", desc: "Avrupa ve otesinden uluslararasi musterilere hizmet vermeye basladik." }, 2018: { title: "30. Yil Kutlamasi", desc: "20'den fazla yatlik filoyla uc on yili kutladik." }, 2024: { title: "Dijital Donusum", desc: "Kisisellestirilmis seyahat planlamasi icin yapay zeka destekli rezervasyon sistemi baslatildi." } } },
  values: { title: "Degerlerimiz", subtitle: "Yaptigimiz her seye rehberlik eden ilkeler", excellence: { title: "Mukemmellik", desc: "Yolculugunuzun her detayinda mukemmellik icin calisiyoruz" }, trust: { title: "Guven", desc: "Durustluk ve guvenilirlik yoluyla kalici iliskiler kuruyoruz" }, innovation: { title: "Yenilik", desc: "Seyahat deneyiminizi gelistirmek icin teknolojiyi benimsiyoruz" }, sustainability: { title: "Surdurulebilirlik", desc: "Sorumlu turizm ve cevre korumaya kararliyiz" } },
  team: { title: "Ekibimizle Tanisin", subtitle: "Seyahatinizi unutulmaz kilmaya adanmis profesyoneller" },
  cta: { title: "Maceraniza Baslamaya Hazir misiniz?", subtitle: "{years} yillik deneyimimiz sizin icin calissin.", contact: "Bize Ulasin", quote: "Teklif Alin" }
};

deData.about = {
  hero: { subtitle: "Unsere Geschichte", title: "Uber Light Tours", description: "{years} Jahre unvergesslicher Reiseerlebnisse im Herzen der Turkischen Riviera." },
  story: { badge: "Seit 1988", title: "Unsere Geschichte", p1: "Light Tours begann 1988 als kleines Familienunternehmen in Fethiye. Was als Leidenschaft begann, die Schonheit der turkischen Kuste mit Besuchern zu teilen, ist zu einer der vertrauenswurdigsten Reiseagenturen der Region geworden.", p2: "Die Vision unseres Grunders war einfach: aussergewohnlichen Service bieten, die hochsten Standards einhalten und jeden Gast wie Familie behandeln. Diese Philosophie hat uns uber drei Jahrzehnte geleitet.", p3: "Heute setzen wir mit einer Flotte von uber 20 Yachten und einem Team engagierter Fachleute die Tradition fort, fur Reisende aus aller Welt unvergessliche Erlebnisse zu schaffen.", license: "Lizenz", yearsExcellence: "Jahre Exzellenz" },
  timeline: { title: "Unsere Reise", items: { 1988: { title: "Der Anfang", desc: "Als kleines Familienburo in Fethiye gegrundet, lokale Bootstouren angeboten." }, 1995: { title: "Flottenerweiterung", desc: "Erster Gulet erworben, private Yachtcharter angeboten." }, 2002: { title: "TURSAB-Zertifizierung", desc: "Offizielle Reiseburo-Lizenz erhalten, Serviceangebot erweitert." }, 2010: { title: "Internationale Anerkennung", desc: "Beginn der Betreuung internationaler Kunden aus Europa und daruber hinaus." }, 2018: { title: "30-jahriges Jubilaum", desc: "Drei Jahrzehnte mit einer Flotte von uber 20 Yachten gefeiert." }, 2024: { title: "Digitale Transformation", desc: "KI-gestutztes Buchungssystem fur personalisierte Reiseplanung gestartet." } } },
  values: { title: "Unsere Werte", subtitle: "Die Prinzipien, die alles leiten, was wir tun", excellence: { title: "Exzellenz", desc: "Wir streben nach Perfektion in jedem Detail Ihrer Reise" }, trust: { title: "Vertrauen", desc: "Aufbau dauerhafter Beziehungen durch Ehrlichkeit und Zuverlassigkeit" }, innovation: { title: "Innovation", desc: "Technologie nutzen, um Ihr Reiseerlebnis zu verbessern" }, sustainability: { title: "Nachhaltigkeit", desc: "Engagement fur verantwortungsvollen Tourismus und Umweltschutz" } },
  team: { title: "Unser Team", subtitle: "Engagierte Fachleute, die Ihre Reise unvergesslich machen" },
  cta: { title: "Bereit fur Ihr Abenteuer?", subtitle: "Lassen Sie unsere {years} Jahre Erfahrung fur Sie arbeiten.", contact: "Kontaktieren Sie uns", quote: "Angebot anfordern" }
};

// Contact Page
enData.contact = {
  hero: { subtitle: "Get in Touch", title: "Contact Us", description: "Have questions? We're here to help you plan your perfect trip." },
  info: { title: "Contact Information", description: "Reach out to us through any of the following channels. We typically respond within 2 hours during business hours.", phone: "Phone", whatsapp: "WhatsApp", whatsappDesc: "Chat with us instantly", whatsappNote: "Quick responses, 24/7", email: "Email", office: "Office" },
  hours: { title: "Working Hours", weekdays: "Monday - Friday", saturday: "Saturday", sunday: "Sunday", note: "* WhatsApp support available 24/7 for urgent inquiries" },
  form: { title: "Send Us a Message", name: "Full Name", email: "Email", phone: "Phone", subject: "Subject", selectSubject: "Select a subject", message: "Message", messagePlaceholder: "Tell us about your travel plans...", submit: "Send Message via WhatsApp", subjects: { yacht: "Yacht Charter Inquiry", cabin: "Cabin Charter Booking", tour: "Day Tour Booking", car: "Car Rental", transfer: "Transfer Service", custom: "Custom Package", other: "Other" } },
  map: { title: "Find Us" }
};

trData.contact = {
  hero: { subtitle: "Bize Ulasin", title: "Iletisim", description: "Sorulariniz mi var? Mukemmel seyahatinizi planlamaniza yardimci olmak icin buradayiz." },
  info: { title: "Iletisim Bilgileri", description: "Asagidaki kanallardan bize ulasabilirsiniz. Calisma saatlerinde genellikle 2 saat icinde yanit veriyoruz.", phone: "Telefon", whatsapp: "WhatsApp", whatsappDesc: "Aninda bizimle sohbet edin", whatsappNote: "Hizli yanitlar, 7/24", email: "E-posta", office: "Ofis" },
  hours: { title: "Calisma Saatleri", weekdays: "Pazartesi - Cuma", saturday: "Cumartesi", sunday: "Pazar", note: "* Acil sorgular icin 7/24 WhatsApp destegi mevcuttur" },
  form: { title: "Bize Mesaj Gonderin", name: "Ad Soyad", email: "E-posta", phone: "Telefon", subject: "Konu", selectSubject: "Bir konu secin", message: "Mesaj", messagePlaceholder: "Seyahat planlarinizi bize anlatın...", submit: "WhatsApp ile Mesaj Gonder", subjects: { yacht: "Yat Kiralama Sorgulama", cabin: "Kabin Kiralama Rezervasyonu", tour: "Gunluk Tur Rezervasyonu", car: "Arac Kiralama", transfer: "Transfer Hizmeti", custom: "Ozel Paket", other: "Diger" } },
  map: { title: "Bizi Bulun" }
};

deData.contact = {
  hero: { subtitle: "Kontakt", title: "Kontaktieren Sie uns", description: "Haben Sie Fragen? Wir helfen Ihnen gerne bei der Planung Ihrer perfekten Reise." },
  info: { title: "Kontaktinformationen", description: "Erreichen Sie uns uber einen der folgenden Kanale. Wir antworten normalerweise innerhalb von 2 Stunden wahrend der Geschaftszeiten.", phone: "Telefon", whatsapp: "WhatsApp", whatsappDesc: "Chatten Sie sofort mit uns", whatsappNote: "Schnelle Antworten, 24/7", email: "E-Mail", office: "Buro" },
  hours: { title: "Offnungszeiten", weekdays: "Montag - Freitag", saturday: "Samstag", sunday: "Sonntag", note: "* WhatsApp-Support 24/7 fur dringende Anfragen verfugbar" },
  form: { title: "Senden Sie uns eine Nachricht", name: "Vollstandiger Name", email: "E-Mail", phone: "Telefon", subject: "Betreff", selectSubject: "Wahlen Sie einen Betreff", message: "Nachricht", messagePlaceholder: "Erzahlen Sie uns von Ihren Reiseplanen...", submit: "Nachricht per WhatsApp senden", subjects: { yacht: "Yachtcharter-Anfrage", cabin: "Kabinencharter-Buchung", tour: "Tagestour-Buchung", car: "Autovermietung", transfer: "Transferservice", custom: "Individuelles Paket", other: "Andere" } },
  map: { title: "Finden Sie uns" }
};

// Tours Page
enData.toursPage = {
  hero: { subtitle: "Explore Turkey", title: "Tours & Excursions", description: "From ancient wonders to thrilling adventures, discover the best of Turkey with our expertly guided tours." },
  tabs: { dayTours: "Day Tours", activities: "Activities", blueCruises: "Blue Cruises" },
  dayTours: { title: "Day Tours", subtitle: "Explore Turkey's most iconic destinations with our guided day tours. All tours include transportation, guide, and entrance fees." },
  activities: { title: "Activities & Adventures", subtitle: "Add some excitement to your vacation with our range of activities, from paragliding over the Blue Lagoon to diving in crystal waters." },
  adventure: "ADVENTURE",
  bookTour: "Book This Tour",
  bookNow: "Book Now",
  whyBook: { title: "Why Book With Light Tours?", bestPrice: { title: "Best Price Guarantee", desc: "We match any comparable offer" }, guides: { title: "Expert Local Guides", desc: "Licensed, multilingual guides" }, transport: { title: "Comfortable Transport", desc: "Modern, air-conditioned vehicles" }, groups: { title: "Small Groups", desc: "Personalized attention" } },
  cta: { title: "Can't Decide? Let Us Help!", subtitle: "Our travel experts can create a custom itinerary based on your interests, time, and budget.", button: "Get Custom Itinerary" }
};

trData.toursPage = {
  hero: { subtitle: "Turkiye'yi Kesfedin", title: "Turlar ve Geziler", description: "Antik harikalardan heyecan verici maceralara, uzman rehberlerimizle Turkiye'nin en iyilerini kesfedin." },
  tabs: { dayTours: "Gunluk Turlar", activities: "Aktiviteler", blueCruises: "Mavi Yolculuklar" },
  dayTours: { title: "Gunluk Turlar", subtitle: "Rehberli gunluk turlarimizla Turkiye'nin en ikonik destinasyonlarini kesfedin. Tum turlar ulasim, rehber ve giris ucretlerini icermektedir." },
  activities: { title: "Aktiviteler ve Maceralar", subtitle: "Mavi Lagün uzerinde yamac parasutu veya kristal sularda dalisten tatile heyecan katin." },
  adventure: "MACERA",
  bookTour: "Bu Turu Rezerve Et",
  bookNow: "Simdi Rezerve Et",
  whyBook: { title: "Neden Light Tours ile Rezervasyon Yapmalisiniz?", bestPrice: { title: "En Iyi Fiyat Garantisi", desc: "Karsilastirabilir her teklifi eslestiriz" }, guides: { title: "Uzman Yerel Rehberler", desc: "Lisansli, cok dilli rehberler" }, transport: { title: "Konforlu Ulasim", desc: "Modern, klimali araclar" }, groups: { title: "Kucuk Gruplar", desc: "Kisisel ilgi" } },
  cta: { title: "Karar Veremiyor musunuz? Yardim Edelim!", subtitle: "Seyahat uzmanlarimiz ilgi alanlariniza, zamaniniza ve butcenize gore ozel bir guzergah olusturabilir.", button: "Ozel Guzergah Alin" }
};

deData.toursPage = {
  hero: { subtitle: "Entdecken Sie die Turkei", title: "Touren & Ausfluge", description: "Von antiken Wundern bis hin zu aufregenden Abenteuern - entdecken Sie das Beste der Turkei mit unseren fachkundig gefuhrten Touren." },
  tabs: { dayTours: "Tagestouren", activities: "Aktivitaten", blueCruises: "Blaue Kreuzfahrten" },
  dayTours: { title: "Tagestouren", subtitle: "Erkunden Sie die ikonischsten Ziele der Turkei mit unseren gefuhrten Tagestouren. Alle Touren beinhalten Transport, Reisefuhrer und Eintrittsgebuhren." },
  activities: { title: "Aktivitaten & Abenteuer", subtitle: "Fugen Sie Ihrem Urlaub Spannung hinzu mit unseren Aktivitaten, vom Gleitschirmfliegen uber die Blaue Lagune bis zum Tauchen in kristallklarem Wasser." },
  adventure: "ABENTEUER",
  bookTour: "Diese Tour buchen",
  bookNow: "Jetzt buchen",
  whyBook: { title: "Warum bei Light Tours buchen?", bestPrice: { title: "Bestpreisgarantie", desc: "Wir matchen jedes vergleichbare Angebot" }, guides: { title: "Erfahrene lokale Guides", desc: "Lizenzierte, mehrsprachige Guides" }, transport: { title: "Komfortabler Transport", desc: "Moderne, klimatisierte Fahrzeuge" }, groups: { title: "Kleine Gruppen", desc: "Personliche Betreuung" } },
  cta: { title: "Konnen Sie sich nicht entscheiden? Wir helfen!", subtitle: "Unsere Reiseexperten konnen eine individuelle Reiseroute basierend auf Ihren Interessen, Zeit und Budget erstellen.", button: "Individuelle Route anfordern" }
};

// Yacht Charter Page
enData.yachtCharter = {
  hero: { subtitle: "Luxury at Sea", title: "Private Yacht Charter", description: "Experience the ultimate in luxury with our private gulet charters. Cruise the stunning Turkish coastline in style." },
  features: { title: "Why Choose Private Charter?", privacy: { title: "Complete Privacy", desc: "The entire yacht is yours" }, flexibility: { title: "Full Flexibility", desc: "Your route, your schedule" }, service: { title: "Personalized Service", desc: "Dedicated crew for your group" }, cuisine: { title: "Gourmet Cuisine", desc: "Chef-prepared meals aboard" } },
  fleet: { title: "Our Fleet", subtitle: "Choose from our selection of traditional gulets and motor yachts" },
  cta: { title: "Ready to Set Sail?", subtitle: "Contact us to customize your perfect yacht charter experience.", button: "Get a Quote" }
};

trData.yachtCharter = {
  hero: { subtitle: "Denizde Luks", title: "Ozel Yat Kiralama", description: "Ozel gulet kiralamalarimizla luksu yasayin. Turkiye kiyilarinda tarzli bir seyahate cikin." },
  features: { title: "Neden Ozel Kiralama?", privacy: { title: "Tam Gizlilik", desc: "Tum yat size ait" }, flexibility: { title: "Tam Esneklik", desc: "Sizin rotaniz, sizin programiniz" }, service: { title: "Kisisel Hizmet", desc: "Grubunuza ozel murettebat" }, cuisine: { title: "Gurme Mutfak", desc: "Sef tarafindan hazirlanan yemekler" } },
  fleet: { title: "Filomuz", subtitle: "Geleneksel guletler ve motor yatlarimiz arasinda secim yapin" },
  cta: { title: "Yelken Acmaya Hazir misiniz?", subtitle: "Mukemmel yat kiralama deneyiminizi ozellestirmek icin bize ulasin.", button: "Teklif Alin" }
};

deData.yachtCharter = {
  hero: { subtitle: "Luxus auf See", title: "Private Yachtcharter", description: "Erleben Sie ultimativen Luxus mit unseren privaten Gulet-Chartern. Kreuzen Sie stilvoll entlang der turkischen Kuste." },
  features: { title: "Warum Private Charter?", privacy: { title: "Vollstandige Privatsphare", desc: "Die gesamte Yacht gehort Ihnen" }, flexibility: { title: "Volle Flexibilitat", desc: "Ihre Route, Ihr Zeitplan" }, service: { title: "Personlicher Service", desc: "Dedizierte Crew fur Ihre Gruppe" }, cuisine: { title: "Gourmet-Kuche", desc: "Vom Chefkoch zubereitete Mahlzeiten" } },
  fleet: { title: "Unsere Flotte", subtitle: "Wahlen Sie aus unserer Auswahl an traditionellen Gulets und Motoryachten" },
  cta: { title: "Bereit zum Ablegen?", subtitle: "Kontaktieren Sie uns, um Ihr perfektes Yachtcharter-Erlebnis zu gestalten.", button: "Angebot anfordern" }
};

// Cabin Charter Page
enData.cabinCharter = {
  hero: { subtitle: "Blue Cruise", title: "Cabin Charter", description: "Join our shared gulet cruises and sail the turquoise coast with fellow travelers. The most affordable way to experience a blue cruise." },
  howItWorks: { title: "How It Works", step1: { title: "Choose Your Route", desc: "Select from our fixed departure routes" }, step2: { title: "Book Your Cabin", desc: "Reserve a cabin for your group" }, step3: { title: "Set Sail", desc: "Join other travelers on your adventure" } },
  routes: { title: "Popular Routes", subtitle: "Our most loved blue cruise routes" },
  included: { title: "What's Included", items: { cabin: "Private cabin with ensuite bathroom", meals: "Full board (breakfast, lunch, dinner)", crew: "Professional captain and crew", fuel: "Fuel and port fees", activities: "Water sports equipment" } },
  cta: { title: "Ready for Adventure?", subtitle: "Book your cabin on our next departure.", button: "View Departures" }
};

trData.cabinCharter = {
  hero: { subtitle: "Mavi Yolculuk", title: "Kabin Kiralama", description: "Paylasmali gulet turlarimiza katilin ve diger gezginlerle turkuaz kiyilarda yelken acin. Mavi yolculuk deneyimlemenin en uygun yolu." },
  howItWorks: { title: "Nasil Calisir", step1: { title: "Rotanizi Secin", desc: "Sabit kalkis rotalarimizdan secim yapin" }, step2: { title: "Kabininizi Rezerve Edin", desc: "Grubunuz icin bir kabin ayirtin" }, step3: { title: "Yelken Acin", desc: "Diger gezginlerle maceraniza katilin" } },
  routes: { title: "Populer Rotalar", subtitle: "En sevilen mavi yolculuk rotalarimiz" },
  included: { title: "Neler Dahil", items: { cabin: "Banyolu ozel kabin", meals: "Tam pansiyon (kahvalti, ogle, aksam yemegi)", crew: "Profesyonel kaptan ve murettebat", fuel: "Yakit ve liman ucretleri", activities: "Su sporlari ekipmani" } },
  cta: { title: "Maceraya Hazir misiniz?", subtitle: "Bir sonraki kalkisimizda kabininizi rezerve edin.", button: "Kalkislari Goruntule" }
};

deData.cabinCharter = {
  hero: { subtitle: "Blaue Kreuzfahrt", title: "Kabinencharter", description: "Nehmen Sie an unseren gemeinsamen Gulet-Kreuzfahrten teil und segeln Sie mit anderen Reisenden entlang der turkisfarbenen Kuste. Die gunstigste Art, eine Blaue Kreuzfahrt zu erleben." },
  howItWorks: { title: "So funktioniert es", step1: { title: "Wahlen Sie Ihre Route", desc: "Wahlen Sie aus unseren festen Abfahrtsrouten" }, step2: { title: "Buchen Sie Ihre Kabine", desc: "Reservieren Sie eine Kabine fur Ihre Gruppe" }, step3: { title: "Legen Sie ab", desc: "Treffen Sie andere Reisende auf Ihrem Abenteuer" } },
  routes: { title: "Beliebte Routen", subtitle: "Unsere beliebtesten Blauen Kreuzfahrtrouten" },
  included: { title: "Was ist inbegriffen", items: { cabin: "Private Kabine mit eigenem Bad", meals: "Vollpension (Fruhstuck, Mittag-, Abendessen)", crew: "Professioneller Kapitan und Crew", fuel: "Kraftstoff und Hafengebuhren", activities: "Wassersportausrustung" } },
  cta: { title: "Bereit fur das Abenteuer?", subtitle: "Buchen Sie Ihre Kabine fur unsere nachste Abfahrt.", button: "Abfahrten anzeigen" }
};

// Car Rental Page
enData.carRental = {
  hero: { subtitle: "Explore Freely", title: "Car Rental", description: "Discover Turkey at your own pace with our reliable car rental service. Wide selection of vehicles for every need." },
  categories: { title: "Our Vehicles", economy: { title: "Economy", desc: "Perfect for city driving" }, compact: { title: "Compact", desc: "Great for couples" }, suv: { title: "SUV", desc: "Ideal for families" }, luxury: { title: "Luxury", desc: "Travel in style" } },
  included: { title: "All Rentals Include", insurance: "Full insurance coverage", unlimited: "Unlimited mileage", support: "24/7 roadside assistance", delivery: "Airport/hotel delivery" },
  cta: { title: "Need a Car?", subtitle: "Contact us for the best rates and availability.", button: "Get a Quote" }
};

trData.carRental = {
  hero: { subtitle: "Ozgurce Kesfedin", title: "Arac Kiralama", description: "Guvenilir arac kiralama hizmetimizle Turkiye'yi kendi hizinizda kesfedin. Her ihtiyaca uygun genis arac secenegi." },
  categories: { title: "Araclarimiz", economy: { title: "Ekonomik", desc: "Sehir ici suruş icin ideal" }, compact: { title: "Kompakt", desc: "Ciftler icin mukemmel" }, suv: { title: "SUV", desc: "Aileler icin ideal" }, luxury: { title: "Luks", desc: "Tarzli seyahat edin" } },
  included: { title: "Tum Kiralamalar Iceriyor", insurance: "Tam sigorta kapsami", unlimited: "Sinirsiz kilometre", support: "7/24 yol yardimi", delivery: "Havaalani/otel teslimi" },
  cta: { title: "Araca mi Ihtiyaciniz Var?", subtitle: "En iyi fiyatlar ve musaitlik icin bize ulasin.", button: "Teklif Alin" }
};

deData.carRental = {
  hero: { subtitle: "Frei Erkunden", title: "Autovermietung", description: "Entdecken Sie die Turkei in Ihrem eigenen Tempo mit unserem zuverlassigen Mietwagenservice. Grosse Fahrzeugauswahl fur jeden Bedarf." },
  categories: { title: "Unsere Fahrzeuge", economy: { title: "Economy", desc: "Perfekt fur Stadtfahrten" }, compact: { title: "Kompakt", desc: "Ideal fur Paare" }, suv: { title: "SUV", desc: "Ideal fur Familien" }, luxury: { title: "Luxus", desc: "Reisen Sie stilvoll" } },
  included: { title: "Alle Mietwagen beinhalten", insurance: "Vollkaskoversicherung", unlimited: "Unbegrenzte Kilometer", support: "24/7 Pannenhilfe", delivery: "Flughafen-/Hotellieferung" },
  cta: { title: "Brauchen Sie ein Auto?", subtitle: "Kontaktieren Sie uns fur die besten Preise und Verfugbarkeit.", button: "Angebot anfordern" }
};

// Transfer Page
enData.transfer = {
  hero: { subtitle: "Comfortable Travel", title: "Transfer Services", description: "Reliable airport and hotel transfer services. Start your holiday stress-free with our professional drivers." },
  services: { title: "Our Services", airport: { title: "Airport Transfers", desc: "To/from Dalaman and Antalya airports" }, hotel: { title: "Hotel Transfers", desc: "Between hotels and attractions" }, vip: { title: "VIP Service", desc: "Luxury vehicles with premium amenities" }, group: { title: "Group Transfers", desc: "Comfortable minibuses for larger groups" } },
  vehicles: { title: "Our Vehicles", sedan: "Sedan (1-3 passengers)", minivan: "Minivan (4-7 passengers)", minibus: "Minibus (8-15 passengers)", bus: "Bus (16+ passengers)" },
  cta: { title: "Book Your Transfer", subtitle: "Reliable, on-time service guaranteed.", button: "Get a Quote" }
};

trData.transfer = {
  hero: { subtitle: "Konforlu Seyahat", title: "Transfer Hizmetleri", description: "Guvenilir havaalani ve otel transfer hizmetleri. Profesyonel soforlerimizle tatilinize stressi baslatin." },
  services: { title: "Hizmetlerimiz", airport: { title: "Havaalani Transferleri", desc: "Dalaman ve Antalya havaalanlarina" }, hotel: { title: "Otel Transferleri", desc: "Oteller ve turistik yerler arasi" }, vip: { title: "VIP Hizmet", desc: "Premium olanaklara sahip luks araclar" }, group: { title: "Grup Transferleri", desc: "Buyuk gruplar icin konforlu minibuşler" } },
  vehicles: { title: "Araclarimiz", sedan: "Sedan (1-3 yolcu)", minivan: "Minivan (4-7 yolcu)", minibus: "Minibu (8-15 yolcu)", bus: "Otobus (16+ yolcu)" },
  cta: { title: "Transferinizi Rezerve Edin", subtitle: "Guvenilir, zamaninda hizmet garantisi.", button: "Teklif Alin" }
};

deData.transfer = {
  hero: { subtitle: "Komfortables Reisen", title: "Transferdienste", description: "Zuverlassige Flughafen- und Hoteltransferdienste. Starten Sie Ihren Urlaub stressfrei mit unseren professionellen Fahrern." },
  services: { title: "Unsere Dienstleistungen", airport: { title: "Flughafentransfers", desc: "Zu/von Flughafen Dalaman und Antalya" }, hotel: { title: "Hoteltransfers", desc: "Zwischen Hotels und Sehenswurdigkeiten" }, vip: { title: "VIP-Service", desc: "Luxusfahrzeuge mit Premium-Ausstattung" }, group: { title: "Gruppentransfers", desc: "Komfortable Minibusse fur grossere Gruppen" } },
  vehicles: { title: "Unsere Fahrzeuge", sedan: "Limousine (1-3 Passagiere)", minivan: "Minivan (4-7 Passagiere)", minibus: "Minibus (8-15 Passagiere)", bus: "Bus (16+ Passagiere)" },
  cta: { title: "Buchen Sie Ihren Transfer", subtitle: "Zuverlassiger, punktlicher Service garantiert.", button: "Angebot anfordern" }
};

// FAQ Page
enData.faq = {
  hero: { subtitle: "Help Center", title: "Frequently Asked Questions", description: "Find answers to common questions about our services." },
  categories: { general: "General", booking: "Booking & Payment", yachts: "Yacht Charters", tours: "Tours & Activities" },
  cta: { title: "Still Have Questions?", subtitle: "Our team is here to help you 24/7.", button: "Contact Us" }
};

trData.faq = {
  hero: { subtitle: "Yardim Merkezi", title: "Sikca Sorulan Sorular", description: "Hizmetlerimiz hakkinda sik sorulan sorularin yanitlarini bulun." },
  categories: { general: "Genel", booking: "Rezervasyon ve Odeme", yachts: "Yat Kiralamalari", tours: "Turlar ve Aktiviteler" },
  cta: { title: "Hala Sorulariniz mi Var?", subtitle: "Ekibimiz 7/24 size yardimci olmak icin burada.", button: "Bize Ulasin" }
};

deData.faq = {
  hero: { subtitle: "Hilfezentrum", title: "Haufig gestellte Fragen", description: "Finden Sie Antworten auf haufige Fragen zu unseren Dienstleistungen." },
  categories: { general: "Allgemein", booking: "Buchung & Zahlung", yachts: "Yachtcharter", tours: "Touren & Aktivitaten" },
  cta: { title: "Noch Fragen?", subtitle: "Unser Team ist 24/7 fur Sie da.", button: "Kontaktieren Sie uns" }
};

// Legal Pages
enData.privacy = { title: "Privacy Policy", lastUpdated: "Last updated: {date}" };
trData.privacy = { title: "Gizlilik Politikasi", lastUpdated: "Son güncelleme: {date}" };
deData.privacy = { title: "Datenschutz", lastUpdated: "Zuletzt aktualisiert: {date}" };

enData.terms = { title: "Terms of Service", lastUpdated: "Last updated: {date}" };
trData.terms = { title: "Kullanim Sartlari", lastUpdated: "Son güncelleme: {date}" };
deData.terms = { title: "Nutzungsbedingungen", lastUpdated: "Zuletzt aktualisiert: {date}" };

enData.cookies = { title: "Cookie Policy", lastUpdated: "Last updated: {date}" };
trData.cookies = { title: "Cerez Politikasi", lastUpdated: "Son güncelleme: {date}" };
deData.cookies = { title: "Cookie-Richtlinie", lastUpdated: "Zuletzt aktualisiert: {date}" };

// Blog Page
enData.blog = {
  hero: { subtitle: "Travel Inspiration", title: "Our Blog", description: "Discover travel tips, destination guides, and stories from the Turkish coast." },
  readMore: "Read More",
  categories: { all: "All", destinations: "Destinations", tips: "Travel Tips", stories: "Stories" }
};

trData.blog = {
  hero: { subtitle: "Seyahat Ilhami", title: "Blogumuz", description: "Seyahat ipuclari, destinasyon rehberleri ve Turk kiyilarindan hikayeler kesfedin." },
  readMore: "Devami",
  categories: { all: "Tumu", destinations: "Destinasyonlar", tips: "Seyahat Ipuclari", stories: "Hikayeler" }
};

deData.blog = {
  hero: { subtitle: "Reiseinspiration", title: "Unser Blog", description: "Entdecken Sie Reisetipps, Reisefuhrer und Geschichten von der turkischen Kuste." },
  readMore: "Weiterlesen",
  categories: { all: "Alle", destinations: "Reiseziele", tips: "Reisetipps", stories: "Geschichten" }
};

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
fs.writeFileSync(dePath, JSON.stringify(deData, null, 2));

console.log('All page translations added successfully!');
