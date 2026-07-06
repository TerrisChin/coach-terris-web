# Deployment — Netlify

How to deploy this template (or a client copy of it) to Netlify. All build
settings are committed in `netlify.toml`, so a fresh import needs almost no
clicking.

## Build settings (from netlify.toml — don't override in the UI)

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `src/features/chatbot/api` |

## Steps

1. Push the client branch to its own **private GitHub repo** (one repo per
   client keeps Netlify, access, and billing separate):
   ```
   git remote add client https://github.com/<you>/<client-repo>.git
   git push -u client client/<name>:main
   ```
2. Netlify → **Add new site → Import an existing project → GitHub** → pick
   the client repo. Netlify reads `netlify.toml`; leave settings as detected.
3. Add environment variables for the tier (below), then **Deploy**.
4. Live URL appears as `<site-name>.netlify.app`. Custom domain: Site →
   **Domain management** → add domain → follow the DNS instructions (HTTPS
   is automatic).
5. Updates: push to the deployed branch — Netlify rebuilds automatically.

## Required environment variables per tier

| Variable | starter | pro | chatbot | ecommerce | Notes |
|---|---|---|---|---|---|
| `ANTHROPIC_API_KEY` | — | — | **required** | — | `sk-ant-…`, from console.anthropic.com. Use a per-client key with a spend limit. |
| `CHATBOT_MODEL` | — | — | optional | — | Defaults to `claude-opus-4-8`; cheaper: `claude-sonnet-4-6`, `claude-haiku-4-5` (costs: [ADDON_CHATBOT.md](ADDON_CHATBOT.md)) |

Starter, pro, and ecommerce tiers need **no environment variables at all** —
Calendly URLs, WhatsApp numbers, and products are public values committed in
`site.config.js` / `data.js`.

## Serverless function notes (chatbot tier only)

- The only function is `src/features/chatbot/api/chat.mjs` (Netlify
  Functions 2.0). It self-routes to **`/api/chat`** via
  `export const config = { path: "/api/chat" }` — no redirect rules needed.
- It reads `process.env.ANTHROPIC_API_KEY` server-side and proxies to the
  Anthropic API; the key is never in client code. If the key is missing the
  function returns 500 and the widget shows its WhatsApp fallback — the rest
  of the site is unaffected.
- The function deploys on every tier (Netlify packages whatever is in the
  functions directory) but is only *called* when the chatbot flag is on —
  harmless otherwise since without a key it does nothing.
- Local testing: `npm run dev` does **not** serve functions (widget shows
  its fallback message); use `netlify dev` with a `.env` file to exercise
  the real `/api/chat` locally.
- After changing env vars in Netlify, **trigger a redeploy** — functions
  read env at deploy time.

## Troubleshooting

| Symptom | Check |
|---|---|
| Build fails on Netlify but works locally | Node version — set `NODE_VERSION=22` env var if Netlify defaults older |
| Chatbot replies "trouble connecting" | `ANTHROPIC_API_KEY` set? Redeployed after setting it? Function logs: Site → Logs → Functions |
| Calendly embed empty / "not valid" | Username or event slug typo in `site.config.js` |
| Old content after deploy | Hard-refresh; Netlify serves hashed assets so stale HTML is the usual cause |
