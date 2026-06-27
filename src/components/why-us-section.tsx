"use client";

import { motion } from "framer-motion";
import { SectionHeader, FadeIn } from "@/components/motion";
import { CHALLENGES, FEATURES, COMPARISON, EDUCATOR } from "@/lib/constants";
import { Check, X } from "lucide-react";

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-20">
      <div className="section-container space-y-12">
        <SectionHeader
          label="Why Coding Gyan"
          title="Coding isn't difficult. Learning without guidance is."
        />

        {/* ROW 1: Challenges & Comparison balanced side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Challenges Card */}
          <FadeIn delay={0} className="h-full">
            <div className="lg-card rounded-2xl p-8 h-full flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  Common Challenges
                </p>
                <h3 className="text-headline text-2xl font-bold text-foreground">
                  Why students struggle to learn coding
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {CHALLENGES.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-secondary/30 border border-border/40"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base font-bold mb-1 text-foreground">{c.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Comparison Card */}
          <FadeIn delay={0.15} className="h-full">
            <div className="lg-card rounded-2xl p-8 h-full flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  The Difference
                </p>
                <h3 className="text-headline text-2xl font-bold text-foreground">
                  Coding Gyan vs. Random Tutorials
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {/* Others (Random Tutorials) */}
                <div className="p-5 rounded-xl bg-red-500/[0.03] border border-red-500/15 flex flex-col justify-center">
                  <p className="text-sm font-bold text-muted-foreground mb-3 pb-2 border-b border-red-500/10">{COMPARISON.others.label}</p>
                  <ul className="space-y-3">
                    {COMPARISON.others.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Us (Coding Gyan) */}
                <div className="p-5 rounded-xl bg-primary/[0.06] border border-primary/20 text-foreground flex flex-col justify-center shadow-xs">
                  <p className="text-sm font-bold mb-3 pb-2 border-b border-primary/15 text-primary">{COMPARISON.us.label}</p>
                  <ul className="space-y-3">
                    {COMPARISON.us.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ROW 2: 4 Feature cards in a compact horizontal bento row */}
        <div>
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Our Core Methodology
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeIn key={f.title} delay={0.08 * i} className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="lg-card rounded-2xl p-6 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-secondary/40 border border-border/40 flex items-center justify-center mb-5 text-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">{f.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{f.description}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* ROW 3: Full-width Educator Quote */}
        <FadeIn delay={0.3}>
          <div className="lg-card-strong rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <img
                src="/suman-bhagat.png"
                alt={EDUCATOR.name}
                className="h-16 w-16 rounded-full object-cover border border-primary/20 shadow-sm shrink-0"
              />
              <div>
                <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground font-normal italic mb-4">
                  &ldquo;{EDUCATOR.philosophy}&rdquo;
                </blockquote>
                <p className="text-base font-semibold text-foreground">
                  {EDUCATOR.name} <span className="text-sm font-normal text-muted-foreground">· {EDUCATOR.role}, {EDUCATOR.institution}</span>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
