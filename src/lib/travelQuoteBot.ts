// TravelQuoteBot API Integration
// Uses local API proxy to avoid CORS issues

// API Base URL - Local proxy routes
const API_BASE = "/api/quote";

// Cruise/Yacht booking request
export interface CruiseBookingRequest {
  name: string;
  email: string;
  phone?: string;
  service_type: "yacht-charter" | "cabin-charter";
  cruise_route: string;
  start_date: string;
  end_date: string;
  adults: number;
  price_per_person: number;
  total_price: number;
  special_requests?: string;
  destinations?: string[];
}

// Send cruise booking to TravelQuoteBot for follow-up
export async function submitCruiseBooking(request: CruiseBookingRequest): Promise<ItineraryResponse> {
  try {
    // Convert cruise booking to TravelQuoteBot format
    const tqbRequest = {
      name: request.name,
      email: request.email,
      phone: request.phone,
      // Send as special tour type for tracking
      city_nights: request.destinations?.map(d => ({ city: d, nights: 1 })) || [
        { city: request.cruise_route, nights: Math.ceil((new Date(request.end_date).getTime() - new Date(request.start_date).getTime()) / (1000 * 60 * 60 * 24)) }
      ],
      start_date: request.start_date,
      adults: request.adults,
      children: 0,
      hotel_category: 4, // Standard for cruises
      tour_type: "PRIVATE" as const,
      special_requests: `[${request.service_type.toUpperCase()}] ${request.cruise_route}\nPrice: €${request.total_price} (€${request.price_per_person}/person)\n${request.special_requests || ""}`,
    };

    const response = await fetch(`${API_BASE}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tqbRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      itinerary_id: data.itinerary_id,
      total_price: request.total_price,
      price_per_person: request.price_per_person,
      message: "Cruise booking submitted successfully",
    };
  } catch (error) {
    console.error("TravelQuoteBot cruise booking error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit booking",
    };
  }
}

// City nights interface
interface CityNight {
  city: string;
  nights: number;
}

// Request interface matching TravelQuoteBot API
export interface ItineraryRequest {
  name: string;
  email: string;
  phone?: string;
  city_nights: CityNight[];
  start_date: string;
  adults: number;
  children: number;
  hotel_category: number; // 3, 4, or 5 star
  tour_type: "PRIVATE" | "SIC"; // Private or Seat-in-Coach
  special_requests?: string;
}

// Day item in itinerary
export interface ItineraryItem {
  type: "hotel" | "tour" | "vehicle" | "transfer" | "meal" | "entrance_fee" | "extra";
  id: number | string;
  name: string;
  quantity: number;
  price_per_unit: number;
  total_price: number;
  location?: string;
  notes?: string;
}

// Day in itinerary
export interface ItineraryDay {
  day_number: number;
  date: string;
  location: string;
  title: string;
  narrative: string;
  meals: string;
  items: ItineraryItem[];
}

// Pricing summary
export interface PricingSummary {
  hotels_total: number;
  tours_total: number;
  vehicles_total: number;
  guides_total: number;
  entrance_fees_total: number;
  meals_total: number;
  extras_total: number;
  subtotal: number;
  discount: number;
  total: number;
}

// Full itinerary structure
export interface Itinerary {
  days: ItineraryDay[];
  pricing_summary?: PricingSummary;
}

// API Response
export interface ItineraryResponse {
  success: boolean;
  itinerary_id?: number;
  total_price?: number;
  price_per_person?: number;
  message?: string;
  error?: string;
  details?: string;
}

// Generate itinerary via TravelQuoteBot API (through local proxy)
export async function generateItinerary(request: ItineraryRequest): Promise<ItineraryResponse> {
  try {
    const response = await fetch(`${API_BASE}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      itinerary_id: data.itinerary_id,
      total_price: data.total_price,
      price_per_person: data.price_per_person,
      message: data.message,
    };
  } catch (error) {
    console.error("TravelQuoteBot API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

// Check API health
export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/generate`, {
      method: "OPTIONS",
    });
    return response.ok || response.status === 405; // 405 = Method Not Allowed (but server is up)
  } catch {
    return false;
  }
}

// Preview itinerary (get full details by ID)
export async function getItineraryPreview(itineraryId: number): Promise<Itinerary | null> {
  try {
    const response = await fetch(`${API_BASE}/${itineraryId}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    // API returns itinerary_data containing days and pricing_summary
    return data.itinerary_data || null;
  } catch (error) {
    console.error("Failed to fetch itinerary preview:", error);
    return null;
  }
}

// Helper to create request from Light Tours quote form
export function createTourRequest(params: {
  name: string;
  email: string;
  phone?: string;
  destinations: string[];
  duration: number;
  travelers: number;
  children?: number;
  startDate: string;
  hotelCategory?: number;
  tourType?: "PRIVATE" | "SIC";
  specialRequests?: string;
}): ItineraryRequest {
  // Distribute nights evenly across cities
  const nightsPerCity = Math.floor(params.duration / params.destinations.length);
  const extraNights = params.duration % params.destinations.length;

  const city_nights: CityNight[] = params.destinations.map((city, index) => ({
    city,
    nights: nightsPerCity + (index < extraNights ? 1 : 0),
  }));

  return {
    name: params.name,
    email: params.email,
    phone: params.phone,
    city_nights,
    start_date: params.startDate,
    adults: params.travelers,
    children: params.children || 0,
    hotel_category: params.hotelCategory || 4,
    tour_type: params.tourType || "PRIVATE",
    special_requests: params.specialRequests,
  };
}

// Pre-defined tour templates for Light Tours
export const tourTemplates = {
  // Blue Cruise Routes
  fethiyeKekova: {
    name: "Fethiye - Kekova Blue Cruise",
    cities: ["Fethiye", "Butterfly Valley", "Kas", "Kekova", "Olympos"],
    duration: 7,
    type: "PRIVATE" as const,
  },
  fethiyeMarmaris: {
    name: "Fethiye - Marmaris Blue Cruise",
    cities: ["Fethiye", "Gocek", "Dalyan", "Marmaris"],
    duration: 7,
    type: "PRIVATE" as const,
  },

  // Day Tours
  cappadocia: {
    name: "Cappadocia Day Tour",
    cities: ["Cappadocia"],
    duration: 1,
    type: "PRIVATE" as const,
  },
  pamukkale: {
    name: "Pamukkale Day Trip",
    cities: ["Pamukkale"],
    duration: 1,
    type: "PRIVATE" as const,
  },
  ephesus: {
    name: "Ephesus Ancient City Tour",
    cities: ["Ephesus"],
    duration: 1,
    type: "PRIVATE" as const,
  },

  // Multi-day Tours
  pamukkaleEphesus: {
    name: "Pamukkale & Ephesus Combo",
    cities: ["Pamukkale", "Ephesus"],
    duration: 2,
    type: "PRIVATE" as const,
  },
  turkishRiviera: {
    name: "Turkish Riviera Discovery",
    cities: ["Fethiye", "Dalyan", "Marmaris", "Bodrum"],
    duration: 5,
    type: "PRIVATE" as const,
  },
  grandTurkey: {
    name: "Grand Turkey Tour",
    cities: ["Istanbul", "Cappadocia", "Pamukkale", "Ephesus", "Fethiye"],
    duration: 10,
    type: "PRIVATE" as const,
  },
};

// Available cities in Turkey
export const availableCities = [
  "Istanbul",
  "Cappadocia",
  "Pamukkale",
  "Ephesus",
  "Fethiye",
  "Kas",
  "Antalya",
  "Bodrum",
  "Marmaris",
  "Dalyan",
  "Kekova",
  "Olympos",
  "Gocek",
  "Butterfly Valley",
];
