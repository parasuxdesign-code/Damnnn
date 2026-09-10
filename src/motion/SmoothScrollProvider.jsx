import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { scrollConfig } from './tokens.js';
import { useReducedMotion } from './useReducedMotion.js';

const SmoothScrollContext = createContext(null);

/**
 * Global smooth-scroll foundation. Owns the single Lenis instance and
 * its requestAnimationFrame loop for the whole app, and exposes it
 * through context so any component can call `scrollTo` (e.g. a future
 * section-level nav or CTA) without instantiating its own scroller.
 *
 * When the user has prefers-reduced-motion set, Lenis is never
 * instantiated at all — the page uses plain native scrolling, and
 * `scrollTo` falls back to a native (instant) scroll so callers don't
 * need to branch on reduced-motion themselves.
 */
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      lenisRef.current = null;
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      duration: scrollConfig.duration,
      easing: scrollConfig.easing,
      smoothWheel: scrollConfig.smoothWheel,
      syncTouch: scrollConfig.syncTouch,
      touchMultiplier: scrollConfig.touchMultiplier,
      wheelMultiplier: scrollConfig.wheelMultiplier,
    });

    lenisRef.current = instance;
    setLenis(instance);

    let rafId;
    const raf = (time) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, [reducedMotion]);

  // Intercept same-page hash link clicks (e.g. the Hero CTA's #contact)
  // so they scroll through Lenis instead of a native instant jump —
  // and so the reduced-motion / no-JS fallback still works, since
  // browsers already handle `<a href="#id">` natively without this.
  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      event.preventDefault();

      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetEl, {
          offset: scrollConfig.anchorScrollOffset,
        });
      } else {
        targetEl.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [reducedMotion]);

  const scrollTo = (target, options) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
      return;
    }

    const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
    targetEl?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo, reducedMotion }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

/**
 * Access the shared Lenis instance / scrollTo helper from any
 * component. Returns `{ lenis: null, scrollTo, reducedMotion: true }`
 * when smooth scrolling is disabled, so callers can use `scrollTo`
 * unconditionally.
 */
export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
}
