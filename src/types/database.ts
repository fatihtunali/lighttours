// Database types for Light Tours
// Ready for real database integration

// Contact form submission
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: Date;
  updatedAt?: Date;
  ipAddress?: string;
  userAgent?: string;
  language?: string;
}

// Quote request submission
export interface QuoteSubmission {
  id?: string;
  // Customer info
  fullName: string;
  email: string;
  phone: string;
  // Service details
  serviceType: "yachtCharter" | "cabinCharter" | "dayTour" | "multiDay" | "transfer" | "carRental";
  // Trip details
  startDate?: string;
  duration?: string;
  travelers: number;
  budgetLevel?: "budget" | "moderate" | "luxury";
  // Destinations/interests
  destinations?: string[];
  interests?: string[];
  additionalInfo?: string;
  // Generated quote
  generatedQuote?: {
    route?: string;
    itinerary?: string;
    estimatedPrice?: number;
  };
  // Metadata
  status: "pending" | "contacted" | "converted" | "closed";
  createdAt: Date;
  updatedAt?: Date;
  ipAddress?: string;
  userAgent?: string;
  language?: string;
}

// Car rental inquiry
export interface CarRentalInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  returnDate: string;
  additionalRequests?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  updatedAt?: Date;
  ipAddress?: string;
  language?: string;
}

// Transfer booking
export interface TransferBooking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  transferType: "airport" | "intercity" | "custom";
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: number;
  vehicleType: string;
  flightNumber?: string;
  additionalRequests?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  updatedAt?: Date;
  ipAddress?: string;
  language?: string;
}

// Newsletter subscription
export interface NewsletterSubscription {
  id?: string;
  email: string;
  language: string;
  source: string;
  isActive: boolean;
  subscribedAt: Date;
  unsubscribedAt?: Date;
  ipAddress?: string;
}

// API Response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Database adapter interface - ready for real database
export interface DatabaseAdapter {
  // Contact submissions
  createContactSubmission(data: Omit<ContactSubmission, "id" | "createdAt">): Promise<ContactSubmission>;
  getContactSubmissions(options?: { status?: string; limit?: number }): Promise<ContactSubmission[]>;
  updateContactSubmission(id: string, data: Partial<ContactSubmission>): Promise<ContactSubmission>;

  // Quote submissions
  createQuoteSubmission(data: Omit<QuoteSubmission, "id" | "createdAt">): Promise<QuoteSubmission>;
  getQuoteSubmissions(options?: { status?: string; limit?: number }): Promise<QuoteSubmission[]>;
  updateQuoteSubmission(id: string, data: Partial<QuoteSubmission>): Promise<QuoteSubmission>;

  // Car rental inquiries
  createCarRentalInquiry(data: Omit<CarRentalInquiry, "id" | "createdAt">): Promise<CarRentalInquiry>;
  getCarRentalInquiries(options?: { status?: string; limit?: number }): Promise<CarRentalInquiry[]>;

  // Transfer bookings
  createTransferBooking(data: Omit<TransferBooking, "id" | "createdAt">): Promise<TransferBooking>;
  getTransferBookings(options?: { status?: string; limit?: number }): Promise<TransferBooking[]>;

  // Newsletter
  createNewsletterSubscription(data: Omit<NewsletterSubscription, "id" | "subscribedAt">): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(options?: { isActive?: boolean }): Promise<NewsletterSubscription[]>;
  unsubscribeNewsletter(email: string): Promise<boolean>;
}
