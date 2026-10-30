# UI Redesign Plan v2 — Diff vs. current implementation

Reference design: `Raj Nandan Portfolio Layout.html` (newer export). Current implementation was built against the previous export. This document compares the **current code** to the **new design** and lays out the next changes. No code changes yet.

## 1. High-level differences

| Area | Current implementation | New design | Impact |
|---|---|---|---|
| Container width | 780px | **800px** | Update max-width + borders |
| Theme tokens | `--soft #f5f5f5/#171717`, no accent | `--soft #f7f7f7/#141414`, **+ `--accent`** (#3d5a8c light / #9fb4d8 dark) | Update index.css vars |
| Nav | Basic navlinks, radius 8 toggle | Nav links with animated underline; toggle radius 10; **scroll progress bar** under nav | Add progress bar + navlink styles |
| Hero | Compact: avatar, name, tagline, status, city | **Larger**: spinning dashed ring around avatar, float animation, green status dot with ping, 44px name, **rotating words** (Design/Build/Ship/Iterate/Repeat), description, pills row below | Rewrite hero |
| Pills | Social row (bordered cells) | Rounded-full pills with icons + hover lift | Replace social row |
| Details row | — | Focus/Current/Location cards — **hidden (display:none) in design** | Optional: skip or implement hidden |
| Contributions | 26×7 grid, simple | **53×7 full-year grid** in a card, month labels, cell pop+hover, tooltip date, legend, link to GitHub | Rewrite contributions |
| CTA card | — | "Interested in working together?" — **hidden (display:none)** | Optional |
| Marquee | — | Scrolling words — **hidden (display:none)** | Optional |
| Stack | 4 groups, plain pills | 5 numbered rows, chips with icons, dim-on-hover, subtitle in accent, 32px heading | Rewrite stack + add icon system |
| Projects | Vertical list rows | **Card grid** (flex 1 1 320px) with gradient thumbnail, "[SCREENSHOT]" badge, hover lift, Live/Source links, "View all projects" button | Rewrite projects |
| Experience | Logo placeholders + bullets | **Timeline** with vertical line + dots (tl-dot) | Rewrite experience |
| About section | Bullets + profiles | **Removed** in new design | Delete about section |
| Contact | Horizontal cards (mobile/linkedin/email) | **Vertical rows** (mobile/linkedin/leetcode/email) with hover slide, arrow icons | Rewrite contact |
| Footer | Simple text | Large outlined "Raj Nandan" mark (text-stroke), "Last updated" date + copyright | Rewrite footer |
| Animations | None (removed framer-motion) | rise/fadeIn/pop/spin/ping/marquee/grow/roll/floaty + scroll-driven progress & reveal + reduced-motion | Add CSS keyframes + classes |
| Tech icons | None | `window.TECH_ICONS` SVG paths (simple-icons) | Add icon mapping or dependency |

## 2. New CSS variables

```css
:root { --soft:#f7f7f7; --accent:#3d5a8c; ... }  /* --soft changed */
.dark { --soft:#141414; --accent:#9fb4d8; ... }
```

## 3. Files to change

1. `src/index.css` — update `--soft`, add `--accent`, add all keyframes/classes (rise, reveal, progress, navlink, ring, avatar, words, dot, cell, pill, btn, marquee, srow, tchip, card, thumb, row, tl-dot, mark) + reduced-motion media query. Also keep old vars for compatibility.
2. `src/components/layout.tsx` — width 800px; remove About; new section order: Hero, Pills (inside hero), Contributions, Stack, Projects, Experience, Contact, Footer. Add progress bar in nav.
3. `src/components/navbar.tsx` — navlink class, toggle radius 10, progress bar slot.
4. `src/components/sections/hero.tsx` — rewrite with ring, floaty, status dot, rotating words, description, pills.
5. `src/components/sections/contributions.tsx` — 53×7 grid, month labels, card container, legend, GitHub link.
6. `src/components/sections/stack.tsx` — 5 rows numbered, chips with icons, dim-on-hover, accent subtitle.
7. `src/components/sections/projects.tsx` — card grid with gradient thumbnails.
8. `src/components/sections/experience.tsx` — timeline with dots/line.
9. `src/components/sections/contact.tsx` — vertical rows incl. LeetCode.
10. `src/components/sections/about.tsx` — **delete** (or keep unused).
11. Footer moved into layout with `.mark`.

## 4. Content updates

- Stack groups change to: Languages (JS, TS, Python, Java), Frontend (React, Next.js, Tailwind, HTML5, CSS, shadcn/ui, React Router), Backend & Databases (Node, Express, Spring Boot, Postgres, Mongo, MySQL, Prisma, Kafka, RabbitMQ, Redis, nginx), Infrastructure (Docker, Vercel, Netlify), Workflow (Git, GitHub, Figma).
- Projects: need `art` gradient per project + screenshot badge (static). Keep existing 4 projects mapped.
- Experience: timeline entries; education last.
- Contact: add LeetCode row.
- Footer: "Last updated · October 30, 2026".

## 5. Tech icon strategy

The design references `window.TECH_ICONS` (simple-icons SVG paths). Options:
- (A) Add `simple-icons` npm package and build a slug→path map at runtime.
- (B) Skip icons in chips (text only) — simpler, still looks fine.
- (C) Hand-pick a few lucide icons.

Recommend (A) if we want fidelity; (B) if we want to avoid dependency. Plan: start with (B), optionally upgrade to (A).

## 6. Hidden sections decision

DETAILS, CTA, MARQUEE are `display:none` in the design (intentionally disabled). Plan: **omit them** to keep DOM clean, but keep CSS classes in case we enable later. If user wants them, flip to display:flex/block.

## 7. Implementation phases

- Phase 0 — Tokens: update `--soft`, add `--accent` in index.css.
- Phase 1 — CSS: add all keyframes + utility classes + reduced-motion.
- Phase 2 — Shell: width 800px, progress bar, navlink, footer mark.
- Phase 3 — Hero: ring, floaty, status dot, rotating words, pills.
- Phase 4 — Contributions: 53×7 card with months/legend.
- Phase 5 — Stack: numbered rows, chips, dim-on-hover.
- Phase 6 — Projects: card grid.
- Phase 7 — Experience: timeline.
- Phase 8 — Contact: vertical rows.
- Phase 9 — Remove About; cleanup; build.

## 8. Open questions

1. Enable the hidden sections (Details/CTA/Marquee) or keep omitted?
2. Tech icons: full simple-icons set or text-only chips?
3. Rotating words: use the fixed list (Design/Build/Ship/Iterate/Repeat) or portfolio-specific words?
4. Keep real GitHub contributions (53×7, full year) — yes, map API data to 53 weeks instead of 26.
5. Remove `about.tsx` entirely or keep as unused?
6. Footer "Last updated" date: auto-generate build date or hardcode?

## 9. Risks

- The CSS uses `animation-timeline: view()` / `scroll()` which only works in Chromium; fallbacks provided via `@supports`. Fine.
- simple-icons dependency increases bundle; optional.
- Removing About loses the LeetCode/GFG profile links; move them to Contact or Pills (already has LeetCode).
