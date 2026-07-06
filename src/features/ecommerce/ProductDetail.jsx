import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Button } from "../../components/UI";
import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { buildWhatsAppOrderUrl } from "./buildOrderMessage";
import { featureFlags } from "../../lib/site.config";

// Modal product view with a quantity stepper and a "Order via WhatsApp" CTA
// (cart-free: one product per order keeps the flow simple for small clients).
export default function ProductDetail({ product, onClose }) {
  const [qty, setQty] = useState(1);

  // Reset quantity whenever a different product opens
  useEffect(() => setQty(1), [product?.id]);

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-navy-950/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[90] grid place-items-center p-4 sm:p-6 pointer-events-none">
            <motion.article
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="pointer-events-auto relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-navy-800 ring-1 ring-white/10"
            >
              <button
                onClick={onClose}
                aria-label="Close product"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-navy-950/60 text-white/80 hover:bg-navy-950 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid sm:grid-cols-2">
                <div className="relative aspect-square sm:aspect-auto sm:min-h-full">
                  <img src={product.image} alt={product.name.en} className="absolute inset-0 h-full w-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                  <Pill tone="navy">{product.category}</Pill>
                  <h2 className="mt-4 font-display font-extrabold text-2xl text-white leading-tight">{product.name.en}</h2>
                  {featureFlags.bilingual && <p className="text-white/50">{product.name.zh}</p>}

                  <p className="mt-4 text-sm text-white/70 leading-relaxed">{product.desc.en}</p>
                  {featureFlags.bilingual && (
                    <p className="mt-2 text-sm text-white/55 leading-relaxed">{product.desc.zh}</p>
                  )}

                  <div className="mt-5 font-display font-extrabold text-3xl text-white">
                    RM {product.price}
                    <span className="ml-1 text-sm font-normal text-white/50">/ each</span>
                  </div>

                  {product.inStock ? (
                    <>
                      {/* Quantity stepper */}
                      <div className="mt-5 flex items-center gap-4">
                        <span className="text-sm text-white/60">{featureFlags.bilingual ? "Qty 数量" : "Qty"}</span>
                        <div className="flex items-center gap-1 rounded-full bg-navy-950/60 border border-white/10 p-1">
                          <button
                            onClick={() => setQty((q) => Math.max(1, q - 1))}
                            aria-label="Decrease quantity"
                            className="grid h-8 w-8 place-items-center rounded-full text-white/80 hover:bg-white/10 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold text-white">{qty}</span>
                          <button
                            onClick={() => setQty((q) => Math.min(99, q + 1))}
                            aria-label="Increase quantity"
                            className="grid h-8 w-8 place-items-center rounded-full text-white/80 hover:bg-white/10 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="ml-auto text-sm text-white/60">
                          Total <strong className="text-white">RM {product.price * qty}</strong>
                        </span>
                      </div>

                      <Button
                        as="a"
                        href={buildWhatsAppOrderUrl(product, qty)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 w-full"
                      >
                        <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                      </Button>
                      <p className="mt-3 text-center text-xs text-white/40">
                        Opens WhatsApp with your order pre-filled — confirm payment and delivery in the chat.
                      </p>
                    </>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm text-white/60">
                      {featureFlags.bilingual ? "Currently out of stock · 暂时缺货" : "Currently out of stock"}<br />
                      Message us on WhatsApp to be notified when it's back.
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
