import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading } from "../components/UI";
import { TESTIMONIALS, COACH } from "../lib/data";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const n = TESTIMONIALS.length;

  const go = useCallback((d) => {
    setDir(d);
    setIdx((p) => (p + d + n) % n);
  }, [n]);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[idx];

  return (
    <Section id="testimonials" className="bg-navy-900 overflow-hidden">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Testimonials</Eyebrow>
        <Heading className="mt-4">Loved by swimmers & parents</Heading>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full glass px-5 py-2.5">
          <span className="flex text-aqua-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-aqua-400 text-aqua-400" />
            ))}
          </span>
          <span className="text-sm text-white/80"><strong className="text-white">5.0</strong> rating · verified reviews on <strong className="text-white">Superprof</strong></span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-14 max-w-3xl mx-auto">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 h-16 w-16 text-aqua-500/15" />
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-aqua-400 text-aqua-400" />
                  ))}
                </div>
                <p className="font-display text-xl sm:text-2xl leading-relaxed text-white text-balance">
                  "{t.text}"
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-aqua-500/40" />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{t.name}</span>
                      {t.source && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-aqua-500/15 px-2 py-0.5 text-[10px] font-semibold text-aqua-300 ring-1 ring-aqua-500/30">
                          <BadgeCheck className="h-3 w-3" /> Verified
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-white/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full glass text-white hover:bg-aqua-500 hover:text-navy-950 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} aria-label={`Go to ${i + 1}`} className={`h-2 rounded-full transition-all ${i === idx ? "w-7 bg-aqua-400" : "w-2 bg-white/25"}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full glass text-white hover:bg-aqua-500 hover:text-navy-950 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 text-center">
            <a href={COACH.socials.superprof} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-400 hover:text-aqua-300 transition-colors">
              Read all verified reviews on Superprof
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
