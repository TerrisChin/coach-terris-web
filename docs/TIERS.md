# Service Tiers

Four sellable presets live in `src/config/tiers/` (plus `_demo.js`, which
turns everything on for the template demo and is **not** a sellable tier).
Each preset sets the feature flags, booking mode, and which page sections
render.

Switch tiers with one command:

```
npm run new-client -- --name=ClientName --tier=pro
```

or by editing the single tier import line at the top of
`src/lib/site.config.js`.

---

## Tier comparison

| | Starter Booking Site | Pro Booking Site | Booking + AI Chatbot | Simple E-commerce |
|---|---|---|---|---|
| Preset file | `tiers/starter.js` | `tiers/pro.js` | `tiers/chatbot.js` | `tiers/ecommerce.js` |
| Booking | WhatsApp buttons only | Calendly embed + popup | Calendly embed + popup | — (CTAs fall back to WhatsApp) |
| AI chatbot | — | — | ✅ (Anthropic API) | — |
| Online shop | — | — | — | ✅ WhatsApp orders |
| Bilingual EN/中文 | English only | ✅ | ✅ | ✅ |
| Pages/sections | 4: Home, Services, About, Contact | All (~13 sections) | All (~13 sections) | All incl. Shop (no booking section) |
| **Price (RM)** | TODO | TODO | TODO | TODO |
| Est. build hours¹ | 4–6 h | 8–12 h | 10–14 h | 10–16 h² |

¹ Onboarding time on top of this template: content entry, image replacement,
Calendly/Netlify setup, client review round. Adjust after your first few
projects.
² E-commerce hours scale with product count — the estimate assumes ~10–20
products supplied with photos and bilingual descriptions.

## What each tier includes

- **Starter Booking Site** — a lean 4-section one-pager (Home, Services,
  About, Contact). All booking CTAs open WhatsApp; no Calendly account
  needed. Content is English-only, so write `data.js` copy without 中文.
- **Pro Booking Site** — the full template: every section (pricing, gallery,
  schedule, blog, testimonials…), embedded Calendly booking, bilingual
  content.
- **Booking + AI Chatbot** — Pro plus the AI assistant
  (docs/ADDON_CHATBOT.md). Remember the ongoing Anthropic API cost
  (≈ RM 0.07–0.35 per conversation depending on model) when pricing this
  tier — consider building a small monthly allowance into the retainer.
- **Simple E-commerce** — the full template with the shop
  (docs/ADDON_ECOMMERCE.md) instead of a booking system; orders arrive via
  WhatsApp with product, quantity, and total pre-filled. No payment gateway.

## Ongoing cost cheat-sheet (per client per month)

| Item | Starter | Pro | Chatbot | E-commerce |
|---|---|---|---|---|
| Netlify hosting | free tier | free tier | free tier | free tier |
| Calendly | — | free tier ok | free tier ok | — |
| Anthropic API | — | — | usage-based (docs/ADDON_CHATBOT.md) | — |

## How the presets work (for maintainers)

A tier preset exports `{ id, label, featureFlags, booking: { mode }, sections }`:

- `featureFlags` feeds `site.config.js` → `vite.config.js` inlines them, so
  disabled add-ons are dropped from the JS bundle at build time.
- `booking.mode` selects Calendly vs WhatsApp inside the booking add-on.
- `sections` (array of section IDs, or `null` for all) controls which page
  sections render and which nav links appear. IDs: `home, partners, about,
  benefits, services, pricing, booking, schedule, gallery, shop,
  testimonials, blog, trial, instagram, contact`.
- `featureFlags.bilingual` controls 中文 rendering in structured content
  (currently the shop). Free-text content in `data.js` is written per client,
  so for English-only tiers simply write it without 中文.

Adding a fifth tier = add a file to `src/config/tiers/`, add it to the
`TIERS` list in `scripts/new-client.js`, and add a column here.
