import './HeroVideo.css';

/**
 * Dedicated background video for the Hero section.
 * Drop the provided MP4 at public/videos/hero-section.mp4 — already wired up.
 */
const VIDEO_SRC = '/videos/hero-section.mp4';

export default function HeroVideo() {
  return (
    <div className="hero-video" aria-hidden="true">
      <video
        className="hero-video__element"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video__overlay" />
    </div>
  );
}
