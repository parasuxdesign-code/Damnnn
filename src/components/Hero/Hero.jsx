import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="container hero__content">
        <p className="hero__eyebrow">✳</p>
        <h1 className="hero__title">
          DAMNNN.
          <span className="hero__subtitle">CREATIVE STUDIO</span>
        </h1>
        <p className="hero__tagline">
          You bring the vision<br />
          We make it <strong>DAMNNN</strong> good
        </p>
        <a href="#contact" className="btn btn--primary hero__cta">Let's talk</a>
      </div>
    </section>
  );
}
