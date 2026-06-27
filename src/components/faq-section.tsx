"use client";

import { SectionHeader, FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20">
      <div className="section-container">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our teaching methodology, demos, and enrollment."
        />

        <FadeIn className="max-w-3xl mx-auto">
          <Accordion className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="lg-card rounded-2xl border border-border px-6 py-1 overflow-hidden"
              >
                <AccordionTrigger className="py-5 text-base sm:text-lg font-semibold hover:no-underline text-left text-foreground transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-muted-foreground leading-relaxed font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
