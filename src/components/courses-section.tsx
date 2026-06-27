"use client";

import { motion } from "framer-motion";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion";
import { PROGRAMS } from "@/lib/constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProgramsSection() {
  return (
    <section id="programs" className="relative py-20">
      <div className="section-container">
        <SectionHeader
          label="Our Programs"
          title="Start from basics. Grow step-by-step."
          description="Three focused programs designed to take you from zero coding knowledge to a confident, independent programmer."
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {PROGRAMS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="lg-card rounded-2xl p-6 h-full flex flex-col ambient-glow group relative overflow-hidden"
                >
                  {/* Accent bar at the top */}
                  <div className={cn("absolute top-0 inset-x-0 h-1 opacity-80", p.accentBg.replace("bg-", "bg-opacity-100 bg-"))} style={{ backgroundColor: p.title.includes("C++") ? "#3b82f6" : p.title.includes("Python") ? "#f59e0b" : "#10b981" }} />

                  {/* Icon */}
                  <div className={cn("h-11 w-11 rounded-xl flex items-center justify-center mb-5 mt-2", p.accentBg)}>
                    <Icon className={cn("h-5 w-5", p.accent)} />
                  </div>

                  <h3 className="text-headline text-xl mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Check className={cn("h-4 w-4 shrink-0", p.accent)} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for footer */}
                  <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-0.5">
                        Ideal For
                      </p>
                      <p className="text-xs font-medium text-foreground/90">{p.idealFor}</p>
                    </div>
                    <Link href="/courses" className="text-xs font-semibold text-primary hover:underline ml-2 shrink-0">
                      View details &rarr;
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
