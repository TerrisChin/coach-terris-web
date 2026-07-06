# Add-on: Simple E-commerce (WhatsApp Orders)

A lightweight product showcase for small Malaysian businesses: product grid →
product detail → **"Order via WhatsApp"** with a pre-filled message. Cart-free
and **no payment gateway** (v1) — the client confirms payment (bank transfer,
DuitNow, cash) inside the WhatsApp chat, which is how most small businesses
here already operate.

All the code lives in **`src/features/ecommerce/`**:

```
src/features/ecommerce/
├── index.js               # module entry — exports the shop section
├── ShopSection.jsx        # section wrapper + category filter
├── ProductGrid.jsx        # responsive grid (1 / 2 / 3 columns)
├── ProductCard.jsx        # card with image, bilingual name, price
├── ProductDetail.jsx      # modal: description, qty stepper, WhatsApp CTA
└── buildOrderMessage.js   # formats the pre-filled order message
```

## Enable / disable

`src/lib/site.config.js`:

```js
export const featureFlags = {
  ecommerce: true,   // false = no shop section, no "Shop" nav link,
                     //         and the shop code is dropped from the bundle
};
```

Orders go to the WhatsApp number configured as `WHATSAPP_URL` in
`site.config.js` — the same number the rest of the site uses.

---

## How to add products

Products live in `src/lib/data.js` in the `PRODUCTS` array. Copy an existing
entry and edit:

```js
{
  id: "resistance-bands",              // unique, kebab-case, never reuse
  name: {
    en: "Resistance Band Set",         // English name
    zh: "弹力带套装",                    // Chinese name (shown as subtitle)
  },
  desc: {
    en: "Five loop bands from extra-light to extra-heavy…",
    zh: "五条从超轻到超重的环形弹力带…",
  },
  price: 89,                           // number, in RM — no "RM", no quotes
  image: "/placeholders/product-1.svg",// see image guidance below
  category: "Equipment",               // any string; filter pills are
                                       // generated automatically
  inStock: true,                       // false = "Out of stock" badge,
                                       // order button replaced by a notice
}
```

Notes:

- **Order in the array = order on the page.** Put bestsellers first.
- **Categories are free-form** — every distinct `category` value becomes a
  filter pill automatically. Keep to 3–5 categories so the pills fit on mobile.
- If a product needs a variant (size, colour), mention it in the description
  ("note your size in the WhatsApp message") — v1 has no variant picker.
- Prices are whole RM. For RM 59.90-style prices, `price: 59.9` works but
  displays as "RM 59.9" — prefer whole numbers.

## Image recommendations

- **Square, 800×800 px** (the grid and modal both crop to square).
- **JPG or WebP, under 200 KB each** — product photos dominate this section's
  page weight. WebP at quality ~80 is the sweet spot.
- Shoot on a clean, consistent background across all products.
- Put files in `public/products/` and reference as `/products/<name>.webp`
  (the placeholder SVGs in `/placeholders/` are just for the demo).
- Always update the placeholder images before launch — they literally say
  "replace me".

---

## WhatsApp order message format

`buildOrderMessage.js` pre-fills this bilingual message (the visitor can edit
it before sending):

```
Hi Demo Studio! I'd like to place an order 我想下单：
• Product 商品: Resistance Band Set (弹力带套装)
• Quantity 数量: 2
• Unit price 单价: RM 89
• Total 总计: RM 178
```

It's URL-encoded into `https://wa.me/<number>?text=…`, so tapping the button
opens the client's WhatsApp chat with the order ready to send. To change the
wording (e.g. add a delivery-address prompt), edit the `lines` in
`buildOrderMessage.js` — the product fields are interpolated automatically.

## What v1 deliberately leaves out

- No cart (one product per order — visitors send multiple messages for
  multiple products)
- No payment gateway, no stock counters, no order database — WhatsApp *is*
  the order channel

If a client outgrows this, that's the sign they need a real store (Shopify,
EasyStore) — this add-on is the on-ramp, not the destination.
