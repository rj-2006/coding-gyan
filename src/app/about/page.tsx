import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhyUsSection } from "@/components/why-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { EDUCATOR } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Coding Gyan",
  description: "Learn about Suman Bhagat and our teaching philosophy at Coding Gyan.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10 pt-16">
        <div className="section-container pt-16 pb-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              About Coding Gyan
            </span>
            <h1 className="text-display text-4xl sm:text-5xl font-bold mb-6">
              Making programming <span className="gradient-text">simple</span> for every learner
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              We believe coding is not just about writing syntax — it&apos;s about building logical thinking, developing structured problem-solving skills, and gaining the confidence to create real-world solutions.
            </p>
          </div>

          <div className="lg-card-strong rounded-3xl p-8 sm:p-12 mb-20 border border-primary/20 shadow-2xl ambient-glow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/instructor.png"
                alt={EDUCATOR.name}
                className="h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover border-4 border-primary/30 shadow-xl shrink-0"
              />
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
                    {EDUCATOR.name}
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500/10 text-blue-500 text-xs">✓</span>
                  </h2>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {EDUCATOR.role} · {EDUCATOR.department}
                  </p>
                  <p className="text-xs text-muted-foreground">{EDUCATOR.institution}</p>
                </div>
                <blockquote className="text-base sm:text-lg italic text-foreground/90 border-l-2 border-primary/40 pl-4 py-1 text-left">
                  &ldquo;{EDUCATOR.philosophy}&rdquo;
                </blockquote>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {EDUCATOR.highlights.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
