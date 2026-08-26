# SyntrioLabs — Next.js

A pixel-perfect 1:1 recreation of the original SyntrioLabs single-page site, rebuilt on the **Next.js App Router** with React and TypeScript.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Approach

The original design is the source of truth — no redesign or reinterpretation.

- **Styling** — the original CSS is preserved **verbatim** in `app/globals.css`. Because every selector in the source is global, this guarantees identical typography, colors, gradients, spacing, borders, shadows, hover states, transitions, keyframe animations, and responsive breakpoints (`900px`, `560px`).
- **Fonts** — Google Fonts (`Syne`, `Fraunces`) are loaded via `<link>` in `app/layout.tsx`.
- **Markup** — split into clean, reusable React components under `components/`, each reproducing the source HTML structure and class names exactly.
- **Images** — served through `next/image` (Unsplash photos + simpleicons.org marquee logos); remote hosts are whitelisted in `next.config.mjs`.
- **Navigation** — in-page anchors use `next/link`.

## Interactivity (ported 1:1 from the original vanilla JS)

| Behavior | Component |
| --- | --- |
| Sticky nav `scrolled` state on scroll | `Nav.tsx` |
| Scroll-reveal via `IntersectionObserver` + `--i` stagger | `ScrollReveal.tsx` |
| Terminal typing, animated bars, agent progress bar | `Hero.tsx` |
| Dual infinite marquees (top + reverse) | `TechStack.tsx` |
| Project filters + 3D tilt / cursor glare | `Projects.tsx` |
| Testimonial carousel (dots, arrows, 5.5s autoplay) | `Testimonials.tsx` |
| Contact form fake-submit + success message | `Contact.tsx` |

## Structure

```
app/
  layout.tsx      # <html>, fonts, global CSS
  page.tsx        # composes all sections
  globals.css     # original CSS, verbatim
components/       # Nav, Hero, TechStack, About, Services, Projects,
                  # Process, Why, Testimonials, Contact, Footer, ScrollReveal
next.config.mjs   # remote image hosts + turbopack root
```
