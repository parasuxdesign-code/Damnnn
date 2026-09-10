import { useRef, useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import './ShowreelVideo.css';

/**
 * Dedicated video component for the showreel player.
 * Currently points at the same hero export (public/videos/hero-section.mp4)
 * as a working placeholder — swap in a dedicated showreel cut at
 * public/videos/showreel.mp4 and update VIDEO_SRC when it's ready.
 */
const VIDEO_SRC = '/videos/hero-section.mp4';

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
        <Icon name={isPlaying ? 'pause' : 'play_arrow'} size={28} />
      </button>
    </div>
  );
}
