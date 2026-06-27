"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/motion";
import { CONTACT_INFO } from "@/lib/constants";
import { Rocket, Users, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const STEPS = [
  {
    num: "1",
    title: "Reach Out",
    desc: "Send a message or call us through your preferred method.",
  },
  {
    num: "2",
    title: "Understand Goals",
    desc: "We understand your background, goals, and help you choose the right path.",
  },
  {
    num: "3",
    title: "Free Demo Class",
    desc: "Attend a free demo class and experience our teaching approach.",
  },
  {
    num: "4",
    title: "Start Learning",
    desc: "Begin your coding journey with confidence and the right roadmap.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10 pt-16">
        {/* Header */}
        <div className="section-container pt-16 pb-12 text-center">
          <h1 className="text-display text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg mb-8">
            Have questions or want to book a free demo class? Connect directly with our faculty team.
          </p>

          <div className="inline-flex items-center gap-4 p-3.5 pr-7 rounded-full lg-card border border-border shadow-md hover:border-primary/40 transition-all duration-300 group">
            <img
              src="/instructor.png"
              alt="Suman Bhagat"
              className="h-14 w-14 rounded-full object-cover border-2 border-primary/40 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                Suman Bhagat
                <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-500/10 text-blue-500 text-[10px]">✓</span>
              </p>
              <p className="text-xs text-muted-foreground font-medium">Assistant Professor · St. Xavier&apos;s College</p>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="section-container mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://wa.me/919508387397"
              target="_blank"
              rel="noopener noreferrer"
              className="lg-card rounded-2xl p-6 ambient-glow group flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Fastest response time</p>
              <span className="text-sm font-semibold text-emerald-500 hover:underline mt-auto flex items-center gap-1">Chat Now &rarr;</span>
            </a>

            <a
              href="tel:+919508387397"
              className="lg-card rounded-2xl p-6 ambient-glow group flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Phone Call</h3>
              <p className="text-sm text-muted-foreground mb-4">{CONTACT_INFO.whatsapp}</p>
              <span className="text-sm font-semibold text-blue-500 hover:underline mt-auto flex items-center gap-1">Call Now &rarr;</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="lg-card rounded-2xl p-6 ambient-glow group flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Email Us</h3>
              <p className="text-sm text-muted-foreground mb-4 truncate max-w-[200px]">{CONTACT_INFO.email}</p>
              <span className="text-sm font-semibold text-amber-500 hover:underline mt-auto flex items-center gap-1">Send Email &rarr;</span>
            </a>

            <div className="lg-card rounded-2xl p-6 ambient-glow flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 group">
              <div className="h-14 w-14 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground mb-4">{CONTACT_INFO.location}</p>
              <span className="text-sm font-semibold text-purple-500 mt-auto">Visit Us</span>
            </div>
          </div>
        </div>

        {/* ─── WHAT HAPPENS NEXT? (Exact replica of user reference) ─── */}
        <section className="py-20 border-t border-border bg-secondary/20">
          <div className="section-container">
            <FadeIn className="text-center mb-16">
              <h2 className="text-display text-3xl sm:text-4xl font-bold">
                What Happens Next?
              </h2>
            </FadeIn>

            {/* Horizontal timeline steps with dashed line */}
            <div className="relative mb-16">
              {/* Dashed connecting line across all 4 steps on md+ */}
              <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-foreground/30 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {STEPS.map((s) => (
                  <FadeIn key={s.num} delay={parseInt(s.num) * 0.1} className="flex flex-col items-center text-center">
                    <div className="h-14 w-14 rounded-full bg-foreground text-background font-extrabold text-xl flex items-center justify-center mb-4 shadow-md ring-4 ring-background">
                      {s.num}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                      {s.desc}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Dual Cards Below Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              <FadeIn delay={0.2}>
                <div className="lg-card rounded-2xl p-8 h-full flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                    <Rocket className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Your Learning Journey Starts Here</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We make coding simple, practical, and enjoyable for everyone. Whether you&apos;re a student, working professional, or complete beginner - we&apos;ve got you covered.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="lg-card rounded-2xl p-8 h-full flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">For Parents</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      You can talk to us first. We&apos;re happy to answer all your questions and guide your child in the right direction.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Centered Buttons */}
            <FadeIn delay={0.4} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#demo"
                onClick={(e) => {
                  e.preventDefault();
                  alert("To book your free demo class, chat with us directly on WhatsApp or call our support line!");
                }}
                className="px-8 py-4 rounded-xl bg-foreground text-background font-bold text-sm shadow-md transition-all duration-200 hover:opacity-95 hover:shadow-xl active:scale-98"
              >
                Book Free Demo Class
              </a>
              <a
                href="https://wa.me/919508387397"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl lg-card border-2 border-emerald-500 text-emerald-500 font-bold text-sm flex items-center gap-2 transition-all duration-200 hover:bg-emerald-500/10 hover:shadow-lg active:scale-98"
              >
                <MessageSquare className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
