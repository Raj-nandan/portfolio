# UI Redesign Plan — Portfolio (Raj Nandan)

Reference design: `Raj Nandan Portfolio Layout – Home.html` (exported design canvas).
Current stack: React 18 + Vite + TypeScript + Tailwind + shadcn/ui + framer-motion.

## 1. Design summary (new UI)

- **Aesthetic**: minimal, monochrome, editorial. Geist + Geist Mono typefaces. No accent color; contrast comes from black/white and a hatch pattern.
- **Layout**: a single centered column, `max-width: 780px`, with left/right `1px` borders (`--line`), on a hatch-textured background. Sections separated by 28px hatch bands (repeating diagonal stripes).
- **Theme**: light/dark via CSS variables (`--bg`, `--fg`, `--line`, `--hatch`, `--soft`, `--muted`, `--sub`, `--body`, `--c0..--c4`). Toggle button in nav.
- **Nav**: `RN` monogram logo, links Projects / Experience / Stack, "More" dropdown (Contact, Resume), theme toggle.
- **Sections (top → bottom)**: Hero, Social row, GitHub contributions, About, Projects, Experience (incl. Education), Stack, Contact, Footer.

## 2. Current vs. new mapping

| Current | New design | Action |
|---|---|---|
| `sections/hero.tsx` (orbs, big name, CTAs) | Compact hero: 140px avatar, name, tagline, role/company, city | Rewrite |
| Social links in hero | Dedicated 4-cell social row (GitHub, LinkedIn, LeetCode, Email) | Move/rewrite |
| `sections/about.tsx` (skills bars, profiles, achievements, core areas) | About = 3 bullets; skills move to "Stack"; profiles merge into social row | Split & simplify |
| `sections/projects.tsx` (featured card + 3 cards) | Vertical list of project rows with name/period/desc/tags/source/live | Rewrite |
| (none) | GitHub contributions grid (26×7) | Add (static placeholder or wire data) |
| (none) | Experience section (2 jobs + education) | Add |
| (none) | Stack section (grouped pill lists) | Add (from current skills) |
| `sections/contact.tsx` (form + links) | Contact cards (Mobile, LinkedIn, Email) + "Send an email" button; **no form** | Rewrite (drop form or keep as optional) |
| `navbar.tsx` (pill nav, logo "R") | Minimal nav: RN monogram, Projects/Experience/Stack, More dropdown, toggle | Rewrite |
| `layout.tsx` (full-width sections, dividers) | Centered 780px column, hatch bands | Rewrite |
| Fonts: Syne + DM Sans | Geist + Geist Mono | Update `index.css` |
| Theme tokens (shadcn HSL vars + orange accent) | New monochrome CSS variables | Replace/alias |

## 3. Design tokens to introduce

In `src/index.css`, replace the `:root`/`.dark` shadcn HSL block with:

```css
:root { /* light */
  --bg:#ffffff; --fg:#0a0a0a; --line:#e5e5e5; --hatch:#ececec;
  --soft:#f5f5f5; --muted:#6b6b6b; --sub:#525252; --body:#404040;
  --c0:#efefef; --c1:#d4d4d4; --c2:#a3a3a3; --c3:#525252; --c4:#0a0a0a;
}
.dark { /* night */
  --bg:#0a0a0a; --fg:#fafafa; --line:#2a2a2a; --hatch:#1a1a1a;
  --soft:#171717; --muted:#a3a3a3; --sub:#b3b3b3; --body:#d4d4d4;
  --c0:#1f1f1f; --c1:#3a3a3a; --c2:#6b6b6b; --c3:#a3a3a3; --c4:#fafafa;
}
```

- Font import: `Geist` (400/500/600) + `Geist Mono` (400/500) from Google Fonts.
- Body font-family: `'Geist', system-ui, sans-serif`; mono: `'Geist Mono', monospace`.
- Keep shadcn variables as aliases to the new ones (optional) so leftover `ui/*` components don't break during migration.

## 4. Content mapping (real data to fill placeholders)

