import { Reveal } from "../../components/UI";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelect }) {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, i) => (
        <Reveal key={p.id} delay={(i % 3) * 0.08}>
          <ProductCard product={p} onSelect={onSelect} />
        </Reveal>
      ))}
    </div>
  );
}
