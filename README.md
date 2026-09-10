# DAMNNN — Creative Studio Landing Page

React + Vite implementation of the DAMNNN landing page, built section-by-section from the supplied Figma design.

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/
    Header/          site nav bar
    Hero/             red hero band with headline + CTA
    ServicesMarquee/  scrolling services strip
    Showreel/         showreel section + ShowreelVideo (dedicated video component)
    WhatWeDo/         "we make ideas look damnn good" service cards
    Work/             project carousel ("work we're damnn proud of")
    Process/          4-step process (Discover / Define / Design / Deliver)
    Team/             "partners in crime" team cards
    CTA/               closing contact section
    Footer/           site footer
  styles/
    tokens.css        design tokens (color, type, spacing, layout)
    motion-tokens.css motion CSS custom properties + prefers-reduced-motion rules
    global.css        resets + container/grid/section primitives
  motion/
    tokens.js             central duration/easing/scroll config (JS side)
    SmoothScrollProvider.jsx  Lenis integration, mounted once at the app root
    useReducedMotion.js       live prefers-reduced-motion hook
```

Each section is a self-contained component with its own CSS file, so any section can be restyled or restructured independently.

## Motion foundation

`src/motion/` is global infrastructure, not section animation:

- **Smooth scroll** — [Lenis](https://github.com/darkroomengineering/lenis) is mounted once in `SmoothScrollProvider` (wrapped around `<App />` in `main.jsx`) and drives its own `requestAnimationFrame` loop. Desktop wheel/trackpad scrolling is smoothed; touch devices keep native scroll/momentum (`syncTouch: false`) rather than fighting the OS.
- **Reduced motion** — `useReducedMotion()` watches `prefers-reduced-motion` live. When it's set, Lenis is never instantiated, `<html>` never gets Lenis's `.lenis`/`.lenis-smooth` classes, and both native and anchor-link scrolling fall back to instant (`scroll-behavior: auto`) rather than smooth.
- **Anchor links** — same-page `href="#id"` clicks are intercepted app-wide and routed through Lenis's `scrollTo` (or a native `scrollIntoView` fallback when Lenis is off), so e.g. the Hero's "Let's Talk" button scrolls smoothly to the CTA section's `#contact` id.
- **Tokens** — `src/motion/tokens.js` (duration/easing/scroll config, for JS) and `src/styles/motion-tokens.css` (the same durations/easings as CSS custom properties, e.g. `--duration-base`, `--ease-out`) are the single source of truth future section animations should read from rather than hardcoding numbers.
- **`useSmoothScroll()`** exposes the shared Lenis instance and a `scrollTo` helper to any component that needs to trigger a scroll programmatically later.

This pass is infrastructure only — no section-specific reveals, parallax, or scroll-triggered animation exist yet.

## Video asset

The Hero/Showreel video is wired through `src/components/Showreel/ShowreelVideo.jsx`, which expects the file at:

```
public/videos/showreel.mp4
```

Drop the provided MP4 there — no code changes needed.

## Images

Placeholder image paths are referenced under `public/images/` — see `public/images/README.md` for the expected filenames. Swap in exports from Figma as they become available.

## Status

This pass focuses on structure: semantic hierarchy, componentization, the container/grid system, design tokens, and responsive foundations (mobile breakpoints on multi-column sections). Visual polish, animation, and interaction detail are intentionally left for a follow-up pass.
