import {
  Award, Baby, Waves, Target, ShieldCheck, Trophy,
  Clock, CalendarCheck, UserCheck, Heart, Star, Medal, Zap, Languages, Home
} from "lucide-react";

export const COACH = {
  name: "Terris Chin",
  short: "Coach Terris",
  tagline: "Professional Mobile (上门) Swimming Coach · Bilingual EN/中文 · KL, Cheras & Kajang.",
  phone: "+60 11-2623 9514",
  whatsapp: "https://wa.me/601126239514",
  email: "chinterris@gmail.com",
  location: "I travel to you — KL, Cheras & Kajang area",
  venues: ["You Residence, Cheras", "Pearl Avenue, Sungai Chua, Kajang"],
  booking: "https://calendar.app.google/CQdioQgTkKkHB1V26",
  languages: "English & 简体中文 (Simplified Chinese)",
  hours: [
    { day: "Mon – Fri", time: "6:00 AM – 9:00 PM" },
    { day: "Saturday", time: "7:00 AM – 6:00 PM" },
    { day: "Sunday", time: "8:00 AM – 2:00 PM" },
  ],
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    tiktok: "#",
    xiaohongshu: "https://xhslink.com/m/9ASEiuVhv4a",
    superprof: "https://www.superprof.com.my/certified-swim-coach-bronze-medallion-cpr-offering-lessons-your-pool-patient-friendly-safe-for-kids-adults.html",
  },
};

export const BENEFITS = [
  { icon: Home, title: "上门教学 · I Come To Your Pool", text: "Got a condo or private home pool? I travel directly to you — no commuting, no booking a venue. I already coach regularly at You Residence (Cheras) and Pearl Avenue (Sungai Chua, Kajang)." },
  { icon: Languages, title: "Bilingual Coaching · 双语教学", text: "Seamless lessons in both English and 简体中文 (Simplified Chinese). Every instruction, drill, and correction explained in the language you're most comfortable with." },
  { icon: Target, title: "Pro Technique & Triathletes", text: "Advanced stroke correction, power endurance, and MetCon training for competitive swimmers and triathletes." },
  { icon: CalendarCheck, title: "Flexible Lifestyle Slot", text: "Early mornings to late evenings — premium tailored lessons that respect your busy schedule." },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Active & Past Students" },
  { value: 3, suffix: "+ yrs", label: "Teaching Experience" },
  { value: 100, suffix: "%", label: "Focus on Water Safety" },
  { value: 2026, suffix: "", label: "Asia Triathlon Cup Finisher" },
];

export const SERVICES = [
  { icon: Baby, title: "Junior Confidence Lessons", desc: "Safety-first, age-appropriate lessons building core water skills and fun for young children under 8 years old.", duration: "40 min", level: "Kids (Under 8)", price: "RM88+", popular: false },
  { icon: Trophy, title: "Youth & Adult Development", desc: "Full 1-hour comprehensive training focused on stamina, stroke endurance, and full competitive standard swim techniques.", duration: "60 min", level: "Ages 8 & Above", price: "RM103+", popular: true },
  { icon: ShieldCheck, title: "Water Confidence Training", desc: "Gentle 3-step desensitization and psychological guiding to overcome deep water phobia at your own pace.", duration: "45 min", level: "Beginner", price: "RM100", popular: false },
  { icon: Target, title: "Stroke Fix & Advanced", desc: "Refining Freestyle (rotation), Breaststroke (kick power), Backstroke, and fast-track Butterfly via fins.", duration: "45 min", level: "Intermediate", price: "Custom", popular: false },
];

export const PRICING = [
  {
    name: "1-Hour Standard Class",
    price: "🏊 RM 130",
    per: "per class",
    desc: "Preferred for ages 8 and above.",
    features: ["⏱️ Full 60-minute comprehensive lesson", "📦 4-Class Package: RM 460", "🔥 8-Class Package: RM 888", "💎 10-Class Package: RM 1,030", "🚀 Premium mobile on-site service"],
    popular: true,
    cta: "Book 1-Hour Class"
  },
  {
    name: "40-Min Junior Class",
    price: "👶 RM 100",
    per: "per class",
    desc: "Preferred for ages 8 and below.",
    features: ["⏱️ 40-minute high-focus lesson", "📦 6-Class Package: RM 552 (RM92/cl)", "✨ 10-Class Package: RM 880 (RM88/cl)", "⚡ Recommended: 2 classes per week", "🏡 Conducted safely at your home pool"],
    popular: false,
    cta: "Book Junior Class"
  },
];

