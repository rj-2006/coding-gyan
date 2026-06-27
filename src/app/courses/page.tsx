import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProgramsSection } from "@/components/courses-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Coding Gyan",
  description: "Explore our beginner-friendly C, C++ and Python programming courses designed by university faculty.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10 pt-16">
        <div className="section-container pt-12 pb-6 text-center">
          <h1 className="text-display text-4xl sm:text-5xl font-bold mb-4">
            Our Programming <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Structured step-by-step curriculum designed to build strong programming fundamentals and problem-solving skills.
          </p>
        </div>
        <ProgramsSection />
        <RoadmapSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
