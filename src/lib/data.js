import {
  Award, ShieldCheck, Trophy, Target, Heart, Medal,
  Languages, Home, CalendarCheck, Dumbbell,
} from "lucide-react";

// All PLACEHOLDER content for the fictional "Demo Studio" personal training
// business. Identity/config values live in site.config.js; this file holds the
// page content. Replace every entry per client.
export { BUSINESS as COACH } from "./site.config";

export const BENEFITS = [
  { icon: Home, title: "上门私教 · We Come To You", text: "Got a condo gym or space at home? We travel directly to you — no commuting, no waiting for machines. We also run sessions at our own fully equipped studio." },
  { icon: Languages, title: "Bilingual Coaching · 双语教学", text: "Seamless sessions in both English and 简体中文 (Simplified Chinese). Every cue, drill, and correction explained in the language you're most comfortable with." },
  { icon: Target, title: "Technique-First Programming", text: "Progressive strength, mobility, and conditioning plans built around your goals — from first session to advanced training blocks." },
  { icon: CalendarCheck, title: "Flexible Lifestyle Slots", text: "Early mornings to late evenings — premium tailored sessions that respect your busy schedule." },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Active & Past Clients" },
  { value: 5, suffix: "+ yrs", label: "Coaching Experience" },
  { value: 100, suffix: "%", label: "Focus on Safe Technique" },
  { value: 12, suffix: "", label: "Programs Offered" },
];

export const SERVICES = [
  { icon: Dumbbell, title: "Starter Strength Sessions", desc: "Safety-first, beginner-friendly sessions building core movement patterns and confidence in the gym.", duration: "40 min", level: "Beginner", price: "RM88+", popular: false },
  { icon: Trophy, title: "Full Performance Training", desc: "Full 1-hour comprehensive training focused on strength, conditioning, and athletic performance standards.", duration: "60 min", level: "All Levels", price: "RM103+", popular: true },
  { icon: ShieldCheck, title: "Return-to-Fitness Program", desc: "Gentle, step-by-step reconditioning to rebuild strength and confidence after a long break or injury, at your own pace.", duration: "45 min", level: "Beginner", price: "RM100", popular: false },
  { icon: Target, title: "Technique Fix & Advanced", desc: "Refining squat, hinge, press, and pull mechanics, plus advanced programming for experienced lifters.", duration: "45 min", level: "Intermediate", price: "Custom", popular: false },
];

export const PRICING = [
  {
    name: "1-Hour Standard Session",
    price: "💪 RM 130",
    per: "per session",
    desc: "Preferred for general fitness and strength goals.",
    features: ["⏱️ Full 60-minute comprehensive session", "📦 4-Session Package: RM 460", "🔥 8-Session Package: RM 888", "💎 10-Session Package: RM 1,030", "🚀 Premium mobile on-site option"],
    popular: true,
    cta: "Book 1-Hour Session"
  },
  {
    name: "40-Min Starter Session",
    price: "⚡ RM 100",
    per: "per session",
    desc: "Preferred for beginners and busy schedules.",
    features: ["⏱️ 40-minute high-focus session", "📦 6-Session Package: RM 552 (RM92/ea)", "✨ 10-Session Package: RM 880 (RM88/ea)", "⚡ Recommended: 2 sessions per week", "🏡 Conducted at our studio or your home gym"],
    popular: false,
    cta: "Book Starter Session"
  },
];

export const TESTIMONIALS = [
  { name: "Aisha", role: "Client · Verified review", rating: 5, source: "Demo Reviews", text: "Alex is a very kind and passionate trainer. Every movement is explained carefully and adjusted to my level. It felt like a proper structured program rather than just random exercises. All the equipment is provided too. Highly recommend!", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Jordan", role: "Client · Demo Reviews", rating: 5, source: "Demo Reviews", text: "Training with Demo Studio has been incredible. Under their guidance I learned proper squat, hinge, press, and pull technique, with clear improvement after every session. They never give up on their clients and create a positive, comfortable atmosphere.", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Wei Ling", role: "Client · Demo Reviews", rating: 5, source: "Demo Reviews", text: "A calm, encouraging and patient style that works with all ages — from complete beginners to those refining technique. Clear explanations, a safe supportive environment, and programs adapted to each client. Wholeheartedly recommended.", img: "https://i.pravatar.cc/150?img=32" },
];

