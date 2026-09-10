import './HeroOverlay.css';

/**
 * Dedicated depth layer between the Hero video and the Hero content.
 * Its own component so it can be tuned independently later without
 * touching the video or content layers. Purely decorative — never
 * intercepts pointer events.
 */
export default function HeroOverlay() {
  return (
    <img
      className="hero-overlay"
      src="/assets/hero-background.png"
      alt=""
      aria-hidden="true"
    />
  );
}
