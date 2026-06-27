import {
  GraduationCap,
  Users,
  Briefcase,
  MessageSquare,
  BookOpen,
  Rocket,
  Target,
  Award,
  Code2,
  Cpu,
  Brain,
  Lightbulb,
  HandHelping,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";

/* ─── NAV ─── */

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ─── EDUCATOR ─── */

export const EDUCATOR = {
  name: "Suman Bhagat",
  role: "Assistant Professor",
  department: "Computer Science Department",
  institution: "St. Xavier's College, Ranchi",
  philosophy:
    "My goal is not just to teach programming. My goal is to help students develop confidence, logical thinking, and the ability to solve problems independently.",
  highlights: [
    "Concepts explained in simple language",
    "Focus on understanding, not memorization",
    "Practical coding with every lesson",
    "Structured learning for beginners",
  ],
};

/* ─── PROGRAMS (from reference) ─── */

export interface Program {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  icon: LucideIcon;
  accent: string;
  accentBg: string;
}

export const PROGRAMS: Program[] = [
  {
    title: "C Programming",
    subtitle: "The perfect starting point",
    description:
      "The perfect starting point for anyone new to programming. Build strong foundations with structured programming and problem-solving logic.",
    features: ["Basics to Advanced Topics", "Structured Programming", "Problem Solving Logic"],
    idealFor: "School Students, Beginners, and Early Learners",
    icon: Code2,
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
  },
  {
    title: "C++ Programming",
    subtitle: "Level up with OOP",
    description:
      "Level up your coding skills with object-oriented programming. Master OOP concepts, STL, functions, and real-world applications.",
    features: ["OOP Concepts", "STL and Functions", "Real-world Applications"],
    idealFor: "Students with basic programming knowledge",
    icon: Cpu,
    accent: "text-blue-400",
    accentBg: "bg-blue-400/10",
  },
  {
    title: "Python Programming",
    subtitle: "Powerful & beginner-friendly",
    description:
      "Powerful, beginner-friendly and in-demand programming. Learn Python fundamentals, data structures, and build mini projects.",
    features: ["Python Fundamentals", "Data Structures", "Mini Projects"],
    idealFor: "Beginners, Students and Aspiring Developers",
    icon: Brain,
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
  },
];

/* ─── CHALLENGES (from reference) ─── */

export interface Challenge {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const CHALLENGES: Challenge[] = [
  {
    title: "Concepts Feel Confusing",
    description: "Many topics are hard to understand without clear explanations.",
    icon: Lightbulb,
  },
  {
    title: "Tutorials Move Too Fast",
    description: "Online videos often skip basics and move too quickly.",
    icon: Rocket,
  },
  {
    title: "Fear of Making Mistakes",
    description: "Students hesitate to code due to fear of errors and failure.",
    icon: ShieldCheck,
  },
  {
    title: "No Clear Learning Path",
    description: "Random learning makes it hard to track progress and build confidence.",
    icon: Layers,
  },
];

/* ─── WHY US (from reference) ─── */

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    title: "University Faculty",
    description:
      "Learn from an experienced educator and computer science faculty member with academic expertise.",
    icon: GraduationCap,
  },
  {
    title: "Built for Beginners",
    description:
      "Courses designed to start from the basics and take you to a confident coding level.",
    icon: BookOpen,
  },
  {
    title: "Understand, Don't Memorize",
    description:
      "Focus on concept clarity so you can apply knowledge instead of just remembering it.",
    icon: Target,
  },
  {
    title: "Practice Every Concept",
    description:
      "Hands-on coding exercises help you strengthen understanding through practice.",
    icon: Code2,
  },
  {
    title: "Personal Guidance",
    description:
      "Get individual support, doubt clarification and learning assistance.",
    icon: HandHelping,
  },
  {
    title: "Build Real Confidence",
    description:
      "Step-by-step learning builds confidence and helps you code independently.",
    icon: Award,
  },
];

/* ─── COMPARISON (from reference) ─── */

export const COMPARISON = {
  others: {
    label: "Random Tutorials",
    points: [
      "Unstructured and confusing",
      "No proper guidance",
      "Hard to ask doubts",
      "Inconsistent learning",
      "Low confidence",
    ],
  },
  us: {
    label: "Coding Gyan",
    points: [
      "Structured step-by-step learning",
      "Expert guidance from a faculty",
      "Doubt support and personal attention",
      "Practical coding with every concept",
      "Strong foundation and confidence",
    ],
  },
};