export const TIMELINE = [
  { year: "2023", title: "In-House Pro Coaching", text: "Built extensive expertise guiding clients of all ages in premium gym environments." },
  { year: "2024", title: "First Aid & CPR Certified", text: "Earned nationally recognized first aid and CPR certifications for safe client care." },
  { year: "2025", title: "Certified Personal Trainer", text: "Completed an internationally accredited personal training certification and launched independent premium coaching across the city." },
  { year: "2026", title: "Demo Studio Opens", text: "Opened the flagship Demo Studio location and expanded to a full mobile coaching team." },
];

export const CERTS = [
  { icon: Award, label: "Certified Personal Trainer (Demo Cert)" },
  { icon: ShieldCheck, label: "First Aid Certified — Demo Council" },
  { icon: Heart, label: "CPR & AED Certified" },
  { icon: Medal, label: "Strength & Conditioning Specialist" },
];

export const FAQS = [
  { q: "Do you coach in Chinese or English? / 可以用中文授课吗？", a: "Yes! We coach fluently in both English and 简体中文 (Simplified Chinese). We'll switch naturally to whichever language you're most comfortable with, so nothing gets lost in translation. 我们可以全程用中文或英文授课，确保你完全听懂每一个动作要领。" },
  { q: "What does 上门私教 (mobile coaching) mean exactly?", a: "It means we travel directly to your location — your condo gym or your home setup — anywhere in Kuala Lumpur. You don't need to commute; we bring the coaching (and portable equipment) to your doorstep." },
  { q: "Which session length should I choose?", a: "For beginners or busy schedules, we recommend the 40-minute session as it keeps intensity and focus high. For general strength and performance goals, the 1-hour session offers full comprehensive programming." },
  { q: "Where do the sessions take place?", a: "Your choice: at our fully equipped Demo Studio location, or on-site at your residential condo gym or home setup in Kuala Lumpur." },
  { q: "What is your cancellation policy?", a: "Kindly reschedule or cancel at least 24 hours in advance so we can manage trainer scheduling. Late cancellations will count as 1 credit from your package." },
  { q: "How do payments work for packages?", a: "All billing for packages is processed smoothly via bank transfer prior to session scheduling." },
];

export const SCHEDULE = [
  { time: "6:00 AM", mon: "Strength Basics", tue: "Private Session", wed: "Strength Basics", thu: "Private Session", fri: "Conditioning" },
  { time: "9:00 AM", mon: "Beginner Program", tue: "Beginner Program", wed: "Mobility Flow", thu: "Beginner Program", fri: "Beginner Program" },
  { time: "4:00 PM", mon: "Technique Fix (1-on-1)", tue: "Mobile Session", wed: "Technique Fix (1-on-1)", thu: "Mobile Session", fri: "Technique Fix" },
  { time: "6:00 PM", mon: "Small Group Class", tue: "Advanced Strength", wed: "Small Group Class", thu: "Advanced Strength", fri: "Weekend Prep" },
];

export const SAFETY_TIPS = [
  { title: "Warm up first", text: "A focused 5–10 minute warm-up primes your joints and nervous system, and is the cheapest injury insurance there is." },
  { title: "Form before load", text: "Master the movement pattern with light weight before adding plates. Quality reps build strength; ugly reps build injuries." },
  { title: "Recover on purpose", text: "Sleep, hydration, and rest days are where progress actually happens. Train hard, recover harder." },
];

