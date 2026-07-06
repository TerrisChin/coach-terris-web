# Client-Site Template — Documentation

A React + Vite + Tailwind one-page template for small Malaysian service
businesses, sold in four tiers. This branch (`template-base`) is the reusable
template with fictional "Demo Studio" placeholder content; each paying client
gets their own branch/copy configured from it.

## Documentation index

| Doc | When to read it |
|---|---|
| [TIERS.md](TIERS.md) | Choosing/pricing a tier, what each includes |
| [CLIENT_ONBOARDING.md](CLIENT_ONBOARDING.md) | **Start here for every new client** — deposit → live |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Netlify setup, env vars per tier |
| [MAINTENANCE.md](MAINTENANCE.md) | Updating live client sites, pulling template improvements |
| [ADDON_BOOKING.md](ADDON_BOOKING.md) | Calendly / WhatsApp booking setup |
| [ADDON_CHATBOT.md](ADDON_CHATBOT.md) | AI chatbot setup + API costs |
| [ADDON_ECOMMERCE.md](ADDON_ECOMMERCE.md) | Shop products + WhatsApp orders |
| [TEMPLATE_AUDIT.md](TEMPLATE_AUDIT.md) | Historical: the original refactor inventory |
| [../CHANGELOG.md](../CHANGELOG.md) | Template version history |

## Architecture

```
                    src/lib/site.config.js  ◄── THE per-client file
                    ┌───────────────────────────────────────────┐
 src/config/tiers/  │ • imports ONE tier preset (single line)   │
 ┌────────────┐     │ • business identity (BUSINESS, BRAND)     │
 │ starter.js │────►│ • WhatsApp / Calendly settings            │
 │ pro.js     │     │ • exports featureFlags + hasSection()     │
 │ chatbot.js │     └───────────────┬───────────────────────────┘
 │ ecommerce.js│                    │
 │ _demo.js   │      ┌──────────────┼──────────────────┐
 └────────────┘      ▼              ▼                   ▼
              vite.config.js    App.jsx           src/lib/data.js
              (inlines flags    (renders sections (all page content:
               as build-time     the tier includes; services, pricing,
               constants)        lazy-loads add-ons) FAQs, PRODUCTS…)
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼              ▼
              features/booking  features/chatbot  features/ecommerce
              (own lazy chunk)  (own lazy chunk + (own lazy chunk)
                                 Netlify function)
```

**The rule that makes this work:** business-specific values live only in
`site.config.js` and `data.js`. Components read from those two files and are
never edited per client.

## Folder structure

```
├── docs/                    ← you are here
├── scripts/new-client.js    ← npm run new-client -- --name=X --tier=pro
├── netlify.toml             ← build + functions config (committed, generic)
├── public/placeholders/     ← generated placeholder images (replace per client)
├── src/
│   ├── config/tiers/        ← tier presets (flags + booking mode + sections)
│   ├── lib/
│   │   ├── site.config.js   ← per-client identity + integrations
│   │   └── data.js          ← per-client page content (incl. PRODUCTS)
│   ├── components/          ← Navbar, Footer, UI primitives, FloatingActions
│   ├── sections/            ← always-available page sections
│   └── features/            ← optional add-ons, one folder each
│       ├── booking/         ← Calendly embed / WhatsApp booking
│       ├── chatbot/         ← AI assistant + api/chat.mjs Netlify function
│       └── ecommerce/       ← product grid + WhatsApp orders
└── CHANGELOG.md
```

## The feature-flag system

1. A **tier preset** (`src/config/tiers/*.js`) declares
   `featureFlags: { booking, aiChatbot, ecommerce, bilingual }`, a
   `booking.mode`, and a `sections` allowlist (`null` = all).
2. `site.config.js` imports the tier and re-exports the flags.
3. `vite.config.js` inlines each flag as a build-time constant
   (`__FEATURE_BOOKING__`, `__FEATURE_AI_CHATBOT__`, `__FEATURE_ECOMMERCE__`).
4. `App.jsx` gates a `React.lazy` import on each constant — so a disabled
   add-on is **not shipped at all** (its chunk isn't emitted), and an enabled
   one loads as its own small chunk after the main bundle.
5. Runtime values (`booking.mode`, `bilingual`, `hasSection()`) fine-tune
   behavior *inside* the shipped code.

Adding a new add-on = copy the pattern: folder in `src/features/`, flag in
the tier presets, define in `vite.config.js`, lazy import in `App.jsx`,
`docs/ADDON_<NAME>.md`.

## How tiers work

One line in `site.config.js` selects the tier:

```js
import tier from "../config/tiers/pro.js";   // ← change per client
```

`npm run new-client -- --name=X --tier=pro` changes it for you and prints the
onboarding checklist. `_demo.js` (all features on) is the default on
`template-base` so the demo shows everything — never ship it to a client.
Full comparison: [TIERS.md](TIERS.md).
