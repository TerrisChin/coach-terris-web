import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, X } from "lucide-react";
import { COACH } from "../lib/data";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setTip(true), 3500);
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full glass text-white hover:bg-white/20 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {tip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="absolute bottom-1 right-16 w-max max-w-[200px] rounded-2xl rounded-br-sm bg-white px-4 py-2.5 shadow-xl"
            >
              <button onClick={() => setTip(false)} className="absolute -top-2 -left-2 grid h-5 w-5 place-items-center rounded-full bg-navy-900 text-white">
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm font-medium text-navy-900">👋 Questions? Chat with Coach Terris!</p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href={COACH.whatsapp} target="_blank" rel="noreferrer"
          aria-label="Contact on WhatsApp"
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <MessageCircle className="relative h-7 w-7" fill="currentColor" />
        </motion.a>
      </div>
    </div>
  );
}