export const GALLERY = [
  { src: "/placeholders/gallery-1.svg", h: "tall", alt: "One-on-one coaching session at Demo Studio" },
  { src: "/placeholders/gallery-2.svg", h: "tall", alt: "Strength training session on the main floor" },
  { src: "/placeholders/gallery-3.svg", h: "tall", alt: "Coaching a beginner through fundamentals" },
  { src: "/placeholders/gallery-4.svg", h: "tall", alt: "Advanced training block in progress" },
  { src: "/placeholders/gallery-5.svg", h: "short", alt: "On-site session at a client's condo gym" },
  { src: "/placeholders/gallery-6.svg", h: "tall", alt: "Mobility and recovery work" },
  { src: "/placeholders/gallery-7.svg", h: "short", alt: "Small group training class" },
  { src: "/placeholders/gallery-8.svg", h: "short", alt: "Client milestone celebration" },
];

export const PARTNERS = ["Demo Cert Body", "First Aid Council", "KL Fitness Expo", "Wellness MY", "Strength Guild", "Condo Gyms KL"];

export const BLOG = [
  {
    category: "Getting Started",
    title: "New to training? Start here, not with max effort",
    readTime: "4 min read",
    excerpt: "Starting fitness is normal to find intimidating — and completely beatable. The secret is building the habit before chasing intensity.",
    body: [
      "If the thought of a gym makes you tense up, you're not alone — and it's nothing to be embarrassed about. The biggest mistake beginners make is rushing straight to heavy, exhausting workouts. Burnout in week one is the fastest way to quit, so the very first skill is learning to show up consistently.",
      "Start with two short sessions a week at an effort level that feels almost too easy. Spend the first few weeks just getting used to the movements and the routine. There's no rush and no pace to keep up with.",
      "Next, practise the fundamentals: squat, hinge, push, pull, and carry. These five patterns are the foundation everything else is built on — and they teach your body that training is safe and repeatable.",
      "Once the basics feel easy, we add load. Confident, consistent training is your 'reset button' for energy and stress. From there, progress comes fast.",
    ],
    tip: "Trainer's note: We never rush a nervous beginner. We move at your pace, one small win at a time — finishing your first full week is a real milestone worth celebrating.",
  },
  {
    category: "Technique",
    title: "The #1 breathing fix for stronger lifts",
    readTime: "5 min read",
    excerpt: "Most tired lifters aren't unfit — they're breathing wrong under load. Here's how to brace so you can lift more with less strain.",
    body: [
      "When lifters gas out mid-set, it's often not fitness. It's breath-holding at the wrong time. Poor breathing spikes your heart rate, wrecks your bracing, and triggers that panicky 'I need to stop NOW' feeling.",
      "The fix is rhythmic bracing. Before each rep, take a breath into your belly, brace your core like you're about to be poked, and exhale steadily through the hardest part of the lift.",
      "Equally important: don't rush between reps. Racing through a set with shallow breaths drops your form and creates risk. Instead, reset your breath at the top of each rep and keep the movement controlled.",
      "Practise this with lighter weights first until it becomes automatic. It feels awkward at first, then suddenly clicks.",
    ],
    tip: "Trainer's note: 'Brace before, exhale through.' If you remember nothing else about breathing under load, remember that — it solves most mid-set fatigue.",
  },
  {
    category: "Recovery",
    title: "Why you're sore and how to actually recover",
    readTime: "4 min read",
    excerpt: "Fatigue is the enemy of every training plan. Fixing your sleep and recovery habits is the fastest way to progress with less effort.",
    body: [
      "Training hard without recovering well massively increases fatigue — you end up working twice as hard for half the progress. The two biggest culprits are poor sleep and skipping rest days, and they're linked.",
      "Chasing soreness forces your body into a constant deficit, which stalls strength gains. Instead, treat sleep as part of the program: 7–9 hours, consistent times. This single adjustment improves nearly every training metric.",
      "Think of your week as a wave — hard days and easy days alternating. Just enough stimulus drives progress, but stacking hard days back-to-back kills your momentum, so keep it controlled.",
      "A recovered body is a strong body. The better you recover, the more quality work you can do on the same energy.",
    ],
    tip: "Trainer's note: We often track clients' sleep alongside their lifts. Seeing the connection once is worth a hundred lectures about rest days.",
  },
];
