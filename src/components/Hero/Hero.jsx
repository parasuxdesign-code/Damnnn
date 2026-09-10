import HeroVideo from './HeroVideo.jsx';
import HeroOverlay from './HeroOverlay.jsx';
import InlineSvg from '../Icon/InlineSvg.jsx';
import asteriskLargeSvg from '../../assets/icons/asterisk-large.svg?raw';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroVideo />
      <HeroOverlay />
      <div className="container hero__content">
        <img
          className="hero__logo-block js-enter"
          style={{ '--enter-delay': '150ms' }}
          src="/assets/DAMNNN wordmark (hero).svg"
          alt="DAMNNN. Creative Studio"
          width={679}
          height={281}
        />

        <div className="hero__pitch">
          <span className="hero__asterisk js-enter" style={{ '--enter-delay': '300ms' }}>
            <InlineSvg raw={asteriskLargeSvg} className="motion-spin-slow" />
          </span>
          <div className="hero__pitch-copy">
            <p className="hero__tagline js-enter" style={{ '--enter-delay': '380ms' }}>
              <span className="hero__tagline-line">You bring the vision</span>
              <span className="hero__tagline-line">
                We make it <strong>DAMNNN good</strong>
              </span>
            </p>
            <a
              href="#contact"
              className="btn btn--primary hero__cta js-enter"
              style={{ '--enter-delay': '480ms' }}
            >
              Let's Talk &nbsp;<span className="hero__cta-arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
