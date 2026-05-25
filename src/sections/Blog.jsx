import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading, Pill } from "../components/UI";
import { BLOG } from "../lib/data";
import { BookOpen, ArrowRight, Lightbulb, X } from "lucide-react";

export default function Blog() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="blog" className="bg-navy-900">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Swimming Tips</Eyebrow>
        <Heading className="mt-4">Learn from the deck</Heading>
        <p className="mt-4 text-white/60 text-lg">
          Free, practical advice I share with every student — from beating water fear to fixing your freestyle breathing.
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {BLOG.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.08}>
            <button
              onClick={() => setOpen(i)}
              className="group flex h-full w-full flex-col rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:ring-aqua-500/40"
            >
              <div className="flex items-center justify-between">
                <Pill>{post.category}</Pill>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-500/15 text-aqua-400 group-hover:bg-gradient-to-br group-hover:from-aqua-400 group-hover:to-aqua-600 group-hover:text-navy-950 transition-all">
                  <BookOpen className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-white leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-white/40">{post.readTime}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-aqua-400">
                  Read tip <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Article modal */}
      <AnimatePresence>
        {open !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
              className="fixed inset-0 z-[80] bg-navy-950/80 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[90] grid place-items-center p-4 sm:p-6 pointer-events-none">
              <motion.article
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="pointer-events-auto relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-navy-800 ring-1 ring-white/10 p-7 sm:p-10"
              >
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close article"
                  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/70 hover:bg-white/15 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <Pill>{BLOG[open].category}</Pill>
                <h2 className="mt-4 font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight pr-10">
                  {BLOG[open].title}
                </h2>
                <p className="mt-2 text-sm text-white/40">{BLOG[open].readTime}</p>
                <div className="mt-6 space-y-4">
                  {BLOG[open].body.map((para, k) => (
                    <p key={k} className="text-white/75 leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 rounded-2xl border-l-4 border-aqua-500 bg-aqua-500/10 p-4">
                  <Lightbulb className="h-5 w-5 shrink-0 text-aqua-400" />
                  <p className="text-sm text-white/85 italic">{BLOG[open].tip}</p>
                </div>
              </motion.article>
            </div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}
