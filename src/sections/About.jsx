import { motion } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading, Counter, Button } from "../components/UI";
import { STATS, TIMELINE, CERTS, COACH } from "../lib/data";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <Section id="about" className="bg-navy-900">
      {/* Intro split */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-aqua-500/20 to-transparent blur-2xl" />
            <img
              src="/images/coach-terris.jpeg"
              alt="Coach Terris at poolside"
              className="relative rounded-3xl object-cover w-full h-[480px] shadow-2xl ring-1 ring-white/10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass rounded-2xl p-5 max-w-[200px]"
            >
              <div className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <div key={c.label} className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5">
                    <c.icon className="h-3.5 w-3.5 text-aqua-400" />
                    <span className="text-[11px] font-medium text-white">{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal><Eyebrow>About the Coach</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <Heading className="mt-4">Meet {COACH.name}</Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              As a young, energetic coach and competitive triathlete, I've spent the last three years helping swimmers of every age and ability feel at home in the water — coaching fluently in both English and 简体中文. My approach is simple: build trust first, technique second. Confidence is the current that carries everything else.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 relative rounded-2xl border-l-4 border-aqua-500 bg-white/5 p-5">
              <Quote className="absolute -top-3 -left-1 h-8 w-8 text-aqua-500/40" />
              <p className="italic text-white/80">
                "Every great swimmer was once a beginner who refused to give up. My job is to make sure you never have to give up alone."
              </p>
              <p className="mt-3 text-sm font-semibold text-aqua-400">— Coaching Philosophy</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Button as="a" href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }} variant="outline" className="mt-7">
              Explore Lessons
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="font-display font-extrabold text-4xl sm:text-5xl gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-28">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow>The Journey</Eyebrow>
          <Heading className="mt-4">From Beginner Coach to Triathlete</Heading>
        </Reveal>

        <div className="relative mt-14 max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aqua-500/0 via-aqua-500/50 to-aqua-500/0 sm:-translate-x-1/2" />
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className={`relative flex items-start gap-6 pb-12 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className="hidden sm:block sm:w-1/2" />
                <span className="absolute left-4 sm:left-1/2 mt-1.5 h-4 w-4 -translate-x-1/2 rounded-full bg-aqua-400 ring-4 ring-navy-900 shadow-lg shadow-aqua-500/50" />
                <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="font-display font-bold text-aqua-400 text-lg">{t.year}</span>
                  <h4 className="mt-1 font-semibold text-white">{t.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
