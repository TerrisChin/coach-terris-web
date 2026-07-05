# Add-on: Booking (Calendly or WhatsApp)

The booking add-on renders the "Book your free trial session" section and
powers every **Book Now** button on the site. It has two modes so it works for
every client tier:

| Mode | What visitors get | Client needs |
|---|---|---|
| `"calendly"` | Embedded Calendly calendar + popup booking | A free Calendly account |
| `"whatsapp"` | "Book via WhatsApp" buttons (Starter tier) | Just their WhatsApp number |

All the code lives in **`src/features/booking/`**:

```
src/features/booking/
├── index.js             # module entry — exports <BookingSection />
├── BookingSection.jsx   # the section (Calendly embed OR WhatsApp panel)
├── useCalendly.js       # loads Calendly widget assets + popup
└── useBookingAction.js  # the action behind Hero/Services/Pricing "Book Now"
```

Everything is configured in **`src/lib/site.config.js`** — you never edit the
feature code during onboarding.

---

## Client onboarding — the 10-minute version

### Option A — client has (or wants) Calendly

**1. Set up their Calendly account (~5 min, skip what already exists)**

1. Go to <https://calendly.com/signup> and create a free account using the
   client's business email. During signup Calendly asks to pick a URL — this
   becomes their **username** (e.g. `demo-studio`). Choose something short and
   professional; you can change it later under *Settings → Share your link*.
2. Create the booking event: **Event types → New event type → One-on-One**.
   - Name: `Free Trial Session` (the URL slug becomes `free-trial-session`)
   - Duration: 30 or 60 min
   - Availability: set the client's working hours
3. (Optional but recommended) In the event's settings, add location
   "Ask invitee" or the studio address, and enable email reminders.

**2. Get the scheduling URL (~1 min)**

Open the event type and click **Copy link**. You'll get something like:

```
https://calendly.com/demo-studio/free-trial-session
         └────────────┬────────┘ └───────┬────────┘
                 username           event slug
```

**3. Configure the template (~2 min)**

In `src/lib/site.config.js`:

```js
export const featureFlags = {
  booking: true,                                   // add-on on
};

export const PLACEHOLDER_CALENDLY_USERNAME = "demo-studio";      // ← their username
export const CALENDLY_EVENT_SLUG = "free-trial-session";         // ← their event slug

export const booking = {
  mode: "calendly",
  calendlyUrl: CALENDLY_URL,   // already assembled from the two values above
};
```

(You can also paste a full URL directly into `calendlyUrl` if it's easier.)

**4. Verify (~2 min)** — `npm run dev`, open the site:
- The booking section shows the client's real calendar (not "This Calendly URL
  is not valid" — that means a typo in username/slug).
- Hero / Services / Pricing "Book Now" buttons open the Calendly popup.

### Option B — Starter tier, no Calendly

In `src/lib/site.config.js` set:

```js
export const featureFlags = { booking: true };
const WHATSAPP_URL = "https://wa.me/60123456789";  // ← client's number:
                                                   //    country code + number,
                                                   //    digits only, no "+"
export const booking = { mode: "whatsapp" };
```

Every booking button — including the booking section itself — becomes
**"Book via WhatsApp"** opening a chat with the client's number. No Calendly
account, nothing else to set up.

### Option C — no online booking at all

```js
export const featureFlags = { booking: false };
```

The booking section and the Navbar/Contact "Book Now" buttons disappear
entirely (the code is even dropped from the JS bundle). Hero/Services/Pricing
CTAs remain but fall back to opening WhatsApp.

---

## How it's wired (for maintainers)

- `featureFlags.booking` is inlined at build time via `vite.config.js`
  (`__FEATURE_BOOKING__`), gating a `React.lazy` import in `App.jsx` — flag
  off means the booking chunk is not emitted.
- `booking.mode` is a runtime value inside the section: `"calendly"` renders
  the inline embed (and loads Calendly's script/CSS), `"whatsapp"` renders the
  WhatsApp panel and never touches Calendly's assets.
- `useBookingAction()` is what Hero/Services/Pricing buttons call; it resolves
  to the Calendly popup or a WhatsApp link from the same config.
- `BOOKING_LINK` (exported from `site.config.js`) is the plain href used by
  Navbar "Book Now", Contact "Book Online", and the trial banner.

## Onboarding checklist

- [ ] `featureFlags.booking` set correctly
- [ ] Calendly mode: username + event slug filled in, embed shows real calendar
- [ ] WhatsApp mode: `WHATSAPP_URL` uses country code, digits only
- [ ] Clicked one "Book Now" button in Hero, Services, and Pricing each
- [ ] `npm run build` passes
