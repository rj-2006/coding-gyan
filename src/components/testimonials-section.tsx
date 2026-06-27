"use client";

import { motion } from "framer-motion";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="section-container">
        <SectionHeader
          label="Student Stories"
          title="What our students say"
          description="Read genuine feedback from learners who started from scratch."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="lg-card rounded-2xl p-7 h-full flex flex-col justify-between"
              >
                <p className="text-base leading-relaxed text-foreground/90 flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3.5 pt-4 border-t border-border mt-auto">
                  <div className="h-10 w-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {t.role} · {t.course}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
