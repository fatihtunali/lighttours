import type { Metadata } from "next";
import { generatePageMetadata, generateFaqSchema } from "@/lib/seo";

// FAQ data for structured data
const faqData = [
  // Yacht Charter
  { question: "What's included in a yacht charter?", answer: "Private charters include the yacht, crew (captain, cook, deckhands), all meals, fuel, port fees, water sports equipment, and bedding. Alcoholic beverages are typically extra." },
  { question: "Do I need sailing experience?", answer: "No! Our yachts come with professional crew who handle all sailing. You're free to relax, swim, and enjoy the journey." },
  { question: "What should I pack for a yacht trip?", answer: "Pack light, casual clothing, swimwear, sunscreen, hat, and soft-soled shoes for the boat. We provide towels, snorkeling gear, and basic toiletries." },
  { question: "Can the itinerary be customized?", answer: "Absolutely! Private charters offer full flexibility. Discuss your preferences with us and we'll create a personalized route based on weather and your interests." },
  // Cabin Charter
  { question: "What's the difference between cabin and yacht charter?", answer: "Cabin charter means you book individual cabins and share the boat with other travelers. It's more affordable and a great way to meet people. Yacht charter is private - you rent the entire boat." },
  { question: "Who will I share the boat with?", answer: "Cabin charters typically host 8-16 guests from various countries. It's a social experience perfect for solo travelers or couples who enjoy meeting new people." },
  { question: "Are meals included in cabin charter?", answer: "Yes, all cabin charters are full-board including breakfast, lunch, and dinner prepared by our onboard chef. Special dietary requirements can be accommodated with advance notice." },
  // Day Tours
  { question: "What's included in day tours?", answer: "All day tours include hotel pickup/drop-off, transportation, professional guide, entrance fees, and lunch (where specified). Check individual tour descriptions for specifics." },
  { question: "What languages are tours available in?", answer: "Our guides speak English, German, Russian, and Turkish. Other languages may be available on request with advance notice." },
  { question: "Are tours suitable for children?", answer: "Most tours are family-friendly. Some activities like paragliding have age restrictions. Contact us for specific tour requirements." },
  // Transfers
  { question: "Do you track flights for airport transfers?", answer: "Yes, we monitor all incoming flights. If your flight is delayed, your driver will adjust accordingly at no extra charge." },
  { question: "What documents do I need to rent a car?", answer: "You'll need a valid driving license (held for minimum 2 years), passport or ID, and a credit card for the security deposit. Minimum age is 21." },
  { question: "Is insurance included with car rental?", answer: "Yes, all rentals include comprehensive insurance (CDW) and third-party liability. Optional extras like GPS and child seats are available." },
];

const faqSchema = generateFaqSchema(faqData);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata("faq", locale, "faq");
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
