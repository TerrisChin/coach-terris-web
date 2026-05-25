import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section, Reveal, Eyebrow, Heading } from "../components/UI";
import { GALLERY } from "../lib/data";
import { MoveHorizontal } from "lucide-react";

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

  const onMove = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl ring-1 ring-white/10 cursor-ew-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onClick={(e) => onMove(e.clientX)}
    >
      <img src="/images/g5-condo-pool.jpeg" alt="On-site lesson at a Kajang condo pool" className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute top-4 left-4 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Pearl Avenue, Kajang</span>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src="/images/g1-lesson-poolside.jpeg" alt="On-site lesson at a Cheras condo pool" className="absolute inset-0 h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        <span className="absolute top-4 left-4 rounded-full bg-aqua-500 px-3 py-1 text-xs font-bold text-navy-950">You Residence, Cheras</span>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-aqua-400 shadow-lg" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-aqua-400 text-navy-950 shadow-xl">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-navy-950">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Gallery</Eyebrow>
        <Heading className="mt-4">Moments in the water</Heading>
        <p className="mt-4 text-white/60 text-lg">Real lessons at real condo pools across KL. Drag the slider to peek at two of the residences where I coach week to week.</p>
      </Reveal>

      {/* Before / After */}
      <Reveal delay={0.1} className="mt-12 max-w-3xl mx-auto">
        <BeforeAfter />
      </Reveal>

      {/* Masonry */}
      <div className="mt-12 columns-2 lg:columns-4 gap-4 space-y-4">
        {GALLERY.map((g, i) => (
          <Reveal key={i} delay={(i % 4) * 0.06}>
            <motion.div whileHover={{ scale: 1.02 }} className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-sm font-medium text-white">{g.alt}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
