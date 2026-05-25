import { motion } from "framer-motion";
import { Waves } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-950"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-aqua-400 to-aqua-600 shadow-lg shadow-aqua-500/40"
        >
          <Waves className="h-8 w-8 text-navy-950" strokeWidth={2.5} />
        </motion.div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }} animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-aqua-400 to-transparent"
          />
        </div>
        <p className="font-display font-semibold text-white/60 tracking-wide">Diving in…</p>
      </div>
    </motion.div>
  );
}
