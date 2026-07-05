# Add-on: AI Chatbot

An optional AI assistant widget powered by the Anthropic API (Claude). It
answers visitor questions about the business — services, pricing, policies,
booking — in English and Simplified Chinese, using knowledge assembled
automatically from the site's own config files.

The entire feature lives in **`src/features/chatbot/`**:

```
src/features/chatbot/
├── index.js              # module entry — exports <ChatbotWidget />
├── ChatbotWidget.jsx     # the floating chat UI (launcher + panel)
├── buildSystemPrompt.js  # assembles the assistant's knowledge from site data
└── api/
    └── chat.mjs          # Netlify serverless function — proxies to Anthropic
```

When disabled, none of this code ships to visitors (see "How the flag works").

---

## How to enable / disable

Flip one flag in `src/lib/site.config.js`:

```js
export const featureFlags = {
  aiChatbot: true,   // ← set false to remove the chatbot entirely
};
```

- **`true`** — the widget renders (bottom-left launcher) and its code loads as
  a separate lazy chunk after the main page.
- **`false`** — the widget is not rendered **and the chatbot chunk is dropped
  from the production build** (verified via `npm run build` output).

### How the flag works

`App.jsx` gates a `React.lazy` import on the flag:

```jsx
const ChatbotWidget = featureFlags.aiChatbot
  ? lazy(() => import("./features/chatbot"))
  : null;
```

Because the flag is a build-time constant, the bundler eliminates the dynamic
import when it's `false`, so no chatbot code is emitted. When `true`, the
chatbot compiles to its own chunk that browsers fetch only after the main
bundle — the landing page's initial load is unaffected either way.

---

## Netlify setup (required when enabled)

The browser never talks to Anthropic directly. The widget POSTs to `/api/chat`,
which is served by the Netlify function `src/features/chatbot/api/chat.mjs`
(wired up via `netlify.toml` → `[functions] directory`). The function reads the
API key from the environment (`process.env.ANTHROPIC_API_KEY`) and forwards
the request — **the key never appears in client-side code or the JS bundle**.

1. Get an API key: <https://console.anthropic.com> → API Keys (`sk-ant-...`).
2. In Netlify: **Site configuration → Environment variables**, add:

   | Variable | Required | Value |
   |---|---|---|
   | `ANTHROPIC_API_KEY` | Yes | your `sk-ant-...` key |
   | `CHATBOT_MODEL` | No | Claude model ID (default `claude-opus-4-8`) |

3. Redeploy. That's it — no code changes.

Local testing with the real function requires `netlify dev` (which serves the
function and injects env vars from `.env`). Under plain `npm run dev` the
widget renders but `/api/chat` doesn't exist, so it shows its friendly
"reach us on WhatsApp" fallback message.

If the key is missing in production the function returns a 500 and the widget
falls back the same way — the rest of the site is unaffected.

---

## How the system prompt is built

`src/features/chatbot/buildSystemPrompt.js` assembles the assistant's
knowledge at module load from the central config — **nothing about the
business is hardcoded in the chatbot**:

| Prompt section | Source |
|---|---|
| Assistant name & business identity | `BUSINESS` (`site.config.js`, via `COACH`) |
| Languages, service area, venues | `COACH.languages` / `.location` / `.venues` |
| Contact & hours | `COACH.phone` / `.email` / `.hours` |
| Services & durations & prices | `SERVICES` (`data.js`) |
| Pricing plans & packages | `PRICING` (`data.js`) |
| Policies / FAQ | `FAQS` (`data.js`) |

Customize `site.config.js` and `data.js` for a new client and their chatbot
automatically knows their business — do not edit `buildSystemPrompt.js` unless
you're changing the assistant's *behavior* (tone, reply length, rules).

Note: the assembled prompt is sent from the browser with each request, so it
is visible to visitors (like the rest of the site content — it contains only
public information). Never put secrets in config/data files.

---

## Estimated Anthropic API cost per conversation

Assumptions: system prompt ≈ 1,500 tokens (grows with your FAQ/pricing data),
a typical conversation of ~6 visitor questions, short replies (~100 output
tokens each), and full history re-sent per request (~11K input + ~0.6K output
tokens per conversation total).

| Model (`CHATBOT_MODEL`) | Input / output per MTok | ≈ cost per conversation |
|---|---|---|
| `claude-opus-4-8` (default) | $5 / $25 | **≈ $0.07** |
| `claude-sonnet-4-6` | $3 / $15 | ≈ $0.04 |
| `claude-haiku-4-5` | $1 / $5 | ≈ $0.015 |

Rules of thumb:

- 1,000 conversations/month on the default model ≈ **$70/month**; on Haiku ≈ $15.
- Cost scales with conversation length (history is re-sent each turn) and with
  the size of your `data.js` content (it's in every request's system prompt).
- `max_tokens` is capped at 1,000 in `chat.mjs`, bounding the per-reply cost.
- Prices as of mid-2026 — check <https://platform.claude.com/docs/en/pricing>
  for current rates.

---

## Security checklist

- [x] API key only in `process.env.ANTHROPIC_API_KEY`, read by the serverless
      function — never in client code, never committed (`.env` is gitignored).
- [x] The function returns only the reply content to the browser, never the key
      or raw error internals.
- [x] `.env.example` documents every variable; copy to `.env` for local use.
