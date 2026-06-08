import { motion } from "framer-motion";
import { MessageCircle, PlayCircle, ChevronDown } from "lucide-react";
import { Button } from "../components/UI";
import { COACH } from "../lib/data";
import { useCalendly } from "../useCalendly";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } } };

export default function Hero() {
  const { openPopup } = useCalendly();
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/g6-dive.jpeg"
          alt="Coach Terris diving into the pool during training"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950" />
        <div className="absolute inset-0 caustics animate-pulse" style={{ animationDuration: "8s" }} />
      </div>

      {/* Floating light orbs */}
      <div className="absolute top-1/4 left-[10%] h-72 w-72 rounded-full bg-aqua-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[8%] h-80 w-80 rounded-full bg-navy-400/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-28 pb-32"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua-400" />
          </span>
          <span className="text-sm font-medium text-white/90">Now accepting new students · {COACH.tagline}</span>
        </motion.div>

        <motion.h1 variants={item} className="font-display font-extrabold tracking-tight text-white max-w-4xl text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
          Learn Swimming<br />
          with <span className="gradient-text">Confidence</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg sm:text-xl text-white/70 leading-relaxed">
          Premium on-site swimming lessons for kids and adults — at your own condo or home pool across KL, Cheras &amp; Kajang. From your first float to a confident freestyle.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Button onClick={openPopup} className="text-base">
            <PlayCircle className="h-5 w-5" /> Book a Trial Class
          </Button>
          <Button as="a" href={COACH.whatsapp} target="_blank" rel="noreferrer" variant="secondary" className="text-base">
            <MessageCircle className="h-5 w-5 text-aqua-400" /> WhatsApp Now
          </Button>
        </motion.div>

        {/* Mini trust row */}
        <motion.div variants={item} className="mt-12 flex items-center gap-5">
          <div className="flex -space-x-3">
            {[47, 12, 32, 68, 45].map((n) => (
              <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="" className="h-10 w-10 rounded-full border-2 border-navy-950 object-cover" />
            ))}
          </div>
          <div className="text-sm">
            <div className="flex text-aqua-400">{"★★★★★"}</div>
            <span className="text-white/70">Trusted by <strong className="text-white">100+</strong> happy swimmers</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Layered animated waves */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 leading-[0]">
        <svg className="relative block w-[200%] h-24 animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,100 900,0 1200,60 L1200,120 L0,120 Z" className="fill-aqua-500/10" />
        </svg>
        <svg className="absolute bottom-0 block w-[200%] h-20 animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C400,10 800,110 1200,50 L1200,120 L0,120 Z" className="fill-navy-900" />
        </svg>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
