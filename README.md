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
    global.css        resets + container/grid/section primitives
```

Each section is a self-contained component with its own CSS file, so any section can be restyled or restructured independently.

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