| Placeholder | Source / proposed value |
|---|---|
| Avatar `[YOUR PHOTO]` | `src/asset/pic.jpg` (existing) |
| Tagline `[YOUR ONE-LINE TAGLINE]` | "2025 B.Tech (IT) graduate — building impactful, user-centered full-stack solutions." |
| Role/Company `[YOUR ROLE] @ [COMPANY OR "Open to work"]` | "Open to work" (or current role) |
| City `[CITY, COUNTRY]` | User's city (unknown — keep placeholder or fill) |
| About bullets | Condense current About paragraph into 3 bullets |
| GitHub contributions count `[N]` | Either static (e.g. 1,248) or wire to GitHub API at build |
| Projects (4) | HealthCheck, Attendance Tracker, Student CRUD API, Kafka Order Tracker (name/period/desc/tags) |
| Experience companies | Current "achievements" are hackathon placements, not jobs → keep as placeholders OR reframe as "Achievements" section |
| Education | B.Tech Information Technology, 2021–2025 |
| Stack groups | Language: C++, Python, Go, TypeScript; Frontend: React, Next.js; Backend/DB: Node.js, MongoDB, SQL; Tools: Git, GitHub, Docker, Vercel |
| Contact mobile `[+91 YOUR NUMBER]` | Unknown — keep placeholder |
| LinkedIn handle | `linkedin.com/in/raj-nandan` |
| Email | `nandanr532@gmail.com` |

## 5. File-by-file changes

1. `src/index.css` — new fonts, tokens, hatch utility, base styles.
2. `src/components/theme-provider.tsx` — keep; ensure `.dark` class toggles (already does).
3. `src/components/layout.tsx` — rewrite: centered column + hatch bands; render new section set.
4. `src/components/navbar.tsx` — rewrite minimal nav + More dropdown + toggle.
5. `src/components/sections/hero.tsx` — rewrite compact hero.
6. `src/components/sections/about.tsx` — simplify to bullets; move skills to stack.
7. `src/components/sections/projects.tsx` — vertical project rows.
8. `src/components/sections/contact.tsx` — contact cards + send email; drop form (or keep EmailJS behind button).
9. **New** `src/components/sections/contributions.tsx` — 26×7 grid.
10. **New** `src/components/sections/experience.tsx` — jobs + education.
11. **New** `src/components/sections/stack.tsx` — grouped pills.
12. `src/App.tsx` — unchanged.

## 6. Implementation phases

- **Phase 0 — Tokens & fonts** (low risk): update `index.css`, verify theme toggle still works.
- **Phase 1 — Shell**: rewrite `layout.tsx` + `navbar.tsx` to new column/hatch structure.
- **Phase 2 — Hero + social row + contributions**: rewrite hero, add contributions.
- **Phase 3 — About + Projects**: convert to new formats.
- **Phase 4 — Experience + Stack**: new sections from existing data.
- **Phase 5 — Contact**: new cards + send-email button; decide on form removal.
- **Phase 6 — Cleanup**: remove unused shadcn imports, framer-motion if unused, lint/build, responsive check (mobile widths), accessibility (focus, aria).

## 7. Open questions / decisions needed

1. **Experience data**: current portfolio has no real jobs — only hackathon placements. Keep placeholders, or convert achievements into a separate "Achievements" section?
2. **Phone number**: not present in repo. Provide or keep placeholder.
3. **City**: not present. Provide or keep placeholder.
4. **GitHub contributions**: static placeholder vs. live data at build time (requires GitHub API + token).
5. **Contact form**: new design removes it. Keep EmailJS form as a fallback ("Send an email" opens mailto) or remove dependency?
6. **Avatar**: use `pic.jpg` or a new image?
7. **Theme default**: current defaults to dark; new design toggle starts based on `isDark`. Keep dark default?
8. **Animations**: new design is static; drop framer-motion entirely or keep subtle entrance animations?

## 8. Risks

- Large visual rewrite; existing shadcn components may remain unused but harmless.
- Content placeholders must be filled by user; leaving brackets looks unfinished.
- Mobile responsiveness: 780px column with borders must collapse gracefully (remove side borders on small screens).
- Accessibility: "More" `<details>` dropdown needs keyboard support (native `<details>` handles it).

## 9. Out of scope

- Adding new pages/routes.
- Backend changes.
- SEO/meta beyond title.
