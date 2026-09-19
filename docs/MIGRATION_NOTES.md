# Migration notes: riso redesign

## Stack (confirmed)

| Layer | Choice |
| --- | --- |
| Framework | React 18 |
| Router | react-router-dom 7 (`BrowserRouter`) |
| Styling | Tailwind CSS 3 plus riso utilities in `src/index.css` |
| Build | Vite 3 (`vite.config.js` with `@vitejs/plugin-react`) |
| Deploy | Vercel SPA rewrites in `vercel.json` |

Fonts: Big Shoulders Display, Instrument Sans, JetBrains Mono (Google Fonts, `display=swap`). Inter removed.

## Routes and anchors

| Old | New |
| --- | --- |
| `/` | Hero, About, Calendar, Roster, Gallery, Join, Footer |
| `/gallery` | Full gallery grid |
| `/whimsical` | Holy Whimsical / Holy Bat Crew |
| `/contact-form` | Interest form |
| `/#team` | Redirects to `#roster` |
| `/#contact` | Redirects to `#join` |
| `/#about` | `#about` |

## Signature features

### Photo flip

**Old code:** not found. Only a 2D scroll spin on circular avatars (`legacy/TeamGrid.jsx`).

**Now:** `src/components/Roster.jsx` flip cards. Click, tap, Enter/Space. Duotone front, ink/halftone back with major, role, and badges. Fade when `prefers-reduced-motion` is set.

### Spotify on `/whimsical`

**Not found** in repo or history. Not implemented. Provide a URI to add it.

### Dead fish cursor

**Not found**. Not implemented. Provide the asset and routes to restore it.

### Batman / Robin crew

**Now:** `src/components/WhimsicalPage.jsx`, photos via `src/data/photos.js`.

## Key new files

- `src/data/roster.json`, `schedule.json`, `site.json`, `photos.js`
- `src/components/Calendar.jsx`, `Roster.jsx`, `Join.jsx`, `Footer.jsx`, `GallerySection.jsx`, `Grain.jsx`
- `public/bolts-schedule.ics`, `public/og.jpg`
- `design-reference/Main.dc.html`, `Mobile.dc.html`
- `docs/ROLLBACK.md`, `DATA_TODO.md`

## Legacy

Unused pre-riso components moved to `legacy/` (`TeamGrid.jsx`, `GalleryCarousel.jsx`, `Contact.jsx`). Full pre-riso snapshot: tag `pre-riso-backup-2026-09-18`, branch `backup/pre-riso-2026-09-18`.
