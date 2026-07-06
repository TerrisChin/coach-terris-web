import { BUSINESS, featureFlags } from "../../lib/site.config";

// Formats the pre-filled WhatsApp order message (see docs/ADDON_ECOMMERCE.md)
// and returns the wa.me URL that opens the chat with it. Bilingual labels
// follow the tier's `bilingual` flag.
export function buildOrderMessage(product, qty) {
  const zh = featureFlags.bilingual;
  const name = zh ? `${product.name.en} (${product.name.zh})` : product.name.en;
  return [
    `Hi ${BUSINESS.short}! I'd like to place an order${zh ? " 我想下单：" : ":"}`,
    `• Product${zh ? " 商品" : ""}: ${name}`,
    `• Quantity${zh ? " 数量" : ""}: ${qty}`,
    `• Unit price${zh ? " 单价" : ""}: RM ${product.price}`,
    `• Total${zh ? " 总计" : ""}: RM ${product.price * qty}`,
  ].join("\n");
}

export function buildWhatsAppOrderUrl(product, qty) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(buildOrderMessage(product, qty))}`;
}
