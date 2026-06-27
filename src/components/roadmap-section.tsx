"use client";

import { motion } from "framer-motion";
import { SectionHeader, FadeIn } from "@/components/motion";
import { ROADMAP_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-20">
      <div className="section-container relative z-10">
        <SectionHeader
          label="Learning Path"
          title="From zero to confident coder"
          description="A clear, structured timeline — no guesswork, no jumping around scattered tutorials."
        />

        <div className="relative max-w-3xl ml-2 sm:ml-6">
          {/* Vertical timeline connector line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-8">
            {ROADMAP_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className="relative flex items-start gap-6 group">
                    {/* Timeline Node Badge */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="relative z-10 h-12 w-12 shrink-0 rounded-full lg-card-strong flex items-center justify-center border-2 border-primary/30 text-primary shadow-sm group-hover:border-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    {/* Timeline Content Card */}
                    <div className="flex-1 lg-card rounded-2xl p-6 ambient-glow transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                          Step 0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-headline text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
