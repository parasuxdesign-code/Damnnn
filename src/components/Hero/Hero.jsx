import HeroVideo from './HeroVideo.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroVideo />
      <div className="container hero__content">
        <div className="hero__logo-block">
          <h1 className="hero__title">DAMNNN.</h1>
          <p className="hero__subtitle">Creative Studio</p>
        </div>

        <div className="hero__pitch">
          <span className="hero__asterisk" aria-hidden="true">✳</span>
          <div className="hero__pitch-copy">
            <p className="hero__tagline">
              <span className="hero__tagline-line">You bring the vision</span>
              <span className="hero__tagline-line">
                We make it <strong>DAMNNN good</strong>
              </span>
            </p>
            <a href="#contact" className="btn btn--primary hero__cta">Let's Talk &nbsp;-&gt;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
