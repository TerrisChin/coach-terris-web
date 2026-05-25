import { Reveal, Button, Section } from "../components/UI";
import { PARTNERS, COACH, GALLERY } from "../lib/data";
import { Instagram, Sparkles } from "lucide-react";

export function TrialBanner() {
  return (
    <Section className="bg-navy-950">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-aqua-500 via-aqua-600 to-navy-600 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 caustics opacity-60" />
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/20 px-4 py-1.5 text-sm font-semibold text-navy-950">
              <Sparkles className="h-4 w-4" /> Limited spots this month
            </span>
            <h2 className="mt-5 font-display font-extrabold text-3xl sm:text-5xl text-navy-950 text-balance">
              Your first lesson is the hardest.<br className="hidden sm:block" /> Let's take it together.
            </h2>
            <p className="mt-4 text-navy-950/80 text-lg max-w-xl mx-auto">
              Book a $25 trial session — assess your level, meet your coach, and leave with a plan. Zero pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="a" href={COACH.booking} target="_blank" rel="noreferrer" variant="secondary" className="!bg-navy-950 !text-white !border-navy-950 hover:!bg-navy-900">
                Claim Your Trial
              </Button>
              <Button as="a" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} variant="outline" className="!border-navy-950 !text-navy-950 hover:!bg-navy-950 hover:!text-white">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Partners() {
  return (
    <Section className="bg-navy-900 !py-16">
      <Reveal className="text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-white/40">Trusted partners & affiliations</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {PARTNERS.map((p) => (
            <span key={p} className="font-display font-bold text-lg sm:text-xl text-white/30 hover:text-aqua-400 transition-colors">{p}</span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function InstagramFeed() {
  const imgs = GALLERY.slice(0, 6);
  return (
    <Section className="bg-navy-950 !pt-8">
      <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2.5">
          <Instagram className="h-6 w-6 text-aqua-400" />
          <span className="font-display font-bold text-xl text-white">@coachterris.swim</span>
        </div>
        <a href={COACH.socials.instagram} className="text-sm font-semibold text-aqua-400 hover:text-aqua-300">Follow on Instagram →</a>
      </Reveal>
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {imgs.map((g, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <a href={COACH.socials.instagram} className="group relative block aspect-square overflow-hidden rounded-xl">
              <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-navy-950/0 group-hover:bg-navy-950/50 transition-colors">
                <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
