# Maintenance — Client Sites & Template Updates

## Updating content on an existing client site

Client content changes (new prices, new photos, new testimonial) are edits to
exactly three places — nothing else should need touching:

| Change | File |
|---|---|
| Prices, services, FAQs, reviews, schedule, blog, products | `src/lib/data.js` |
| Phone, hours, socials, Calendly link, brand name, tier | `src/lib/site.config.js` |
| Photos | `public/images/` and `public/products/` |

Workflow:

```
git checkout client/<name>        # or clone the client repo
# edit data.js / site.config.js / images
npm run dev                       # eyeball the change
git commit -am "content: <what changed> for <client>"
git push                          # Netlify auto-deploys
```

Prefix client content commits with `content:` — it makes the next section
much easier.

## Pulling template improvements into a client site

Template fixes and new features land on **`template-base`**. To bring them
into a client branch:

```
git checkout client/<name>
git fetch origin template-base
git merge origin/template-base
```

Because client customization is confined to `site.config.js`, `data.js`,
`index.html`, and images — files the template rarely changes — most merges
are clean. When there IS a conflict:

- **Conflicts in `site.config.js` / `data.js` / `index.html` / images →
  keep the client's side** (`git checkout --ours -- <file>`), then re-apply
  the template's *structural* change by hand if there was one (e.g. a new
  config field: add the field, keep the client's values).
- **Conflicts in components / features / configs → keep the template's side**
  (`git checkout --theirs -- <file>`) — client branches should never have
  edited these; if one did, port that edit into `template-base` properly
  instead.

After any merge: `npm run build` must pass, then `npm run dev` and click
through the site (booking, chatbot, shop for that tier) before pushing.

### Never merge the other direction

**Never merge a client branch into `template-base`.** That would leak client
content (names, phone numbers, prices, photos) into the template and every
future client. If you build something useful inside a client project,
cherry-pick only the generic code onto `template-base`:

```
git checkout template-base
git cherry-pick <sha>        # code-only commit, no client content
```

This is why content commits are prefixed `content:` — anything with that
prefix must never be cherry-picked to the template.

### What is "client content" (never in template-base)

- `site.config.js` values (names, numbers, URLs), `data.js` entries,
  `index.html` meta, everything in `public/images/` and `public/products/`
- `.env` files and any API keys (these are never committed anywhere)
- The tier import line (template stays on `_demo`)

## Template release habit

When `template-base` gains a feature or fix worth rolling out:

1. Bump the version and add an entry in `CHANGELOG.md` (what changed, any
   manual merge steps for client sites).
2. For each active client: merge (above), test, push — a 10-minute pass per
   site, and the changelog tells future-you which sites got which version.
