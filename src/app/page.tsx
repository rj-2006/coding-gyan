import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProgramsSection } from "@/components/courses-section";
import { WhyUsSection } from "@/components/why-us-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <ProgramsSection />
        <WhyUsSection />
        <RoadmapSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
