"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500", scrolled && "lg-nav")}
    >
      <nav className="section-container flex h-14 items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 group" id="nav-logo">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
            <Code2 className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            coding<span className="text-primary">gyan</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "px-3 py-1.5 text-[13px] rounded-md transition-colors",
                pathname === l.href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {theme === "glass" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="/contact"
            className="lg-card text-[13px] font-medium px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Book Demo Class
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground" aria-label="Toggle theme">
            {theme === "glass" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-muted-foreground" aria-label="Toggle menu" id="nav-toggle">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden lg-card-strong overflow-hidden border-t border-border"
          >
            <div className="section-container py-4 space-y-1">
              {LINKS.map((l) => (
                <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className={cn("block py-2 text-sm transition-colors", pathname === l.href ? "text-foreground font-medium" : "text-muted-foreground")}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2">
                <Link href="/contact" onClick={() => setOpen(false)}
                  className="block text-center lg-card text-sm font-medium px-4 py-2 rounded-full"
                >
                  Book Demo Class
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
