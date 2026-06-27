"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { EDUCATOR } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <FadeIn>
          <div className="lg-card-strong rounded-3xl p-8 sm:p-14 lg:p-16 border border-border text-center sm:text-left">
            <div className="max-w-2xl mx-auto sm:mx-0">
              <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                Start Learning Today
              </span>
              <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Ready to start coding <br className="hidden sm:inline" />
                <span className="gradient-text">with confidence?</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Learn C, C++ and Python through practical, beginner-friendly training.
                Guided personally by {EDUCATOR.name}, {EDUCATOR.role} at {EDUCATOR.institution}.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <motion.a
                  href="https://wa.me/919508387397"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat on WhatsApp
                </motion.a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl lg-card text-sm font-semibold hover:border-foreground/30 transition-colors"
                >
                  Book Demo Class <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
