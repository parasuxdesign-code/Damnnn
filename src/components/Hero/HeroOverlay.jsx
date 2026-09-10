import './HeroOverlay.css';

/**
 * Dedicated depth layer between the Hero video and the Hero content.
 * Its own component so the overlap/fade zone can be tuned independently
 * later (size, position, color stops) without touching the video or
 * content layers. Purely decorative — never intercepts pointer events.
 */
export default function HeroOverlay() {
  return <div className="hero-overlay" aria-hidden="true" />;
}