export const TESTIMONIALS = [
  { name: "Hyejin", role: "Parent · Verified Superprof review", rating: 5, source: "Superprof", text: "Terris is a very kind and passionate teacher. He pays close attention to each child's movements and teaches carefully. It felt like a proper swimming lesson rather than just playing in the water. He even speaks a little Korean and brings all the equipment like kickboards. Highly recommend!", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Jorson", role: "Student · Superprof", rating: 5, source: "Superprof", text: "Learning with Coach Terris has been incredible. Under his guidance I learned freestyle, breaststroke, backstroke and butterfly, with clear improvement after every class. He never gives up on his students and creates a positive, comfortable atmosphere. I gained not just swimming skills but confidence and discipline.", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Wong", role: "Student · Superprof", rating: 5, source: "Superprof", text: "His calm, encouraging and patient style makes him effective with all ages — from complete beginners to those refining technique. He creates a safe, supportive environment, explains clearly, and adapts to each student. Knowledgeable, reliable and truly supportive. Wholeheartedly recommended.", img: "https://i.pravatar.cc/150?img=32" },
];

export const TIMELINE = [
  { year: "2024", title: "In-House Pro Coaching", text: "Built extensive expertise guiding children and high-net-worth families in elite environments." },
  { year: "2024", title: "Life Saving & EAR Certified", text: "Earned the Bronze Medallion and Expired Air Resuscitation certificates from The Life Saving Society of Malaysia." },
  { year: "2025", title: "Certified Swimming Instructor", text: "Completed the SWIM THE WORLD Swimming Teacher Training Course (Teaching Kids & Adults), and launched independent premium mobile coaching across Cheras, Kajang & KL prime condos." },
  { year: "2026", title: "Asia Triathlon Cup Finisher", text: "Successfully completed Putrajaya Super Sprint Triathlon (300m Open Water Swim in 8:45, 10km Cycle, 2.5km Run)." },
];

export const CERTS = [
  { icon: Award, label: "SWIM THE WORLD Certified Instructor" },
  { icon: ShieldCheck, label: "Bronze Medallion — Life Saving Society of Malaysia" },
  { icon: Heart, label: "Expired Air Resuscitation (EAR) Certified" },
  { icon: Medal, label: "Asia Triathlon Cup 2026 Finisher" },
];

export const FAQS = [
  { q: "Do you teach in Chinese or English? / 可以用中文教学吗？", a: "Yes! I coach fluently in both English and 简体中文 (Simplified Chinese). I'll switch naturally to whichever language you or your child understand best, so nothing gets lost in translation. 我可以全程用中文或英文教学，确保你和孩子都能完全听懂每一个动作要领。" },
  { q: "What does 上门教学 (mobile coaching) mean exactly?", a: "It means I travel directly to your location — your condo's pool or your private home pool — anywhere in KL, Cheras, or Kajang. You don't need to commute or arrange a venue; I bring the coaching to your doorstep." },
  { q: "Which class duration should I choose for my child?", a: "For children under 8 years old, we highly recommend the 40-minute lesson as it perfectly aligns with their physical stamina and attention span. For ages 8 and above, the 1-hour class offers full comprehensive stamina and technique building." },
  { q: "Where do the lessons take place?", a: "I provide premium on-site mobile services. Lessons are conducted at your residential condo pool or private home pool in KL, Cheras, or Kajang." },
  { q: "What is your cancellation policy?", a: "Kindly reschedule or cancel at least 24 hours in advance so I can manage my travel routing across KL districts. Late cancellations will count as 1 credit from your package." },
  { q: "How do payments work for packages?", a: "All billing for packages is processed smoothly via bank transfer directly to my management account prior to session scheduling." },
];

export const SCHEDULE = [
  { time: "6:00 AM", mon: "Triathlon Drills", tue: "Private Fit", wed: "Triathlon Drills", thu: "Private Fit", fri: "Open Water Card" },
  { time: "9:00 AM", mon: "Kids Confidence", tue: "Kids Confidence", wed: "Adult Beginner", thu: "Kids Confidence", fri: "Kids Confidence" },
  { time: "4:00 PM", mon: "Stroke Fix (1-on-1)", tue: "Private Mobile", wed: "Stroke Fix (1-on-1)", thu: "Private Mobile", fri: "Stroke Fix" },
  { time: "6:00 PM", mon: "Condo Group Class", tue: "Adult Tech", wed: "Condo Group Class", thu: "Adult Tech", fri: "Weekend Prep" },
];

export const SAFETY_TIPS = [
  { title: "Star Float First", text: "Mastering horizontal relaxation ensures you always have a safe reset button in deep water." },
  { title: "Respect open water", text: "Pool swimming is different from lakes or seas. Focus on sight navigation and rhythmic breathing." },
  { title: "Exhale below, inhale above", text: "Never hold your breath under water; continuous steady bubbling ensures relaxed lungs." },
];

