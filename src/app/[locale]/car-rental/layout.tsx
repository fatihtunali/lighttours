import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata("car-rental", locale, "car-rental");
}

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
