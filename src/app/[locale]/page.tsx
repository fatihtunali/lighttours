import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TrustSignals from "@/components/sections/TrustSignals";
import PopularTours from "@/components/sections/PopularTours";
import QuoteForm from "@/components/sections/QuoteForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PopularTours />
      <QuoteForm />
      <TrustSignals />
    </>
  );
}
