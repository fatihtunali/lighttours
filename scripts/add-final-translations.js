const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'messages');

const translations = {
  en: {
    faq: {
      hero: {
        subtitle: "Help Center",
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our services, bookings, and travel in Turkey."
      },
      categories: {
        booking: {
          title: "Booking & Payment",
          questions: [
            { q: "How do I book a tour or yacht charter?", a: "You can book directly through our website by filling out the quote form, or contact us via WhatsApp, email, or phone. We'll respond within 2 hours with availability and pricing." },
            { q: "What payment methods do you accept?", a: "We accept credit cards (Visa, Mastercard), bank transfers, and cash payments. A 30% deposit is required to confirm your booking, with the balance due before departure." },
            { q: "What is your cancellation policy?", a: "Free cancellation up to 14 days before departure for full refund. 7-14 days: 50% refund. Less than 7 days: no refund. We recommend travel insurance for added protection." },
            { q: "Can I modify my booking?", a: "Yes, modifications can be made subject to availability. Please contact us as early as possible. Changes within 7 days of departure may incur additional fees." }
          ]
        },
        yachtCharter: {
          title: "Yacht Charter",
          questions: [
            { q: "What's included in a yacht charter?", a: "Private charters include the yacht, crew (captain, cook, deckhands), all meals, fuel, port fees, water sports equipment, and bedding. Alcoholic beverages are typically extra." },
            { q: "Do I need sailing experience?", a: "No! Our yachts come with professional crew who handle all sailing. You're free to relax, swim, and enjoy the journey." },
            { q: "What should I pack for a yacht trip?", a: "Pack light, casual clothing, swimwear, sunscreen, hat, and soft-soled shoes for the boat. We provide towels, snorkeling gear, and basic toiletries." },
            { q: "Can the itinerary be customized?", a: "Absolutely! Private charters offer full flexibility. Discuss your preferences with us and we'll create a personalized route based on weather and your interests." }
          ]
        },
        cabinCharter: {
          title: "Cabin Charter",
          questions: [
            { q: "What's the difference between cabin and yacht charter?", a: "Cabin charter means you book individual cabins and share the boat with other travelers. It's more affordable and a great way to meet people. Yacht charter is private - you rent the entire boat." },
            { q: "Who will I share the boat with?", a: "Cabin charters typically host 8-16 guests from various countries. It's a social experience perfect for solo travelers or couples who enjoy meeting new people." },
            { q: "Are meals included in cabin charter?", a: "Yes, all cabin charters are full-board including breakfast, lunch, and dinner prepared by our onboard chef. Special dietary requirements can be accommodated with advance notice." }
          ]
        },
        dayTours: {
          title: "Day Tours",
          questions: [
            { q: "What's included in day tours?", a: "All day tours include hotel pickup/drop-off, transportation, professional guide, entrance fees, and lunch (where specified). Check individual tour descriptions for specifics." },
            { q: "What languages are tours available in?", a: "Our guides speak English, German, Russian, and Turkish. Other languages may be available on request with advance notice." },
            { q: "Are tours suitable for children?", a: "Most tours are family-friendly. Some activities like paragliding have age restrictions. Contact us for specific tour requirements." }
          ]
        },
        transfers: {
          title: "Transfers & Car Rental",
          questions: [
            { q: "Do you track flights for airport transfers?", a: "Yes, we monitor all incoming flights. If your flight is delayed, your driver will adjust accordingly at no extra charge." },
            { q: "What documents do I need to rent a car?", a: "You'll need a valid driving license (held for minimum 2 years), passport or ID, and a credit card for the security deposit. Minimum age is 21." },
            { q: "Is insurance included with car rental?", a: "Yes, all rentals include comprehensive insurance (CDW) and third-party liability. Optional extras like GPS and child seats are available." }
          ]
        }
      },
      cta: {
        title: "Still Have Questions?",
        subtitle: "Our team is ready to help you with any questions about your upcoming trip.",
        contact: "Contact Us",
        whatsapp: "WhatsApp Us"
      }
    },
    blog: {
      hero: {
        subtitle: "Travel Blog",
        title: "Travel Tips & Inspiration",
        description: "Discover insider tips, destination guides, and travel inspiration for your Turkish adventure."
      },
      categories: {
        all: "All",
        travelGuide: "Travel Guide",
        tours: "Tours",
        yachtCharter: "Yacht Charter",
        activities: "Activities",
        dayTrips: "Day Trips",
        foodCulture: "Food & Culture"
      },
      featured: "Featured",
      minRead: "min read",
      comingSoon: "Coming Soon",
      loadMore: "Load More Articles",
      posts: {
        "best-time-visit-fethiye": {
          title: "Best Time to Visit Fethiye: A Season-by-Season Guide",
          excerpt: "Discover when to visit Fethiye for the perfect weather, fewer crowds, and the best experiences.",
          date: "November 28, 2024"
        },
        "12-islands-tour-guide": {
          title: "12 Islands Boat Tour: Everything You Need to Know",
          excerpt: "The ultimate guide to Fethiye's famous 12 Islands boat tour. What to expect and insider tips.",
          date: "November 25, 2024"
        },
        "blue-cruise-vs-yacht-charter": {
          title: "Blue Cruise vs Yacht Charter: Which is Right for You?",
          excerpt: "Cabin charter or private yacht? We break down the differences and costs.",
          date: "November 20, 2024"
        },
        "paragliding-oludeniz": {
          title: "Paragliding in Oludeniz: A Complete Guide",
          excerpt: "Soar over the famous Blue Lagoon from Babadag mountain.",
          date: "November 15, 2024"
        },
        "dalyan-mud-baths": {
          title: "Dalyan Day Trip: Rock Tombs, Turtles & Mud Baths",
          excerpt: "Explore the ancient Lycian rock tombs and swim with Caretta Caretta turtles.",
          date: "November 10, 2024"
        },
        "turkish-cuisine-fethiye": {
          title: "10 Must-Try Turkish Foods in Fethiye",
          excerpt: "From fresh seafood to traditional kebabs, discover the best local dishes.",
          date: "November 5, 2024"
        }
      },
      newsletter: {
        title: "Subscribe to Our Newsletter",
        subtitle: "Get travel tips, special offers, and destination inspiration delivered to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe"
      }
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: November 2024",
      phone: "Phone",
      sections: {
        collect: {
          title: "1. Information We Collect",
          intro: "Light Tours Travel Agency collects information you provide directly to us, including:",
          items: ["Name, email address, phone number", "Billing and payment information", "Travel preferences and booking details", "Communications with us"]
        },
        use: {
          title: "2. How We Use Your Information",
          intro: "We use the information we collect to:",
          items: ["Process and manage your bookings", "Send booking confirmations and updates", "Respond to your inquiries", "Send promotional communications (with your consent)", "Improve our services"]
        },
        sharing: {
          title: "3. Information Sharing",
          content: "We may share your information with third parties only as necessary to provide our services, including hotels, airlines, tour operators, and payment processors. We do not sell your personal information."
        },
        security: {
          title: "4. Data Security",
          content: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure."
        },
        rights: {
          title: "5. Your Rights",
          intro: "You have the right to:",
          items: ["Access your personal data", "Correct inaccurate data", "Request deletion of your data", "Opt-out of marketing communications"]
        },
        cookies: {
          title: "6. Cookies",
          content: "Our website uses cookies to enhance your browsing experience. See our Cookie Policy for more details."
        },
        contact: {
          title: "7. Contact Us",
          intro: "If you have questions about this Privacy Policy, please contact us at:"
        }
      }
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: November 2024",
      phone: "Phone",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          content: "By accessing or using Light Tours Travel Agency services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services."
        },
        booking: {
          title: "2. Booking and Payment",
          items: ["A 30% deposit is required to confirm bookings", "Full payment is due before the departure date", "Prices are subject to change until booking is confirmed", "All prices are in EUR unless otherwise stated"]
        },
        cancellation: {
          title: "3. Cancellation Policy",
          items: ["14+ days before departure: Full refund minus processing fees", "7-14 days before departure: 50% refund", "Less than 7 days: No refund", "No-shows: No refund"]
        },
        insurance: {
          title: "4. Travel Insurance",
          content: "We strongly recommend purchasing comprehensive travel insurance that covers cancellation, medical expenses, and personal belongings. Light Tours is not responsible for losses not covered by insurance."
        },
        liability: {
          title: "5. Liability",
          content: "Light Tours acts as an agent for transportation, accommodation, and activity providers. We are not liable for injury, damage, loss, or delay caused by these third parties, weather conditions, or circumstances beyond our control."
        },
        yachtTerms: {
          title: "6. Yacht Charter Terms",
          items: ["Security deposit required (refundable upon inspection)", "Guests must follow captain's safety instructions", "Itinerary may change due to weather conditions", "Maximum capacity must be respected"]
        },
        carTerms: {
          title: "7. Car Rental Terms",
          items: ["Minimum age: 21 years with 2+ years driving experience", "Valid driving license and credit card required", "Full-to-full fuel policy", "Damage must be reported immediately"]
        },
        changes: {
          title: "8. Changes to Terms",
          content: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms."
        },
        contact: { title: "9. Contact Information" }
      }
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: November 2024",
      phone: "Phone",
      sections: {
        what: {
          title: "What Are Cookies?",
          content: "Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience and understand how you use our site."
        },
        types: {
          title: "Types of Cookies We Use",
          essential: { title: "Essential Cookies", content: "These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas." },
          analytics: { title: "Analytics Cookies", content: "We use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience." },
          marketing: { title: "Marketing Cookies", content: "These cookies track your online activity to help us deliver more relevant advertising. They may be set by our advertising partners." },
          functional: { title: "Functional Cookies", content: "These cookies remember your preferences (like language) to provide enhanced features." }
        },
        managing: {
          title: "Managing Cookies",
          intro: "You can control cookies through your browser settings:",
          browsers: ["Chrome: Settings > Privacy and Security > Cookies", "Firefox: Options > Privacy & Security > Cookies", "Safari: Preferences > Privacy > Cookies", "Edge: Settings > Privacy > Cookies"],
          note: "Note: Disabling cookies may affect your experience on our website."
        },
        thirdParty: {
          title: "Third-Party Cookies",
          intro: "Our website may contain cookies from third-party services including:",
          services: ["Google Analytics (analytics)", "Google Maps (functionality)", "Facebook Pixel (marketing)", "Tawk.to (live chat)"]
        },
        updates: {
          title: "Updates to This Policy",
          content: "We may update this Cookie Policy from time to time. The latest version will always be available on this page."
        },
        contact: {
          title: "Contact Us",
          intro: "If you have questions about our use of cookies:"
        }
      }
    }
  },
  tr: {
    faq: {
      hero: {
        subtitle: "Yardim Merkezi",
        title: "Sikca Sorulan Sorular",
        description: "Hizmetlerimiz, rezervasyonlar ve Turkiye seyahati hakkinda sik sorulan sorularin yanitlarini bulun."
      },
      categories: {
        booking: {
          title: "Rezervasyon ve Odeme",
          questions: [
            { q: "Nasil tur veya yat kiralama rezervasyonu yapabilirim?", a: "Web sitemizden teklif formunu doldurarak veya WhatsApp, e-posta ya da telefon ile iletisime gecerek rezervasyon yapabilirsiniz. 2 saat icinde musaitlik ve fiyat bilgisiyle donecegiz." },
            { q: "Hangi odeme yontemlerini kabul ediyorsunuz?", a: "Kredi karti (Visa, Mastercard), banka havalesi ve nakit odeme kabul ediyoruz. Rezervasyonu onaylamak icin %30 depozito gereklidir, kalan tutar kalkistan once odenir." },
            { q: "Iptal politikaniz nedir?", a: "Kalkistan 14 gun oncesine kadar ucretsiz iptal ile tam iade. 7-14 gun: %50 iade. 7 gundan az: iade yok. Ek koruma icin seyahat sigortasi onerilir." },
            { q: "Rezervasyonumu degistirebilir miyim?", a: "Evet, musaitlige bagli olarak degisiklik yapilabilir. Lutfen mumkun olan en kisa surede bizimle iletisime gecin. Kalkistan 7 gun icindeki degisiklikler ek ucrete tabi olabilir." }
          ]
        },
        yachtCharter: {
          title: "Yat Kiralama",
          questions: [
            { q: "Yat kiralamasina neler dahil?", a: "Ozel kiralamalar; yat, murettebat (kaptan, asci, tayfalar), tum ogunler, yakit, liman ucretleri, su sporlari ekipmanlari ve nevresim takimi icerir. Alkollu ickiler genellikle ekstra ucretlidir." },
            { q: "Yelken deneyimim olmasi gerekiyor mu?", a: "Hayir! Yatlarimizda tum yelken islerini halleren profesyonel murettebat bulunur. Rahatlayabilir, yuzebilir ve yolculugun tadini cikarabilirsiniz." },
            { q: "Yat gezisi icin ne paketlemeliyim?", a: "Hafif, rahat giysiler, mayo, gunes kremi, sapka ve tekne icin yumusak tabanli ayakkabi paketleyin. Havlu, snorkel ekipmani ve temel tuvalet malzemelerini biz sagliyoruz." },
            { q: "Rota ozellestirilebilir mi?", a: "Kesinlikle! Ozel kiralamalar tam esneklik sunar. Tercihlerinizi bizimle paylasın ve hava durumu ile ilgi alanlariniza gore kisisellestirilmis bir rota olusturalim." }
          ]
        },
        cabinCharter: {
          title: "Kabin Kiralama",
          questions: [
            { q: "Kabin ve yat kiralama arasindaki fark nedir?", a: "Kabin kiralama, bireysel kabin kiralayip tekneyi diger yolcularla paylastiginiz anlamina gelir. Daha uygun fiyatli ve insanlarla tanismak icin harika bir yoldur. Yat kiralama ozeldir - tum tekneyi kiralarsiniz." },
            { q: "Tekneyi kimlerle paylasacagim?", a: "Kabin kiralamalarinda genellikle cesitli ulkelerden 8-16 misafir bulunur. Yeni insanlarla tanismayi seven yalniz gezginler veya ciftler icin mukemmel bir sosyal deneyimdir." },
            { q: "Kabin kiralamasina yemekler dahil mi?", a: "Evet, tum kabin kiralamalari gemideki sefimiz tarafindan hazirlanan kahvalti, ogle ve aksam yemegi dahil tam pansiyondur. Ozel diyet gereksinimleri onceden bildirilirse karsilanabilir." }
          ]
        },
        dayTours: {
          title: "Gunluk Turlar",
          questions: [
            { q: "Gunluk turlara neler dahil?", a: "Tum gunluk turlara otel transferi, ulasim, profesyonel rehber, giris ucretleri ve ogle yemegi (belirtilmisse) dahildir. Ayrintilar icin tur aciklamalarini kontrol edin." },
            { q: "Turlar hangi dillerde mevcut?", a: "Rehberlerimiz Ingilizce, Almanca, Rusca ve Turkce konusuyor. Diger diller onceden bildirilmesi halinde talep uzerine mevcut olabilir." },
            { q: "Turlar cocuklar icin uygun mu?", a: "Cogu tur aile dostudur. Yamaç parasutü gibi bazi aktivitelerin yas sinirlamasi vardir. Ozel tur gereksinimleri icin bizimle iletisime gecin." }
          ]
        },
        transfers: {
          title: "Transfer ve Arac Kiralama",
          questions: [
            { q: "Havaalani transferleri icin ucuslari takip ediyor musunuz?", a: "Evet, tum gelen ucuslari izliyoruz. Ucusunuz gecikirse, soforunuz buna gore ek ucret olmadan ayarlama yapar." },
            { q: "Arac kiralamak icin hangi belgelere ihtiyacim var?", a: "Gecerli bir ehliyet (en az 2 yillik), pasaport veya kimlik ve depozito icin kredi karti gereklidir. Minimum yas 21'dir." },
            { q: "Arac kiralamaya sigorta dahil mi?", a: "Evet, tum kiralamalara kapsamli sigorta (CDW) ve ucuncu sahis sorumlulugu dahildir. GPS ve cocuk koltugu gibi opsiyonel ekstralar mevcuttur." }
          ]
        }
      },
      cta: {
        title: "Hala Sorulariniz mi Var?",
        subtitle: "Ekibimiz yaklaşan seyahatinizle ilgili her turlu soruda size yardimci olmaya hazir.",
        contact: "Bize Ulasin",
        whatsapp: "WhatsApp ile Yazin"
      }
    },
    blog: {
      hero: {
        subtitle: "Seyahat Blogu",
        title: "Seyahat Ipuclari ve Ilham",
        description: "Turkiye maceraniz icin ici ipuclari, destinasyon rehberleri ve seyahat ilhami kesfin."
      },
      categories: {
        all: "Tumu",
        travelGuide: "Seyahat Rehberi",
        tours: "Turlar",
        yachtCharter: "Yat Kiralama",
        activities: "Aktiviteler",
        dayTrips: "Gunluk Geziler",
        foodCulture: "Yemek ve Kultur"
      },
      featured: "One Cikan",
      minRead: "dk okuma",
      comingSoon: "Cok Yakinda",
      loadMore: "Daha Fazla Yukle",
      posts: {
        "best-time-visit-fethiye": {
          title: "Fethiye'yi Ziyaret Etmek Icin En Iyi Zaman: Mevsimlik Rehber",
          excerpt: "Mukemmel hava, daha az kalabalik ve en iyi deneyimler icin Fethiye'yi ne zaman ziyaret etmeniz gerektigini kesfin.",
          date: "28 Kasim 2024"
        },
        "12-islands-tour-guide": {
          title: "12 Adalar Tekne Turu: Bilmeniz Gereken Her Sey",
          excerpt: "Fethiye'nin unlu 12 Adalar tekne turu icin kesin rehber. Ne bekleyeceginiz ve ici ipuclari.",
          date: "25 Kasim 2024"
        },
        "blue-cruise-vs-yacht-charter": {
          title: "Mavi Yolculuk vs Yat Kiralama: Hangisi Size Uygun?",
          excerpt: "Kabin kiralama mi ozel yat mi? Farkliliklari ve maliyetleri inceliyoruz.",
          date: "20 Kasim 2024"
        },
        "paragliding-oludeniz": {
          title: "Oludeniz'de Yamac Parasutu: Eksiksiz Rehber",
          excerpt: "Babadag'dan unlu Mavi Lagün üzerinde suzulun.",
          date: "15 Kasim 2024"
        },
        "dalyan-mud-baths": {
          title: "Dalyan Gunluk Gezi: Kaya Mezarlari, Kaplumbagalar ve Camur Banyolari",
          excerpt: "Antik Likya kaya mezarlarini kesfin ve Caretta Caretta kaplumbagalariyla yuzun.",
          date: "10 Kasim 2024"
        },
        "turkish-cuisine-fethiye": {
          title: "Fethiye'de Denemeniz Gereken 10 Turk Yemegi",
          excerpt: "Taze deniz urunlerinden geleneksel kebaplara, en iyi yerel lezzetleri kesfin.",
          date: "5 Kasim 2024"
        }
      },
      newsletter: {
        title: "Bultenimize Abone Olun",
        subtitle: "Seyahat ipuclari, özel teklifler ve destinasyon ilhami e-postaniza gelsin.",
        placeholder: "E-posta adresinizi girin",
        button: "Abone Ol"
      }
    },
    privacy: {
      title: "Gizlilik Politikasi",
      lastUpdated: "Son guncelleme: Kasim 2024",
      phone: "Telefon",
      sections: {
        collect: {
          title: "1. Topladigimiz Bilgiler",
          intro: "Light Tours Seyahat Acentesi, bize dogrudan sagladiginiz bilgileri toplar:",
          items: ["Ad, e-posta adresi, telefon numarasi", "Fatura ve odeme bilgileri", "Seyahat tercihleri ve rezervasyon detaylari", "Bizimle iletisimleriniz"]
        },
        use: {
          title: "2. Bilgilerinizi Nasil Kullaniyoruz",
          intro: "Topladigimiz bilgileri su amaclarla kullaniriz:",
          items: ["Rezervasyonlarinizi islemek ve yonetmek", "Rezervasyon onaylari ve guncellemeler gondermek", "Sorulariniza yanit vermek", "Promosyon iletisimleri gondermek (izninizle)", "Hizmetlerimizi iyilestirmek"]
        },
        sharing: {
          title: "3. Bilgi Paylasimi",
          content: "Bilgilerinizi yalnizca hizmetlerimizi sunmak icin gerekli oldugunda, oteller, hava yollari, tur operatorleri ve odeme islemcileri dahil ucuncu taraflarla paylasabiliriz. Kisisel bilgilerinizi satmiyoruz."
        },
        security: {
          title: "4. Veri Guvenligi",
          content: "Kisisel bilgilerinizi korumak icin uygun guvenlik onlemleri uyguluyoruz. Ancak, internet uzerinden iletim yontemi %100 guvenli degildir."
        },
        rights: {
          title: "5. Haklariniz",
          intro: "Su haklara sahipsiniz:",
          items: ["Kisisel verilerinize erisim", "Hatali verileri duzeltme", "Verilerinizin silinmesini talep etme", "Pazarlama iletisimlerinden cikma"]
        },
        cookies: {
          title: "6. Cerezler",
          content: "Web sitemiz tarama deneyiminizi gelistirmek icin cerezler kullanir. Daha fazla bilgi icin Cerez Politikamiza bakin."
        },
        contact: {
          title: "7. Bize Ulasin",
          intro: "Bu Gizlilik Politikasi hakkinda sorulariniz varsa, lutfen bize ulasin:"
        }
      }
    },
    terms: {
      title: "Kullanim Kosullari",
      lastUpdated: "Son guncelleme: Kasim 2024",
      phone: "Telefon",
      sections: {
        acceptance: {
          title: "1. Kosullarin Kabulu",
          content: "Light Tours Seyahat Acentesi hizmetlerine eriserek veya kullanarak bu Kullanim Kosullarina bagli olmayi kabul edersiniz. Kabul etmiyorsaniz, lutfen hizmetlerimizi kullanmayin."
        },
        booking: {
          title: "2. Rezervasyon ve Odeme",
          items: ["Rezervasyonu onaylamak icin %30 depozito gereklidir", "Tam odeme kalkis tarihinden once yapilmalidir", "Fiyatlar rezervasyon onaylanana kadar degisebilir", "Tum fiyatlar aksi belirtilmedikce EUR cinsindendir"]
        },
        cancellation: {
          title: "3. Iptal Politikasi",
          items: ["Kalkistan 14+ gun once: Islem ucreti haric tam iade", "Kalkistan 7-14 gun once: %50 iade", "7 gundan az: Iade yok", "Gelmeme: Iade yok"]
        },
        insurance: {
          title: "4. Seyahat Sigortasi",
          content: "Iptal, tibbi masraflar ve kisisel esyalari kapsayan kapsamli seyahat sigortasi yaptirmanizi siddetle oneririz. Light Tours, sigorta kapsaminda olmayan kayiplardan sorumlu degildir."
        },
        liability: {
          title: "5. Sorumluluk",
          content: "Light Tours, ulasim, konaklama ve aktivite saglayicilari icin acente olarak hareket eder. Bu ucuncu taraflar, hava kosullari veya kontrolumuz disindaki durumlardan kaynaklanan yaralanma, hasar, kayip veya gecikmelerden sorumlu degiliz."
        },
        yachtTerms: {
          title: "6. Yat Kiralama Kosullari",
          items: ["Guvenlik depozitosu gereklidir (inceleme sonrasi iade)", "Misafirler kaptanin guvenlik talimatlarına uymalıdır", "Rota hava kosullarina gore degisebilir", "Maksimum kapasite asklamalidir"]
        },
        carTerms: {
          title: "7. Arac Kiralama Kosullari",
          items: ["Minimum yas: 2+ yil suruculuk deneyimiyle 21 yas", "Gecerli surucu belgesi ve kredi karti gereklidir", "Dolu-dolu yakit politikasi", "Hasar derhal bildirilmelidir"]
        },
        changes: {
          title: "8. Kosullardaki Degisiklikler",
          content: "Bu kosullari istedigimiz zaman degistirme hakkini sakli tutuyoruz. Hizmetlerimizi kullanmaya devam etmeniz, guncellenmis kosullarin kabulü anlamina gelir."
        },
        contact: { title: "9. Iletisim Bilgileri" }
      }
    },
    cookies: {
      title: "Cerez Politikasi",
      lastUpdated: "Son guncelleme: Kasim 2024",
      phone: "Telefon",
      sections: {
        what: {
          title: "Cerezler Nedir?",
          content: "Cerezler, web sitemizi ziyaret ettiginizde cihazinizda depolanan kucuk metin dosyalaridir. Daha iyi bir tarama deneyimi sunmamiza ve sitemizi nasil kullandiginizi anlamamiza yardimci olurlar."
        },
        types: {
          title: "Kullandigimiz Cerez Turleri",
          essential: { title: "Zorunlu Cerezler", content: "Bu cerezler web sitesinin duzgun calisması icin gereklidir. Sayfa gezintisi ve guvenli alanlara erisim gibi temel ozellikleri etkinlestirir." },
          analytics: { title: "Analitik Cerezler", content: "Ziyaretcilerin web sitemizle nasil etkilestigini anlamak icin Google Analytics kullaniyoruz. Bu, icerigimizi ve kullanici deneyimini iyilestirmemize yardimci olur." },
          marketing: { title: "Pazarlama Cerezleri", content: "Bu cerezler, daha alakali reklamlar sunmamiza yardimci olmak icin cevrimici aktivitenizi izler. Reklam ortaklarimiz tarafindan ayarlanabilir." },
          functional: { title: "Islevsel Cerezler", content: "Bu cerezler, gelistirilmis ozellikler saglamak icin tercihlerinizi (dil gibi) hatirlar." }
        },
        managing: {
          title: "Cerezleri Yonetme",
          intro: "Cerezleri tarayici ayarlarinizdan kontrol edebilirsiniz:",
          browsers: ["Chrome: Ayarlar > Gizlilik ve Guvenlik > Cerezler", "Firefox: Secenekler > Gizlilik ve Guvenlik > Cerezler", "Safari: Tercihler > Gizlilik > Cerezler", "Edge: Ayarlar > Gizlilik > Cerezler"],
          note: "Not: Cerezleri devre disi birakmak web sitemizdeki deneyiminizi etkileyebilir."
        },
        thirdParty: {
          title: "Ucuncu Taraf Cerezleri",
          intro: "Web sitemiz asagidaki ucuncu taraf hizmetlerinden cerezler icerebilir:",
          services: ["Google Analytics (analitik)", "Google Maps (islevsellik)", "Facebook Pixel (pazarlama)", "Tawk.to (canli sohbet)"]
        },
        updates: {
          title: "Bu Politikadaki Guncellemeler",
          content: "Bu Cerez Politikasini zaman zaman guncelleyebiliriz. En son surum her zaman bu sayfada mevcut olacaktir."
        },
        contact: {
          title: "Bize Ulasin",
          intro: "Cerez kullanimımiz hakkinda sorulariniz varsa:"
        }
      }
    }
  },
  de: {
    faq: {
      hero: {
        subtitle: "Hilfezentrum",
        title: "Haufig gestellte Fragen",
        description: "Finden Sie Antworten auf haufige Fragen zu unseren Dienstleistungen, Buchungen und Reisen in der Turkei."
      },
      categories: {
        booking: {
          title: "Buchung & Zahlung",
          questions: [
            { q: "Wie buche ich eine Tour oder Yachtcharter?", a: "Sie konnen direkt uber unsere Website buchen, indem Sie das Angebotsformular ausfullen, oder kontaktieren Sie uns uber WhatsApp, E-Mail oder Telefon. Wir antworten innerhalb von 2 Stunden mit Verfugbarkeit und Preisen." },
            { q: "Welche Zahlungsmethoden akzeptieren Sie?", a: "Wir akzeptieren Kreditkarten (Visa, Mastercard), Banküberweisungen und Barzahlung. Eine Anzahlung von 30% ist erforderlich, um Ihre Buchung zu bestatigen, der Restbetrag ist vor der Abreise fallig." },
            { q: "Was ist Ihre Stornierungsrichtlinie?", a: "Kostenlose Stornierung bis 14 Tage vor Abreise für volle Ruckerstattung. 7-14 Tage: 50% Ruckerstattung. Weniger als 7 Tage: keine Ruckerstattung. Wir empfehlen eine Reiseversicherung für zusatzlichen Schutz." },
            { q: "Kann ich meine Buchung andern?", a: "Ja, Anderungen konnen je nach Verfugbarkeit vorgenommen werden. Bitte kontaktieren Sie uns so früh wie moglich. Anderungen innerhalb von 7 Tagen vor Abreise konnen zusatzliche Gebühren verursachen." }
          ]
        },
        yachtCharter: {
          title: "Yachtcharter",
          questions: [
            { q: "Was ist bei einer Yachtcharter inbegriffen?", a: "Private Charters beinhalten die Yacht, Crew (Kapitan, Koch, Deckhands), alle Mahlzeiten, Kraftstoff, Hafengebühren, Wassersportausrüstung und Bettwasche. Alkoholische Getranke sind normalerweise extra." },
            { q: "Brauche ich Segelerfahrung?", a: "Nein! Unsere Yachten kommen mit professioneller Crew, die das gesamte Segeln übernimmt. Sie konnen sich entspannen, schwimmen und die Reise geniessen." },
            { q: "Was sollte ich für eine Yachtreise einpacken?", a: "Packen Sie leichte, lockere Kleidung, Badebekleidung, Sonnencreme, Hut und weiche Schuhe für das Boot ein. Wir stellen Handtücher, Schnorchelausrüstung und grundlegende Toilettenartikel bereit." },
            { q: "Kann die Route angepasst werden?", a: "Absolut! Private Charters bieten volle Flexibilitat. Besprechen Sie Ihre Vorlieben mit uns und wir erstellen eine personalisierte Route basierend auf Wetter und Ihren Interessen." }
          ]
        },
        cabinCharter: {
          title: "Kabinencharter",
          questions: [
            { q: "Was ist der Unterschied zwischen Kabinen- und Yachtcharter?", a: "Kabinencharter bedeutet, dass Sie einzelne Kabinen buchen und das Boot mit anderen Reisenden teilen. Es ist günstiger und eine gute Moglichkeit, Leute kennenzulernen. Yachtcharter ist privat - Sie mieten das gesamte Boot." },
            { q: "Mit wem werde ich das Boot teilen?", a: "Kabinencharters haben normalerweise 8-16 Gaste aus verschiedenen Landern. Es ist ein soziales Erlebnis, perfekt für Alleinreisende oder Paare, die gerne neue Leute treffen." },
            { q: "Sind Mahlzeiten bei der Kabinencharter inbegriffen?", a: "Ja, alle Kabinencharters sind Vollpension mit Fruhstuck, Mittag- und Abendessen, zubereitet von unserem Bordkoch. Spezielle Ernahrungsbedürfnisse konnen bei vorheriger Ankündigung berücksichtigt werden." }
          ]
        },
        dayTours: {
          title: "Tagestouren",
          questions: [
            { q: "Was ist bei Tagestouren inbegriffen?", a: "Alle Tagestouren beinhalten Hotelabholung, Transport, professionellen Reiseleiter, Eintrittsgebühren und Mittagessen (wo angegeben). Überprüfen Sie die einzelnen Tourbeschreibungen für Details." },
            { q: "In welchen Sprachen sind Touren verfügbar?", a: "Unsere Reiseleiter sprechen Englisch, Deutsch, Russisch und Turkisch. Andere Sprachen konnen auf Anfrage mit Vorankundigung verfügbar sein." },
            { q: "Sind Touren für Kinder geeignet?", a: "Die meisten Touren sind familienfreundlich. Einige Aktivitaten wie Paragliding haben Altersbeschrankungen. Kontaktieren Sie uns für spezifische Tour-Anforderungen." }
          ]
        },
        transfers: {
          title: "Transfers & Autovermietung",
          questions: [
            { q: "Verfolgen Sie Flüge für Flughafentransfers?", a: "Ja, wir überwachen alle ankommenden Flüge. Wenn Ihr Flug verspatest ist, passt sich Ihr Fahrer ohne zusatzliche Kosten entsprechend an." },
            { q: "Welche Dokumente benotige ich, um ein Auto zu mieten?", a: "Sie benotigen einen gültigen Führerschein (mindestens 2 Jahre), Reisepass oder Ausweis und eine Kreditkarte für die Kaution. Mindestalter ist 21." },
            { q: "Ist eine Versicherung bei der Autovermietung inbegriffen?", a: "Ja, alle Mietwagen beinhalten Vollkaskoversicherung (CDW) und Haftpflichtversicherung. Optionale Extras wie GPS und Kindersitze sind verfügbar." }
          ]
        }
      },
      cta: {
        title: "Haben Sie noch Fragen?",
        subtitle: "Unser Team ist bereit, Ihnen bei allen Fragen zu Ihrer bevorstehenden Reise zu helfen.",
        contact: "Kontaktieren Sie uns",
        whatsapp: "WhatsApp"
      }
    },
    blog: {
      hero: {
        subtitle: "Reiseblog",
        title: "Reisetipps & Inspiration",
        description: "Entdecken Sie Insider-Tipps, Reisezielführer und Reiseinspiration für Ihr Turkei-Abenteuer."
      },
      categories: {
        all: "Alle",
        travelGuide: "Reiseführer",
        tours: "Touren",
        yachtCharter: "Yachtcharter",
        activities: "Aktivitaten",
        dayTrips: "Tagesausflüge",
        foodCulture: "Essen & Kultur"
      },
      featured: "Empfohlen",
      minRead: "Min. Lesezeit",
      comingSoon: "Demnachst",
      loadMore: "Mehr laden",
      posts: {
        "best-time-visit-fethiye": {
          title: "Die beste Reisezeit für Fethiye: Ein saisonaler Leitfaden",
          excerpt: "Entdecken Sie, wann Sie Fethiye für perfektes Wetter und weniger Menschenmengen besuchen sollten.",
          date: "28. November 2024"
        },
        "12-islands-tour-guide": {
          title: "12-Inseln-Bootstour: Alles, was Sie wissen müssen",
          excerpt: "Der ultimative Führer zur berühmten 12-Inseln-Bootstour von Fethiye.",
          date: "25. November 2024"
        },
        "blue-cruise-vs-yacht-charter": {
          title: "Blaue Reise vs Yachtcharter: Was ist richtig für Sie?",
          excerpt: "Kabinencharter oder private Yacht? Wir erklaren die Unterschiede und Kosten.",
          date: "20. November 2024"
        },
        "paragliding-oludeniz": {
          title: "Paragliding in Ölüdeniz: Ein vollstandiger Leitfaden",
          excerpt: "Schweben Sie uber die berühmte Blaue Lagune vom Babadag-Berg.",
          date: "15. November 2024"
        },
        "dalyan-mud-baths": {
          title: "Dalyan Tagesausflug: Felsengräber, Schildkroten & Schlammbader",
          excerpt: "Erkunden Sie die antiken lykischen Felsengraber und schwimmen Sie mit Caretta Caretta.",
          date: "10. November 2024"
        },
        "turkish-cuisine-fethiye": {
          title: "10 türkische Gerichte, die Sie in Fethiye probieren müssen",
          excerpt: "Von frischen Meeresfrüchten bis zu traditionellen Kebabs, entdecken Sie die besten lokalen Gerichte.",
          date: "5. November 2024"
        }
      },
      newsletter: {
        title: "Newsletter abonnieren",
        subtitle: "Erhalten Sie Reisetipps, Sonderangebote und Reisezielinspiration direkt in Ihren Posteingang.",
        placeholder: "Ihre E-Mail eingeben",
        button: "Abonnieren"
      }
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: November 2024",
      phone: "Telefon",
      sections: {
        collect: {
          title: "1. Informationen, die wir sammeln",
          intro: "Light Tours Reiseagentur sammelt Informationen, die Sie uns direkt zur Verfügung stellen:",
          items: ["Name, E-Mail-Adresse, Telefonnummer", "Rechnungs- und Zahlungsinformationen", "Reisepraferenzen und Buchungsdetails", "Kommunikation mit uns"]
        },
        use: {
          title: "2. Wie wir Ihre Informationen verwenden",
          intro: "Wir verwenden die gesammelten Informationen um:",
          items: ["Ihre Buchungen zu bearbeiten und zu verwalten", "Buchungsbestätigungen und Updates zu senden", "Auf Ihre Anfragen zu antworten", "Werbemitteilungen zu senden (mit Ihrer Zustimmung)", "Unsere Dienstleistungen zu verbessern"]
        },
        sharing: {
          title: "3. Informationsweitergabe",
          content: "Wir geben Ihre Informationen nur an Dritte weiter, wenn es für unsere Dienstleistungen erforderlich ist, einschließlich Hotels, Fluggesellschaften, Reiseveranstalter und Zahlungsabwickler. Wir verkaufen Ihre personlichen Informationen nicht."
        },
        security: {
          title: "4. Datensicherheit",
          content: "Wir implementieren geeignete Sicherheitsmaßnahmen zum Schutz Ihrer personlichen Informationen. Keine Übertragungsmethode über das Internet ist jedoch 100% sicher."
        },
        rights: {
          title: "5. Ihre Rechte",
          intro: "Sie haben das Recht auf:",
          items: ["Zugang zu Ihren personlichen Daten", "Korrektur ungenauer Daten", "Loschung Ihrer Daten", "Abmeldung von Marketingkommunikation"]
        },
        cookies: {
          title: "6. Cookies",
          content: "Unsere Website verwendet Cookies, um Ihr Surferlebnis zu verbessern. Weitere Informationen finden Sie in unserer Cookie-Richtlinie."
        },
        contact: {
          title: "7. Kontakt",
          intro: "Bei Fragen zu dieser Datenschutzrichtlinie kontaktieren Sie uns bitte unter:"
        }
      }
    },
    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: November 2024",
      phone: "Telefon",
      sections: {
        acceptance: {
          title: "1. Annahme der Bedingungen",
          content: "Durch den Zugriff auf oder die Nutzung der Light Tours Reiseagentur Dienstleistungen stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie nicht einverstanden sind, nutzen Sie bitte unsere Dienstleistungen nicht."
        },
        booking: {
          title: "2. Buchung und Zahlung",
          items: ["Eine Anzahlung von 30% ist zur Buchungsbestatigung erforderlich", "Die vollstandige Zahlung ist vor dem Abreisedatum fallig", "Preise konnen sich bis zur Buchungsbestatigung andern", "Alle Preise sind in EUR, sofern nicht anders angegeben"]
        },
        cancellation: {
          title: "3. Stornierungsrichtlinie",
          items: ["14+ Tage vor Abreise: Volle Rückerstattung abzüglich Bearbeitungsgebühren", "7-14 Tage vor Abreise: 50% Rückerstattung", "Weniger als 7 Tage: Keine Rückerstattung", "Nichterscheinen: Keine Rückerstattung"]
        },
        insurance: {
          title: "4. Reiseversicherung",
          content: "Wir empfehlen dringend den Abschluss einer umfassenden Reiseversicherung, die Stornierung, medizinische Kosten und personliche Gegenstande abdeckt. Light Tours haftet nicht für nicht versicherte Verluste."
        },
        liability: {
          title: "5. Haftung",
          content: "Light Tours handelt als Vermittler für Transport-, Unterkunfts- und Aktivitätsanbieter. Wir haften nicht für Verletzungen, Schaden, Verluste oder Verzogerungen, die durch diese Drittanbieter, Wetterbedingungen oder Umstande außerhalb unserer Kontrolle verursacht werden."
        },
        yachtTerms: {
          title: "6. Yachtcharter Bedingungen",
          items: ["Kaution erforderlich (rückerstattbar nach Inspektion)", "Gaste mussen den Sicherheitsanweisungen des Kapitans folgen", "Route kann sich aufgrund von Wetterbedingungen ändern", "Maximale Kapazitat muss eingehalten werden"]
        },
        carTerms: {
          title: "7. Mietwagen Bedingungen",
          items: ["Mindestalter: 21 Jahre mit 2+ Jahren Fahrerfahrung", "Gultiger Fuhrerschein und Kreditkarte erforderlich", "Voll-zu-voll Tankpolitik", "Schaden muss sofort gemeldet werden"]
        },
        changes: {
          title: "8. Änderungen der Bedingungen",
          content: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu andern. Die fortgesetzte Nutzung unserer Dienste gilt als Zustimmung zu den aktualisierten Bedingungen."
        },
        contact: { title: "9. Kontaktinformationen" }
      }
    },
    cookies: {
      title: "Cookie-Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: November 2024",
      phone: "Telefon",
      sections: {
        what: {
          title: "Was sind Cookies?",
          content: "Cookies sind kleine Textdateien, die auf Ihrem Gerat gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, ein besseres Surferlebnis zu bieten und zu verstehen, wie Sie unsere Website nutzen."
        },
        types: {
          title: "Arten von Cookies, die wir verwenden",
          essential: { title: "Essentielle Cookies", content: "Diese Cookies sind fur das ordnungsgemässe Funktionieren der Website erforderlich. Sie ermoglichen grundlegende Funktionen wie Seitennavigation und Zugang zu sicheren Bereichen." },
          analytics: { title: "Analyse-Cookies", content: "Wir verwenden Google Analytics, um zu verstehen, wie Besucher mit unserer Website interagieren. Dies hilft uns, unsere Inhalte und das Benutzererlebnis zu verbessern." },
          marketing: { title: "Marketing-Cookies", content: "Diese Cookies verfolgen Ihre Online-Aktivitaten, um uns zu helfen, relevantere Werbung zu liefern. Sie konnen von unseren Werbepartnern gesetzt werden." },
          functional: { title: "Funktionale Cookies", content: "Diese Cookies merken sich Ihre Einstellungen (wie Sprache), um erweiterte Funktionen bereitzustellen." }
        },
        managing: {
          title: "Cookies verwalten",
          intro: "Sie konnen Cookies über Ihre Browsereinstellungen steuern:",
          browsers: ["Chrome: Einstellungen > Datenschutz und Sicherheit > Cookies", "Firefox: Einstellungen > Datenschutz & Sicherheit > Cookies", "Safari: Einstellungen > Datenschutz > Cookies", "Edge: Einstellungen > Datenschutz > Cookies"],
          note: "Hinweis: Das Deaktivieren von Cookies kann Ihr Erlebnis auf unserer Website beeintrachtigen."
        },
        thirdParty: {
          title: "Drittanbieter-Cookies",
          intro: "Unsere Website kann Cookies von folgenden Drittanbieterdiensten enthalten:",
          services: ["Google Analytics (Analyse)", "Google Maps (Funktionalitat)", "Facebook Pixel (Marketing)", "Tawk.to (Live-Chat)"]
        },
        updates: {
          title: "Aktualisierungen dieser Richtlinie",
          content: "Wir konnen diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Die neueste Version ist immer auf dieser Seite verfügbar."
        },
        contact: {
          title: "Kontakt",
          intro: "Bei Fragen zu unserer Cookie-Nutzung:"
        }
      }
    }
  }
};

// Process each locale
['en', 'tr', 'de'].forEach(locale => {
  const filePath = path.join(localesDir, `${locale}.json`);
  let existing = {};

  try {
    existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.log(`Creating new file for ${locale}`);
  }

  // Deep merge function
  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  const merged = deepMerge(existing, translations[locale]);

  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
  console.log(`Updated ${locale}.json with FAQ, Blog, and Legal page translations`);
});

console.log('All translations added successfully!');
