import { useMemo, useState } from "react";
import { Section, Reveal, Eyebrow, Heading } from "../../components/UI";
import { PRODUCTS } from "../../lib/data";
import ProductGrid from "./ProductGrid";
import ProductDetail from "./ProductDetail";

export default function ShopSection() {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(PRODUCTS.map((p) => p.category))],
    [],
  );
  const visible = category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <Section id="shop" className="bg-navy-900">
      <Reveal className="text-center max-w-2xl mx-auto">
        <Eyebrow>Shop</Eyebrow>
        <Heading className="mt-4">Gear up, train better</Heading>
        <p className="mt-4 text-white/60 text-lg">
          The equipment we trust, plus gift cards for the people you train with. Order in one tap via WhatsApp — no checkout, no accounts.
        </p>
      </Reveal>

      {/* Category filter */}
      <Reveal delay={0.05} className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "bg-gradient-to-r from-aqua-400 to-aqua-600 text-navy-950"
                : "bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <ProductGrid products={visible} onSelect={setSelected} />

      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
