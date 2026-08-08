import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { TrustStrip, WhyUs, DealershipBand, Testimonials } from "@/components/Sections";
import Footer, { WhatsAppFloat } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProductGrid />
        <WhyUs />
        <DealershipBand />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
