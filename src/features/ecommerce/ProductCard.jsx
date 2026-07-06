import { motion } from "framer-motion";
import { Pill } from "../../components/UI";
import { ArrowRight } from "lucide-react";
import { featureFlags } from "../../lib/site.config";

export default function ProductCard({ product, onSelect }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      onClick={() => onSelect(product)}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 text-left transition-colors hover:ring-aqua-500/40"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name.en}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute top-4 left-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
            {featureFlags.bilingual ? "Out of stock · 缺货" : "Out of stock"}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Pill tone="navy">{product.category}</Pill>
        <h3 className="mt-3 font-display font-bold text-lg text-white leading-snug">{product.name.en}</h3>
        {featureFlags.bilingual && <p className="text-sm text-white/50">{product.name.zh}</p>}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="font-display font-extrabold text-xl text-white">RM {product.price}</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-aqua-400">
            View <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
