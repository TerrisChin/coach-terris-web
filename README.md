# Client-Site Template (Demo Studio)

A reusable one-page website template for small Malaysian service businesses,
built with **React + Vite + Tailwind CSS + Framer Motion** and sold in four
tiers. This branch (`template-base`) carries fictional "Demo Studio"
placeholder content — every value a client needs changed lives in
`src/lib/site.config.js` and `src/lib/data.js`.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/

# spin up a client project on a tier:
npm run new-client -- --name=ClientName --tier=pro
```

## Tiers & add-ons

| Tier | Booking | AI chatbot | Shop | Bilingual EN/中文 |
|---|---|---|---|---|
| Starter | WhatsApp | — | — | — |
| Pro | Calendly | — | — | ✅ |
| Booking + Chatbot | Calendly | ✅ | — | ✅ |
| Simple E-commerce | — | — | ✅ WhatsApp orders | ✅ |

Add-ons are isolated modules in `src/features/` behind build-time feature
flags — a disabled add-on ships zero bytes. Deployment is Netlify
(`netlify.toml`); the chatbot's Anthropic API key lives in a Netlify env
var, never in client code.

## Documentation

**Start at [docs/README.md](docs/README.md)** — architecture, folder
structure, and links to everything: tier pricing ([docs/TIERS.md](docs/TIERS.md)),
the client onboarding runbook
([docs/CLIENT_ONBOARDING.md](docs/CLIENT_ONBOARDING.md)), deployment
([docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)), maintenance & template updates
([docs/MAINTENANCE.md](docs/MAINTENANCE.md)), and per-add-on guides.

Version history: [CHANGELOG.md](CHANGELOG.md).
