import { useRef, useState } from 'react';
import './ShowreelVideo.css';

/**
 * Dedicated video component for the showreel.
 * Drop the provided MP4 at public/videos/showreel.mp4 — this path is wired up
 * and ready; do not swap in a different asset.
 */
const VIDEO_SRC = '/videos/showreel.mp4';
const POSTER_SRC = '/images/showreel-poster.jpg';

export default function ShowreelVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="showreel-video">
      <video
        ref={videoRef}
        className="showreel-video__element"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        controls={false}
        playsInline
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        Your browser does not support the video tag.
      </video>

      <button
        type="button"
        className="showreel-video__play"
        onClick={handlePlayToggle}
        aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
}