export const GALLERY = [
  { src: "/images/g2-kid-peace-sign.jpeg", h: "tall", alt: "Coach Terris with a happy young student at a KL condo pool" },
  { src: "/images/g1-lesson-poolside.jpeg", h: "tall", alt: "Poolside lesson at a residential condo in Cheras" },
  { src: "/images/g4-kickboard.jpeg", h: "tall", alt: "Teaching a child to float with a kickboard" },
  { src: "/images/g6-dive.jpeg", h: "tall", alt: "Coach Terris diving — competitive training" },
  { src: "/images/g3-noodle-coaching.jpeg", h: "tall", alt: "Pool noodle confidence drill with a young swimmer" },
  { src: "/images/g5-condo-pool.jpeg", h: "short", alt: "On-site coaching at a Kajang condo pool" },
  { src: "/images/team-photo.jpeg", h: "short", alt: "Team Training Session" },
  { src: "/images/medals.jpeg", h: "short", alt: "4th Butterfly 50m & 3rd Relay" },
];

export const PARTNERS = ["SWIM THE WORLD", "Life Saving Society MY", "Asia Triathlon", "Putrajaya Tri", "KL Condo Pools", "Cheras Aquatics"];

export const BLOG = [
  {
    category: "Water Confidence",
    title: "Scared of the water? Start here, not with strokes",
    readTime: "4 min read",
    excerpt: "Fear of water is normal and completely beatable. The secret is to spend time just being in the water before thinking about any technique.",
    body: [
      "If the thought of water makes you tense up, you're not alone — and it's nothing to be embarrassed about. The biggest mistake beginners make is rushing straight to strokes. Tension actually makes you sink, so the very first skill is learning to relax.",
      "Start in the shallow end where you can stand comfortably. Spend a few sessions just getting used to the feeling of water on your body. There's no rush and no pace to keep up with.",
      "Next, practise face dips: hold the wall, take a breath, dip your face in and slowly blow bubbles out through your nose and mouth. This single drill teaches your body that water near your face is safe — and it's the foundation everything else is built on.",
      "Once bubbles feel easy, we add floating. Relaxed, horizontal floating is your safe 'reset button' in any pool. From there, confidence grows fast.",
    ],
    tip: "Coach's note: I never rush a nervous swimmer. We move at your pace, one small win at a time — floating for 10 seconds is a real milestone worth celebrating.",
  },
  {
    category: "Breathing",
    title: "The #1 breathing fix for smoother freestyle",
    readTime: "5 min read",
    excerpt: "Most tired swimmers aren't unfit — they're holding their breath. Here's how to breathe so you can swim further with less effort.",
    body: [
      "When swimmers gas out after one lap, it's almost never fitness. It's breath-holding. Holding your breath lets carbon dioxide build up, which triggers that panicky 'I need air NOW' feeling and wrecks your rhythm.",
      "The fix is continuous exhaling. While your face is in the water, breathe out steadily through your nose and mouth — a slow, constant stream of bubbles. By the time you rotate to breathe, your lungs are already empty and ready for a quick, easy inhale.",
      "Equally important: don't lift your head to breathe. Lifting drops your hips and creates drag. Instead, rotate your whole body and keep one goggle in the water as you turn for air. The breath should be small, quick, and low.",
      "Practise bilateral breathing (every 3 strokes, alternating sides) to balance your stroke and build endurance. It feels awkward at first, then suddenly clicks.",
    ],
    tip: "Coach's note: 'Exhale below, inhale above.' If you remember nothing else about breathing, remember that — it solves 80% of freestyle fatigue.",
  },
  {
    category: "Technique",
    title: "Body position: why you sink and how to glide",
    readTime: "4 min read",
    excerpt: "Drag is the enemy of every swimmer. Fixing your head and hip position is the fastest way to swim faster with less work.",
    body: [
      "Failing to swim straight and flat through the water massively increases drag — you end up working twice as hard to move forward. The two biggest culprits are head position and sinking hips, and they're linked.",
      "Looking forward forces you to arch your lower back, which drops your hips and legs. Instead, tuck your chin slightly and look down at the bottom of the pool. This single adjustment lifts your hips and puts you in a streamlined, horizontal line.",
      "Think of your body rotating gently from side to side like a pendulum — driven from the hips and core, not just the shoulders. Just enough rotation helps you reach further and breathe easily, but over-rotating kills your momentum, so keep it controlled.",
      "A streamlined body is a narrow body. The less water you push against, the faster and longer you swim on the same energy.",
    ],
    tip: "Coach's note: I often film students underwater so they can see their body line. Seeing it once is worth a hundred verbal corrections.",
  },
];

