import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Light Tours - Yacht Charter, Tours & Travel Services | Fethiye, Turkey",
  description: "Light Tours Travel Agency - 37 years of excellence in yacht charters, blue cruises, guided tours, car rentals, and transfer services in Fethiye and the Turkish Riviera. TURSAB certified since 1988.",
  keywords: "yacht charter turkey, gulet cruise, fethiye tours, blue cruise turkey, cabin charter, car rental fethiye, airport transfer dalaman, travel agency turkey",
  authors: [{ name: "Light Tours Travel Agency" }],
  openGraph: {
    title: "Light Tours - Your Gateway to Turkish Adventures Since 1988",
    description: "Luxury yacht charters, unforgettable tours, and seamless travel services in the Turkish Riviera.",
    url: "https://lighttours.com",
    siteName: "Light Tours",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Tours - Yacht Charter & Tours in Turkey",
    description: "37 years of excellence in yacht charters, tours, and travel services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
