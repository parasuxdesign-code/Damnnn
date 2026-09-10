import HeroVideo from './HeroVideo.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroVideo />
      <div className="container hero__content">
        <img
          className="hero__logo-block"
          src="/assets/DAMNNN wordmark (hero).svg"
          alt="DAMNNN. Creative Studio"
          width={679}
          height={281}
        />

        <div className="hero__pitch">
          <img
            className="hero__asterisk"
            src="/assets/Asterisk mark (large).svg"
            alt=""
            width={98}
            height={98}
          />
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
