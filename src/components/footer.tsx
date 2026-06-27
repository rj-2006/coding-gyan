import { Code2 } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                coding<span className="text-primary">gyan</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-[200px]">
              Making programming simple, practical, and confidence-building for every learner.
            </p>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">{CONTACT_INFO.email}</p>
              <p className="text-xs text-muted-foreground">{CONTACT_INFO.whatsapp}</p>
              <p className="text-xs text-muted-foreground">{CONTACT_INFO.location}</p>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground">
            © 2026 CodingGyan. All rights reserved.
          </p>
          <p className="text-[11px] text-dim">
            Assistant Professor · Computer Science Department · St. Xavier&apos;s College, Ranchi
          </p>
        </div>
      </div>
    </footer>
  );
}
