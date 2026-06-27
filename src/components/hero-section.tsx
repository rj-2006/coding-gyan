"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { EDUCATOR } from "@/lib/constants";

const CODE_TOKENS = [
  { text: "#include ", color: "text-blue-400 font-semibold" },
  { text: "<stdio.h>\n\n", color: "text-muted-foreground" },
  { text: "int ", color: "text-blue-400 font-semibold" },
  { text: "main", color: "text-yellow-400 font-bold" },
  { text: "() {\n  ", color: "text-foreground" },
  { text: "printf(", color: "text-foreground" },
  { text: '"Hello, World!\\n"', color: "text-green-400 font-medium" },
  { text: ");\n  ", color: "text-foreground" },
  { text: "return ", color: "text-blue-400 font-semibold" },
  { text: "0", color: "text-purple-400 font-bold" },
  { text: ";\n}", color: "text-foreground" },
];

const FULL_CODE_LENGTH = CODE_TOKENS.reduce((acc, token) => acc + token.text.length, 0);

function TypedCodeSnippet() {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (charCount < FULL_CODE_LENGTH) {
      // Type next character (vary typing speed slightly for realism)
      const speed = Math.random() * 30 + 25;
      timeoutId = setTimeout(() => setCharCount((prev) => prev + 1), speed);
    } else {
      // Pause at the end for 3.5 seconds, then reset
      timeoutId = setTimeout(() => setCharCount(0), 3500);
    }

    return () => clearTimeout(timeoutId);
  }, [charCount]);

  // Render tokens up to charCount
  let remaining = charCount;
  const renderedTokens = [];

  for (let i = 0; i < CODE_TOKENS.length; i++) {
    const token = CODE_TOKENS[i];
    if (remaining <= 0) break;

    if (remaining >= token.text.length) {
      renderedTokens.push(
        <span key={i} className={token.color}>
          {token.text}
        </span>
      );
      remaining -= token.text.length;
    } else {
      renderedTokens.push(
        <span key={i} className={token.color}>
          {token.text.slice(0, remaining)}
        </span>
      );
      break;
    }
  }

  return (
    <pre className="text-sm leading-relaxed overflow-x-auto min-h-[140px] font-mono whitespace-pre">
      <code>
        {renderedTokens}
        <span className="inline-block w-2 h-4 bg-foreground/80 animate-pulse ml-0.5 align-middle rounded-[1px]" />
      </code>
    </pre>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.1}>
              <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border shadow-2xs">
                {EDUCATOR.department} · {EDUCATOR.institution}
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                C, C++ &amp; Python{" "}
                <span className="gradient-text">Training</span> for Beginners
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-xl leading-relaxed font-normal">
                Simple, practical and concept-based learning designed to build strong
                programming fundamentals from absolute scratch.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="pt-2 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground font-bold text-sm shrink-0 shadow-sm">
                  SB
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{EDUCATOR.name}</p>
                  <p className="text-sm text-muted-foreground">{EDUCATOR.role}, {EDUCATOR.institution}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.a
                  href="/courses"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
                  id="hero-cta"
                >
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </motion.a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lg-card font-medium text-sm hover:border-foreground/30 transition-colors"
                >
                  Book Demo Class
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Animated Code Card Column */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.6}>
              <motion.div
                className="lg-card-strong rounded-2xl p-6 w-full shadow-2xl font-mono border border-border"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-auto text-xs text-muted-foreground">hello.c</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-green-500/10 text-green-500 ml-2">Running</span>
                </div>
                <TypedCodeSnippet />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
