import './HeroBackground.css';

/**
 * Lowest visual layer in the Hero: the supplied hero-background.png,
 * sitting beneath HeroVideo. Purely decorative — never intercepts
 * pointer events. Its own component/file so the background can be
 * retuned independently of the video or content layers later.
 */
export default function HeroBackground() {
  return (
    <img
      className="hero-background"
      src="/assets/hero-background.png"
      alt=""
      aria-hidden="true"
    />
  );
}
