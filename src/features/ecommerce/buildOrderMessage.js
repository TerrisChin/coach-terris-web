import { BUSINESS } from "../../lib/site.config";

// Formats the pre-filled WhatsApp order message (see docs/ADDON_ECOMMERCE.md)
// and returns the wa.me URL that opens the chat with it.
export function buildOrderMessage(product, qty) {
  return [
    `Hi ${BUSINESS.short}! I'd like to place an order 我想下单：`,
    `• Product 商品: ${product.name.en} (${product.name.zh})`,
    `• Quantity 数量: ${qty}`,
    `• Unit price 单价: RM ${product.price}`,
    `• Total 总计: RM ${product.price * qty}`,
  ].join("\n");
}

export function buildWhatsAppOrderUrl(product, qty) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(buildOrderMessage(product, qty))}`;
}
