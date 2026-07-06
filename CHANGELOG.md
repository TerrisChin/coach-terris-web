# Changelog

All notable changes to this template. Format loosely follows
[Keep a Changelog](https://keepachangelog.com); versions are template
releases (see docs/MAINTENANCE.md for rolling them out to client sites).

## [1.0.0] — 2026-07-06

First release of the reusable client-site template, converted from the
original Coach Terris single-client website (inventory of that conversion:
`docs/TEMPLATE_AUDIT.md`).

### Added

- **Central configuration** — `src/lib/site.config.js` (business identity,
  brand, WhatsApp, Calendly, feature flags) + `src/lib/data.js` (all page
  content). Components never contain client-specific values.
- **Feature-flag / add-on system** — flags are inlined at build time via
  Vite `define` and gate `React.lazy` imports, so disabled add-ons ship zero
  bytes; enabled ones load as their own chunks.
- **AI chatbot add-on** (`src/features/chatbot/`) — floating assistant whose
  system prompt is assembled from site config/data
  (`buildSystemPrompt.js`); Netlify serverless function `api/chat.mjs`
  proxies to the Anthropic API (`ANTHROPIC_API_KEY` env var, model
  overridable via `CHATBOT_MODEL`, default `claude-opus-4-8`).
- **Booking add-on** (`src/features/booking/`) — two modes: embedded
  Calendly (URL built from config) or "Book via WhatsApp" for clients
  without Calendly; `useBookingAction()` powers all Book Now CTAs.
- **E-commerce add-on** (`src/features/ecommerce/`) — cart-free product
  showcase: grid → detail modal → WhatsApp order with pre-filled bilingual
  message (product, quantity, RM price/total). Products in `data.js`
  `PRODUCTS`; no payment gateway by design.
- **Service tier presets** (`src/config/tiers/`) — starter / pro / chatbot /
  ecommerce (+ `_demo` for the template demo) setting flags, booking mode,
  bilingual rendering, and which page sections render.
- **`npm run new-client`** — `scripts/new-client.js` copies `.env.example`
  to `.env`, switches the tier import, prints the per-tier onboarding
  checklist.
- **Documentation set** — `docs/README.md` (architecture), `TIERS.md`,
  `CLIENT_ONBOARDING.md` (incl. EN/中文 content request form),
  `DEPLOYMENT.md`, `MAINTENANCE.md`, and one `ADDON_*.md` per add-on.
- Generated SVG placeholder images (hero, portrait, gallery, products) and
  `.env.example`.

### Changed

- All personal/business content replaced with fictional "Demo Studio"
  placeholders (bilingual EN/中文), including `index.html` SEO/meta/JSON-LD.
- Deployment target switched from Vercel to Netlify (`netlify.toml`;
  `vercel.json` and the Vercel-format function removed).
- Package renamed to `demo-studio-template`.

### Removed

- Client photos removed from the working tree (retained in git history on
  `main`).
- Hardcoded Calendly username, personal phone/email, and the client-specific
  chatbot prompt.

[1.0.0]: https://github.com/TerrisChin/coach-terris-web/tree/template-base