/* ─── ROADMAP ─── */

export interface RoadmapStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    title: "Foundations",
    description: "Variables, loops, functions — build strong programming fundamentals with C.",
    icon: BookOpen,
  },
  {
    title: "Object-Oriented Programming",
    description: "Master OOP with C++ — classes, inheritance, polymorphism, and STL.",
    icon: Layers,
  },
  {
    title: "Python & Problem Solving",
    description: "Learn Python, data structures, and algorithmic thinking.",
    icon: Brain,
  },
  {
    title: "Projects & Portfolio",
    description: "Build real mini-projects that demonstrate your skills.",
    icon: Target,
  },
  {
    title: "Confidence & Independence",
    description: "Code independently, debug fearlessly, and prepare for what's next.",
    icon: Rocket,
  },
];

/* ─── TESTIMONIALS (from reference) ─── */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  course: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was completely new to coding. Suman Ma'am explained every concept so clearly that I could write my first C program within a week!",
    name: "Rahul Kumar",
    role: "School Student",
    course: "C Programming",
    initials: "RK",
  },
  {
    quote:
      "The way OOP concepts were taught in C++ was amazing. I finally understood what classes and objects actually mean in real code.",
    name: "Priya Singh",
    role: "College Student",
    course: "C++ Programming",
    initials: "PS",
  },
  {
    quote:
      "Python seemed scary before. Now I've built my first mini project. The personal guidance made all the difference.",
    name: "Amit Sharma",
    role: "Beginner",
    course: "Python Programming",
    initials: "AS",
  },
];

/* ─── PRICING ─── */

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Begin your programming journey with a single language.",
    features: [
      "Access to one language course",
      "Weekly doubt-clearing sessions",
      "Practice exercises with solutions",
      "Course completion certificate",
      "Community access",
    ],
    cta: "Start Learning",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    description: "Master all three languages with personal mentorship.",
    features: [
      "All three language courses",
      "1-on-1 doubt sessions with faculty",
      "Mini project guidance",
      "Code review & feedback",
      "Priority support",
      "All certificates included",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Complete",
    price: "₹3,499",
    period: "/month",
    description: "Full career preparation with placement support.",
    features: [
      "Everything in Pro",
      "Resume & portfolio building",
      "Mock interview practice",
      "Industry referral support",
      "Capstone project mentorship",
      "Lifetime community access",
    ],
    cta: "Get Complete Access",
    popular: false,
  },
];

/* ─── FAQ ─── */

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "Not at all. Our courses are designed for complete beginners. We start from the absolute basics — what a variable is, how loops work — and build up step by step.",
  },
  {
    question: "What programming languages will I learn?",
    answer:
      "We offer structured courses in C, C++, and Python. C builds your foundation, C++ introduces object-oriented programming, and Python opens doors to modern development and data science.",
  },
  {
    question: "How are the courses structured?",
    answer:
      "Each course follows: concept explanation → guided examples → hands-on practice → mini projects. You'll never feel lost because every step builds on the previous one.",
  },
  {
    question: "Who is the instructor?",
    answer:
      "Suman Bhagat, Assistant Professor in the Computer Science Department at St. Xavier's College, Ranchi. With years of academic teaching experience, she brings clarity and structure to every lesson.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. All materials are available on-demand. While we recommend a structured schedule, you have full flexibility. Recordings of all live sessions are always available.",
  },
  {
    question: "What makes this different from YouTube tutorials?",
    answer:
      "Structure, mentorship, and accountability. Free tutorials are scattered and lack progression. Here you get a curated learning path, personal doubt resolution, and real projects.",
  },
];

/* ─── FOOTER ─── */

export const FOOTER_LINKS = {
  Programs: [
    { label: "C Programming", href: "#programs" },
    { label: "C++ Programming", href: "#programs" },
    { label: "Python Programming", href: "#programs" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "WhatsApp", href: "https://wa.me/919508387397" },
    { label: "Email Us", href: "mailto:codinggyan.learn@gmail.com" },
  ],
} as const;

export const CONTACT_INFO = {
  whatsapp: "+91 9508387397",
  email: "codinggyan.learn@gmail.com",
  location: "Ranchi, Jharkhand, India",
};
