const fs = require('fs');
const path = require('path');

// Read all translation files
const enPath = path.join(__dirname, '../messages/en.json');
const trPath = path.join(__dirname, '../messages/tr.json');
const dePath = path.join(__dirname, '../messages/de.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const trData = JSON.parse(fs.readFileSync(trPath, 'utf8'));
const deData = JSON.parse(fs.readFileSync(dePath, 'utf8'));

// Add/update footer keys for EN
enData.footer = {
  ...enData.footer,
  since: "Since 1988",
  description: "Your trusted travel partner for {years} years. Specializing in luxury yacht charters, guided tours, and unforgettable Turkish experiences.",
  licensed: "Licensed Travel Agency",
  quickLinks: "Quick Links",
  links: {
    about: "About Us",
    fleet: "Our Fleet",
    tours: "Tours",
    blog: "Blog",
    faq: "FAQ",
    contact: "Contact"
  },
  popularTours: "Popular Tours",
  tours: {
    fethiyeKekova: "Fethiye-Kekova Cruise",
    twelveIslands: "12 Islands Tour",
    pamukkale: "Pamukkale Day Trip",
    dalyan: "Dalyan Mud Bath",
    paragliding: "Paragliding"
  },
  contactUs: "Contact Us",
  copyright: "© {year} Light Tours. All rights reserved.",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  cookies: "Cookie Policy"
};

// Add/update footer keys for TR
trData.footer = {
  ...trData.footer,
  since: "1988'den beri",
  description: "{years} yildir guvenilir seyahat ortaginiz. Luks yat kiralama, rehberli turlar ve unutulmaz Turkiye deneyimlerinde uzman.",
  licensed: "Lisansli Seyahat Acentesi",
  quickLinks: "Hizli Baglantilar",
  links: {
    about: "Hakkimizda",
    fleet: "Filomuz",
    tours: "Turlar",
    blog: "Blog",
    faq: "SSS",
    contact: "Iletisim"
  },
  popularTours: "Populer Turlar",
  tours: {
    fethiyeKekova: "Fethiye-Kekova Mavi Yolculuk",
    twelveIslands: "12 Adalar Turu",
    pamukkale: "Pamukkale Gunluk Tur",
    dalyan: "Dalyan Camur Banyosu",
    paragliding: "Yamaç Paraşütü"
  },
  contactUs: "Bize Ulasin",
  copyright: "© {year} Light Tours. Tum haklari saklidir.",
  privacy: "Gizlilik Politikasi",
  terms: "Kullanim Sartlari",
  cookies: "Cerez Politikasi"
};

// Add/update footer keys for DE
deData.footer = {
  ...deData.footer,
  since: "Seit 1988",
  description: "Ihr vertrauenswurdiger Reisepartner seit {years} Jahren. Spezialisiert auf luxuriose Yachtcharter, gefuhrte Touren und unvergessliche Turkei-Erlebnisse.",
  licensed: "Lizenziertes Reiseburo",
  quickLinks: "Schnelllinks",
  links: {
    about: "Uber uns",
    fleet: "Unsere Flotte",
    tours: "Touren",
    blog: "Blog",
    faq: "FAQ",
    contact: "Kontakt"
  },
  popularTours: "Beliebte Touren",
  tours: {
    fethiyeKekova: "Fethiye-Kekova Kreuzfahrt",
    twelveIslands: "12 Inseln Tour",
    pamukkale: "Pamukkale Tagesausflug",
    dalyan: "Dalyan Schlammbad",
    paragliding: "Paragliding"
  },
  contactUs: "Kontaktieren Sie uns",
  copyright: "© {year} Light Tours. Alle Rechte vorbehalten.",
  privacy: "Datenschutz",
  terms: "Nutzungsbedingungen",
  cookies: "Cookie-Richtlinie"
};

// Write updated files
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(trPath, JSON.stringify(trData, null, 2));
fs.writeFileSync(dePath, JSON.stringify(deData, null, 2));

console.log('Footer translations added successfully!');
