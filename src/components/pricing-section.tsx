"use client";

import { motion } from "framer-motion";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion";
import { PRICING_PLANS } from "@/lib/constants";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="section-container relative z-10">
        <SectionHeader
          label="Pricing Plans"
          title="Transparent pricing. No surprises."
          description="Choose the plan that fits your learning goals. All plans include direct access to instructor support."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto" staggerDelay={0.1}>
          {PRICING_PLANS.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "rounded-2xl p-7 h-full flex flex-col relative transition-all",
                  plan.popular
                    ? "lg-card-strong border-2 border-primary shadow-xl ring-2 ring-primary/20"
                    : "lg-card ambient-glow"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-primary text-primary-foreground flex items-center gap-1.5 shadow-md">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div className="mb-5">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    What&apos;s included
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/919508387397"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "block w-full text-center text-sm font-semibold py-3 rounded-xl transition-all shadow-sm",
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:opacity-95"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                    )}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
