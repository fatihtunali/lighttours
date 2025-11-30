// Detailed day-by-day cruise itineraries for Light Tours

export interface CruiseDay {
  day: number;
  departure: string;
  arrival: string;
  highlights: string[];
  meals: string;
  description: string;
  swimmingStops: number;
}

export interface CruiseRoute {
  id: string;
  name: string;
  duration: string;
  nights: number;
  startPort: string;
  endPort: string;
  days: CruiseDay[];
  included: string[];
  notIncluded: string[];
  pricePerPerson: {
    cabin: number;
    private: number;
  };
}

export const cruiseRoutes: CruiseRoute[] = [
  {
    id: "fethiye-kekova",
    name: "Fethiye - Kekova Blue Cruise",
    duration: "8 Days / 7 Nights",
    nights: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    pricePerPerson: {
      cabin: 450,
      private: 850,
    },
    included: [
      "Full board meals (breakfast, lunch, dinner)",
      "Cabin accommodation",
      "Fuel & port fees",
      "Captain & crew",
      "Bed linens & towels",
      "Snorkeling equipment",
      "Fishing equipment",
    ],
    notIncluded: [
      "Alcoholic beverages",
      "Soft drinks",
      "Entrance fees to historical sites",
      "Personal expenses",
      "Travel insurance",
    ],
    days: [
      {
        day: 1,
        departure: "Fethiye Harbor",
        arrival: "Ölüdeniz",
        highlights: ["Fethiye Marina departure", "Ölüdeniz Blue Lagoon", "Butterfly Valley view"],
        meals: "Dinner",
        description: "Board at Fethiye harbor around 15:00. Meet your captain and crew, settle into your cabin. Cruise to the world-famous Ölüdeniz (Blue Lagoon) where turquoise waters meet the white sandy beach. Anchor overnight with stunning views of Butterfly Valley cliffs.",
        swimmingStops: 2,
      },
      {
        day: 2,
        departure: "Ölüdeniz",
        arrival: "Butterfly Valley",
        highlights: ["Butterfly Valley", "Kabak Bay", "Cold Water Bay"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Morning swim in the crystal-clear waters of Ölüdeniz. Cruise to Butterfly Valley - home to rare tiger butterflies and a hippie paradise. Optional hike up the valley. Continue to secluded Kabak Bay for lunch and swimming. Evening at Cold Water Bay.",
        swimmingStops: 4,
      },
      {
        day: 3,
        departure: "Butterfly Valley",
        arrival: "Kalkan",
        highlights: ["Patara Beach", "Kalkan Old Town", "Sunset dinner"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Morning cruise along the Lycian coast. Stop near Patara - Turkey's longest beach and ancient Lycian city. Arrive at the charming whitewashed town of Kalkan in the afternoon. Free time to explore boutique shops and rooftop restaurants.",
        swimmingStops: 3,
      },
      {
        day: 4,
        departure: "Kalkan",
        arrival: "Kaş",
        highlights: ["Kaş harbor", "Amphitheater", "Underwater ruins"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Short cruise to Kaş - the diving capital of Turkey. Visit the ancient Hellenistic amphitheater overlooking the sea. Free time for shopping in the artisan streets. Optional scuba diving to see underwater ruins and marine life.",
        swimmingStops: 2,
      },
      {
        day: 5,
        departure: "Kaş",
        arrival: "Kekova",
        highlights: ["Sunken City of Kekova", "Simena Castle", "Üçağız village"],
        meals: "Breakfast, Lunch, Dinner",
        description: "The highlight of the cruise! Cruise over the legendary Sunken City of Kekova - see ancient Lycian ruins submerged beneath crystal waters. Visit Simena Castle ruins and the charming village of Üçağız. Swimming among history.",
        swimmingStops: 3,
      },
      {
        day: 6,
        departure: "Kekova",
        arrival: "Demre (Myra)",
        highlights: ["Demre (Myra)", "St. Nicholas Church", "Rock tombs"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise to Demre, ancient Myra. Optional visit to the Church of St. Nicholas (Santa Claus) and the spectacular Lycian rock tombs carved into cliff faces. Afternoon swimming in secluded bays along the coast.",
        swimmingStops: 2,
      },
      {
        day: 7,
        departure: "Demre",
        arrival: "Göcek",
        highlights: ["Gemiler Island", "12 Islands", "Göcek Bay"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise to Gemiler Island with Byzantine church ruins. Continue through the stunning 12 Islands of Fethiye Gulf. Multiple swimming stops in pristine bays. Evening at peaceful Göcek Bay surrounded by pine-clad hills.",
        swimmingStops: 4,
      },
      {
        day: 8,
        departure: "Göcek",
        arrival: "Fethiye Harbor",
        highlights: ["Final breakfast", "Fethiye harbor arrival"],
        meals: "Breakfast",
        description: "Final breakfast on board while cruising back to Fethiye harbor. Arrive around 10:00. Say goodbye to your crew and take home unforgettable memories of the Turkish turquoise coast.",
        swimmingStops: 0,
      },
    ],
  },
  {
    id: "fethiye-marmaris",
    name: "Fethiye - Marmaris Blue Cruise",
    duration: "8 Days / 7 Nights",
    nights: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    pricePerPerson: {
      cabin: 400,
      private: 750,
    },
    included: [
      "Full board meals (breakfast, lunch, dinner)",
      "Cabin accommodation",
      "Fuel & port fees",
      "Captain & crew",
      "Bed linens & towels",
      "Snorkeling equipment",
      "Fishing equipment",
    ],
    notIncluded: [
      "Alcoholic beverages",
      "Soft drinks",
      "Entrance fees to historical sites",
      "Personal expenses",
      "Travel insurance",
    ],
    days: [
      {
        day: 1,
        departure: "Fethiye Harbor",
        arrival: "Tersane Island",
        highlights: ["Fethiye Marina departure", "Tersane Island", "Ottoman shipyard ruins"],
        meals: "Dinner",
        description: "Board at Fethiye harbor around 15:00. Cruise through the beautiful Fethiye Gulf to Tersane Island, home to ancient Ottoman shipyard ruins. First swim of the cruise in crystal-clear waters. Dinner under the stars.",
        swimmingStops: 2,
      },
      {
        day: 2,
        departure: "Tersane Island",
        arrival: "Göcek",
        highlights: ["12 Islands", "Yassıca Islands", "Göcek village"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise through the famous 12 Islands of Göcek. Stop at the stunning Yassıca Islands for swimming and snorkeling. Afternoon arrival at Göcek village - browse the marina shops and enjoy a drink at a waterfront café.",
        swimmingStops: 4,
      },
      {
        day: 3,
        departure: "Göcek",
        arrival: "Ekincik Bay",
        highlights: ["Ekincik Bay", "Dalyan River mouth", "Turtle spotting"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise to beautiful Ekincik Bay at the mouth of the Dalyan River. Watch for Caretta Caretta sea turtles. Optional boat trip up the Dalyan River to see Lycian rock tombs and natural mud baths.",
        swimmingStops: 3,
      },
      {
        day: 4,
        departure: "Ekincik Bay",
        arrival: "Marmaris",
        highlights: ["Marmaris Castle", "Old Town bazaar", "Nightlife"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise along the coast to Marmaris. Afternoon free to explore the castle, old town bazaar, and famous bar street. Marmaris offers the best nightlife on the Turkish coast - enjoy an evening ashore.",
        swimmingStops: 2,
      },
      {
        day: 5,
        departure: "Marmaris",
        arrival: "Cennet Island",
        highlights: ["Cennet Island (Paradise)", "Phosphorus Cave", "Aquarium Bay"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise to Cennet Island - aptly named Paradise Island. Visit the Phosphorus Cave where the water glows. Swim in Aquarium Bay famous for its incredibly clear waters teeming with fish.",
        swimmingStops: 4,
      },
      {
        day: 6,
        departure: "Cennet Island",
        arrival: "Sarsala Bay",
        highlights: ["Sarsala Bay", "Pine forest backdrop", "BBQ on beach"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Return cruise towards Fethiye. Stop at secluded Sarsala Bay surrounded by fragrant pine forests. Optional beach BBQ dinner. One of the most peaceful anchorages on the Turkish coast.",
        swimmingStops: 3,
      },
      {
        day: 7,
        departure: "Sarsala Bay",
        arrival: "Ölüdeniz",
        highlights: ["Butterfly Valley", "Ölüdeniz Blue Lagoon", "Farewell dinner"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise to Butterfly Valley and the famous Blue Lagoon of Ölüdeniz. Final full day of swimming in the most photographed bay in Turkey. Special farewell dinner with the crew.",
        swimmingStops: 4,
      },
      {
        day: 8,
        departure: "Ölüdeniz",
        arrival: "Fethiye Harbor",
        highlights: ["Final breakfast", "Fethiye harbor arrival"],
        meals: "Breakfast",
        description: "Final breakfast on board. Cruise back to Fethiye harbor, arriving around 10:00. Disembark with wonderful memories of your blue cruise adventure.",
        swimmingStops: 0,
      },
    ],
  },
  {
    id: "fethiye-olympos",
    name: "Fethiye - Olympos Mini Cruise",
    duration: "4 Days / 3 Nights",
    nights: 3,
    startPort: "Fethiye",
    endPort: "Fethiye",
    pricePerPerson: {
      cabin: 250,
      private: 500,
    },
    included: [
      "Full board meals (breakfast, lunch, dinner)",
      "Cabin accommodation",
      "Fuel & port fees",
      "Captain & crew",
      "Bed linens & towels",
      "Snorkeling equipment",
    ],
    notIncluded: [
      "Alcoholic beverages",
      "Soft drinks",
      "Entrance fees",
      "Personal expenses",
    ],
    days: [
      {
        day: 1,
        departure: "Fethiye Harbor",
        arrival: "Butterfly Valley",
        highlights: ["Ölüdeniz view", "Butterfly Valley", "Evening swim"],
        meals: "Dinner",
        description: "Board at Fethiye harbor at 15:00. Cruise past the stunning Blue Lagoon of Ölüdeniz to Butterfly Valley. Evening swim and dinner anchored beneath dramatic cliffs.",
        swimmingStops: 2,
      },
      {
        day: 2,
        departure: "Butterfly Valley",
        arrival: "Kaş",
        highlights: ["Patara coastline", "Kalkan bay", "Kaş harbor"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Cruise along the beautiful Lycian coastline. Swimming stops at secluded bays. Brief stop at Kalkan. Arrive at the bohemian town of Kaş for dinner and optional evening exploration.",
        swimmingStops: 3,
      },
      {
        day: 3,
        departure: "Kaş",
        arrival: "Kekova",
        highlights: ["Sunken City", "Simena Castle", "Return to Kalkan"],
        meals: "Breakfast, Lunch, Dinner",
        description: "Sail to the legendary Sunken City of Kekova. Cruise over ancient Lycian ruins beneath crystal waters. Visit Simena Castle. Return towards Kalkan for overnight anchorage.",
        swimmingStops: 3,
      },
      {
        day: 4,
        departure: "Kalkan",
        arrival: "Fethiye Harbor",
        highlights: ["Final swim", "Breakfast cruise", "Fethiye arrival"],
        meals: "Breakfast",
        description: "Early morning swim. Breakfast while cruising back to Fethiye harbor. Arrive around 10:00. Perfect short cruise for those with limited time.",
        swimmingStops: 1,
      },
    ],
  },
];

// Get cruise route by destinations
export function findMatchingCruise(destinations: string[]): CruiseRoute | null {
  const destLower = destinations.map(d => d.toLowerCase());

  // Check for Kekova route
  if (destLower.some(d => d.includes("kekova") || d.includes("kaş") || d.includes("kas"))) {
    return cruiseRoutes.find(r => r.id === "fethiye-kekova") || null;
  }

  // Check for Marmaris route
  if (destLower.some(d => d.includes("marmaris") || d.includes("göcek") || d.includes("gocek") || d.includes("dalyan"))) {
    return cruiseRoutes.find(r => r.id === "fethiye-marmaris") || null;
  }

  // Check for short cruise
  if (destLower.some(d => d.includes("olympos") || d.includes("olimpos"))) {
    return cruiseRoutes.find(r => r.id === "fethiye-olympos") || null;
  }

  // Default to Kekova route (most popular)
  return cruiseRoutes.find(r => r.id === "fethiye-kekova") || null;
}

// Generate custom cruise itinerary based on user preferences
export function generateCruiseItinerary(params: {
  destinations: string[];
  duration: number;
  travelers: number;
  startDate: string;
  charterType: "cabin" | "private";
}): {
  route: CruiseRoute;
  totalPrice: number;
  pricePerPerson: number;
  startDate: string;
  endDate: string;
} | null {
  // Find matching route or default
  let route = findMatchingCruise(params.destinations);

  // If duration is short (4 days or less), use mini cruise
  if (params.duration <= 4) {
    route = cruiseRoutes.find(r => r.id === "fethiye-olympos") || route;
  }

  if (!route) return null;

  const pricePerPerson = params.charterType === "cabin"
    ? route.pricePerPerson.cabin
    : route.pricePerPerson.private;

  const totalPrice = pricePerPerson * params.travelers;

  // Calculate end date
  const start = new Date(params.startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + route.nights);

  return {
    route,
    totalPrice,
    pricePerPerson,
    startDate: params.startDate,
    endDate: end.toISOString().split("T")[0],
  };
}
