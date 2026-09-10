import HeroVideo from './HeroVideo.jsx';
import Icon from '../Icon/Icon.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroVideo />
      <div className="container hero__content">
        <Icon name="auto_awesome" className="hero__eyebrow-icon" size={28} />
        <h1 className="hero__title">
          DAMNNN.
          <span className="hero__subtitle">Creative Studio</span>
        </h1>
        <p className="hero__tagline">
          You bring the vision<br />
          We make it <strong>DAMNNN</strong> good
        </p>
        <a href="#contact" className="btn btn--primary hero__cta">
          Let's talk
          <Icon name="arrow_outward" size={18} />
        </a>
      </div>
    </section>
  );
}
