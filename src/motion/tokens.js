/**
 * Central motion configuration for the whole site.
 *
 * This is infrastructure only — durations/easings/scroll config that
 * future section-level animations (reveals, parallax, transitions) will
 * consume, plus the settings that drive the global smooth-scroll layer
 * itself. No section animation is implemented here.
 */

/** Duration scale, in seconds (for JS-driven animation) and ms (for CSS). */
export const duration = {
  fast: { s: 0.15, ms: 150 },
  base: { s: 0.3, ms: 300 },
  slow: { s: 0.6, ms: 600 },
  slower: { s: 0.9, ms: 900 },
};

/**
 * Easing curves as cubic-bezier tuples, usable directly by CSS
 * (`cubic-bezier(...)`) and by JS animation libraries that accept the
 * same 4-number format (Lenis, Framer Motion, GSAP, etc).
 */
export const easing = {
  standard: [0.4, 0, 0.2, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  inOut: [0.65, 0.05, 0.36, 1],
};

const toCssBezier = ([x1, y1, x2, y2]) => `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;

export const easingCss = {
  standard: toCssBezier(easing.standard),
  out: toCssBezier(easing.out),
  in: toCssBezier(easing.in),
  inOut: toCssBezier(easing.inOut),
};

/**
 * Lenis smooth-scroll configuration. `smoothWheel` drives desktop
 * mouse/trackpad scrolling; touch devices are intentionally left on
 * native scroll behavior (see SmoothScrollProvider) rather than
 * smoothed, per platform convention and to avoid fighting the OS's own
 * touch/momentum handling.
 */
export const scrollConfig = {
  duration: 1.1,
  easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic, matches `easing.out` in shape
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 1,
  wheelMultiplier: 1,
  anchorScrollOffset: 0,
};
